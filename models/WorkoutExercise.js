const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class WorkoutExercise extends Model {}

WorkoutExercise.init(
  {
    workoutexercise_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    workout_id: {
      type: DataTypes.INTEGER,
      references: {
          model: "workout",
          key: "workout_id"
      }
    },
    exercise_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "exercise",
            key: "exercise_id"
        }
      },
    
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'workoutexercise',
  }
);

module.exports = WorkoutExercise;