const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Muscle=require('./Muscle')
class Workout extends Model {}

Workout.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    muscle_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'muscle',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'workout'
  }
);

module.exports = Workout;
