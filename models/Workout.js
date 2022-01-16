const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Workout extends Model {}

Workout.init(
  {
    workout_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    // starting_date: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    // },
    // ending_date: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    // },
    day_of_week: {
      type: DataTypes.STRING,

    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "user_id"
      }
    },

  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'workout',
  }
);

module.exports = Workout;
