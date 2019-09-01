import User from '../models/User';
import File from '../models/File';
import Meetup from '../models/Meetup';
import Subscription from '../models/Subscription';

class OrganizerController {
  async index(req, res) {
    try {
      const meetups = await Meetup.findAll({
        where: {
          organizer_id: req.userID,
        },
      });

      return res.status(200).json(meetups);
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }

  async show(req, res) {
    try {
      const meetup = await Meetup.findByPk(req.params.id, {
        include: [
          {
            model: File,
            as: 'banner',
            attributes: ['id', 'path', 'url'],
          },
        ],
      });

      if (!meetup) {
        return res.status(400).json({ error: 'Meetup not found' });
      }

      if (meetup.organizer_id !== req.userID) {
        return res.status(401).json({ error: 'Unauthorized' });
      }

      const subscriptions = await Subscription.findAll({
        where: {
          meetup_id: req.params.id,
        },
        include: [
          {
            model: User,
            as: 'user',
            attributes: ['id', 'name'],
          },
        ],
      });

      return res.status(200).json({ meetup, subscriptions });
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }
}

export default new OrganizerController();
