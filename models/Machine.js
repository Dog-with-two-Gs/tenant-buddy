const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Machine extends Model { }

Machine.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    opening: {
        type: DataTypes.STRING,
        allowNull: false,
    },  
    status_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1, 
        references: {
          model: 'status',
          key: 'id'
        }
    },
    complex_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'complex',
            key: 'id'
        }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'machine',
  }
);

module.exports = Machine;