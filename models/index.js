const User = require('./User');
const Schedule = require('./Schedule');
const Workout = require('./Workout');
const Exercise = require('./Exercise');
const WorkoutExercise = require('./WorkoutExercise');


// User.belongsToMany(Exercise,{
//   through: Schedule,
//   as:'scheduled_exercise',
//   foreignKey:'id'
// })

// Exercise.belongsToMany(User,{ 
  
//   through:Schedule,
//   as:'scheduled_exercise',
//   foreignKey:'exercise_id'
// })

Schedule.belongsTo(User,{
  foreignKey:'user_id'
})

// TODO Was based on Painting model of original files, which hypothetically relates to the Exercise model, but may need to be changed
Schedule.belongsTo(Exercise,{
  foreignKey:'exercise_id'
})

User.hasMany(Schedule,{
  foreignKey:'user_id'
})

// User.hasMany(Workout, {
//   foreignKey: 'user_id',
// });

Workout.belongsTo(User, {
  foreignKey: 'user_id',
});

Exercise.belongsToMany(Workout, {
  through: WorkoutExercise
});

Workout.belongsToMany(Exercise, {
  through: WorkoutExercise
});

module.exports = { User, Workout, Exercise, WorkoutExercise, Schedule };

