const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Reservation extends Model { }

Reservation.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // When reservation was created
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    // When machine is started
    started_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    // Reservation time PLUS 75 minutes
    reserve_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    // Reservation time PLUS 15 minutes
    expire_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    is_complete: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    machine_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'machine',
        key: 'id'
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'reservation',
  }
);

module.exports = Reservation;