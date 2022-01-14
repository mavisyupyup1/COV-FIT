const User = require('./User');
const Workout = require('./Workout');
const Exercise = require('./Exercise');
const WorkoutExercise = require('./WorkoutExercise');

User.hasMany(Workout, {
  foreignKey: 'user_id',
});

Workout.belongsTo(User, {
  foreignKey: 'user_id',
});

Exercise.belongsToMany(Workout, {
  through: WorkoutExercise
});

Workout.belongsToMany(Exercise, {
  through: WorkoutExercise
});

module.exports = { User, Workout, Exercise, WorkoutExercise };
