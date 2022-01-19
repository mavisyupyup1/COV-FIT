const User = require('./User');

const Gallery = require('./Gallery');
const Painting = require('./Painting');
const Schedule = require('./Schedule');


// User.belongsToMany(Painting,{
//   through: Schedule,
//   as:'scheduled_paintings',
//   foreignKey:'user_id'
// })

// Painting.belongsToMany(User,{
//   through:Schedule,
//   as:'scheduled_paintings',
//   foreignKey:'painting_id'
// })

Schedule.belongsTo(User,{
  foreignKey:'user_id'
})

Schedule.belongsTo(Painting,{
  foreignKey:'painting_id'
})

User.hasMany(Schedule,{
  foreignKey:'user_id'
})

const Workout = require('./Workout');
const Exercise = require('./Exercise');
const WorkoutExercise = require('./WorkoutExercise');


User.hasMany(Workout, {
  foreignKey: 'user_id',
});

Workout.belongsTo(User, {
  foreignKey: 'user_id',
});


module.exports = { User, Gallery, Painting,Schedule };

Exercise.belongsToMany(Workout, {
  through: WorkoutExercise
});

Workout.belongsToMany(Exercise, {
  through: WorkoutExercise
});

module.exports = { User, Workout, Exercise, WorkoutExercise };

