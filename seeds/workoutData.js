const { Workout } = require('../models');

const workoutData = [
  {
    workout_id:1,
    title: 'Lower Body',
    description: 'Lower Body',
    day_of_week: 'Monday',
    user_id: '1'
  },
  {
    workout_id:2,
    title: 'Upper Body',
    description: 'Upper Body',
    day_of_week: 'Wednesday',
    user_id: '1'
  },
  {
    workout_id:3,
    title: 'Core',
    description: 'Core',
    day_of_week: 'Friday',
    user_id: '1'
  },
  {
    workout_id:4,
    title: 'Stretch',
    description: 'Stretch',
    day_of_week: 'Saturday',
    user_id: '1'
  }
];

const seedWorkouts = () => Workout.bulkCreate(workoutData);

module.exports = seedWorkouts;
