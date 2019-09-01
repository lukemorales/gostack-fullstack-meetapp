import Sequelize, { Model } from 'sequelize';
import { isBefore } from 'date-fns';

export default class Meetup extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        description: Sequelize.STRING,
        location: Sequelize.STRING,
        date: Sequelize.DATE,
        banner_id: Sequelize.INTEGER,
        organizer_id: Sequelize.INTEGER,
        past: {
          type: Sequelize.VIRTUAL,
          get() {
            return isBefore(this.date, Date.now());
          },
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.hasOne(models.File, {
      foreignKey: 'id',
      sourceKey: 'banner_id',
      as: 'banner',
    });

    this.belongsTo(models.User, {
      foreignKey: 'organizer_id',
      sourceKey: 'id',
      as: 'organizer',
    });
  }
}
