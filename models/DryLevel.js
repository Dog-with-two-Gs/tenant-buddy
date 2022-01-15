const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class DryLevel extends Model { }

DryLevel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    level: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    default_time: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'dry_level',
  }
);

module.exports = DryLevel;