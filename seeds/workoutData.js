const { Workout } = require('../models');

const workoutData = [
  {
    title: 'Lower Body',
    description: 'Lower Body',
    day_of_week: 'Monday',
    user_id: '1'
  },
  {
    title: 'Upper Body',
    description: 'Upper Body',
    day_of_week: 'Wednesday',
    user_id: '1'
  },
  {
    title: 'Core',
    description: 'Core',
    day_of_week: 'Friday',
    user_id: '1'
  },
  {
    title: 'Stretch',
    description: 'Stretch',
    day_of_week: 'Saturday',
    user_id: '1'
  }
];

const seedWorkouts = () => Workout.bulkCreate(workoutData);

module.exports = seedWorkouts;
