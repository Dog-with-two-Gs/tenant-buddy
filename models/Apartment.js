const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Apartment extends Model { }

Apartment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    occupants: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    building_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: 'building',
          key: 'id'
      }
    },
    apartment_no: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'apartment',
  }
);

module.exports = Apartment;
