const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class DryerSettings extends Model { }

DryerSettings.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    dry_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'dry_level',
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
    modelName: 'dryerSettings',
  }
);

module.exports = DryerSettings;