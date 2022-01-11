const sequelize = require('../config/connection');
const seedMuscle = require('./muscleData');
const seedEquipment = require('./equipmentData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedMuscle();

  await seedEquipment();

  process.exit(0);
};

seedAll();
