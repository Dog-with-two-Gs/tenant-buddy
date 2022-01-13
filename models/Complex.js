const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Complex extends Model { }

Complex.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    street_address: {
      type: DataTypes.VARCHAR,
      allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    manager_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: 'employee',
          key: 'id'
      }
    },
    maintenance_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'employee',
            key: 'id'
        }
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'complex',
  }
);

module.exports = Complex;
