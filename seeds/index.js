const sequelize = require('../config/connection');
const seedExercises = require('./exerciseData');
const seedWorkouts = require('./workoutData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedExercises();

  await seedWorkouts();

  process.exit(0);
};

seedAll();
