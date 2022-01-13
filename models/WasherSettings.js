const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class WasherSettings extends Model { }

WasherSettings.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },  
    cycle_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'cycle',
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
    modelName: 'washerSettings',
  }
);

module.exports = WasherSettings;