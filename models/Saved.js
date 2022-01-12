const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Saved extends Model {}

Saved.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    workout_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'workout',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'saved'
  }
);

module.exports = Saved;
