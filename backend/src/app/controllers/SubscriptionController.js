import { Op } from 'sequelize';

import User from '../models/User';
import File from '../models/File';
import Meetup from '../models/Meetup';
import Subscription from '../models/Subscription';

import Queue from '../../lib/Queue';
import NewSubscriptionMail from '../jobs/NewSubscriptionMail';

class SubscriptionController {
  async store(req, res) {
    try {
      const meetup = await Meetup.findByPk(req.params.id, {
        include: [
          {
            model: User,
            as: 'organizer',
          },
        ],
      });

      const { userID } = req;

      const user = await User.findByPk(userID);

      if (!meetup) {
        return res.status(400).json({ error: 'Meetup not found' });
      }

      if (meetup.organizer_id === userID) {
        return res
          .status(400)
          .json({ error: "You're already subscribed to your own Meetup" });
      }

      if (meetup.past) {
        return res.status(400).json({
          error: "You're can't subscribe to Meetups that have already happened",
        });
      }

      const isUserSubscribed = await Subscription.findOne({
        where: {
          meetup_id: meetup.id,
          user_id: userID,
        },
      });

      if (isUserSubscribed) {
        return res.status(400).json({
          error: "You're already subscribed to this Meetup",
        });
      }

      const hasMeetupOnTheSameDay = await Subscription.findOne({
        where: {
          user_id: userID,
        },
        include: [
          {
            model: Meetup,
            as: 'meetup',
            where: { date: meetup.date },
          },
        ],
      });

      if (hasMeetupOnTheSameDay) {
        return res.status(400).json({
          error:
            "You're already are subscribed to a Meetup that happens on the same date",
        });
      }

      const userSubscription = await Subscription.create({
        meetup_id: meetup.id,
        user_id: userID,
      });

      await Queue.add(NewSubscriptionMail.key, {
        meetup,
        user,
      });

      return res.status(201).json(userSubscription);
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }

  async index(req, res) {
    try {
      const subscriptions = await Subscription.findAll({
        where: {
          user_id: req.userID,
        },
        include: [
          {
            model: Meetup,
            as: 'meetup',
            where: {
              date: {
                [Op.gt]: new Date(),
              },
            },
            include: [
              {
                model: User,
                as: 'organizer',
                attributes: ['id', 'name', 'email'],
              },
              {
                model: File,
                as: 'banner',
                attributes: ['id', 'path', 'url'],
              },
            ],
          },
        ],
      });

      return res.status(200).json(subscriptions);
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }

  async delete(req, res) {
    try {
      const subscription = await Subscription.findByPk(req.params.id);

      if (!subscription) {
        return res.status(400).json({
          error: "You're not subscribed to this Meetup",
        });
      }

      await subscription.destroy();

      return res
        .status(200)
        .json({ success: 'Your subscription to this Meetup has been canceled' })
        .send();
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }
}

export default new SubscriptionController();
