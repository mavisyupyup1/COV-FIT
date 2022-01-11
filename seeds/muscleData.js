const { Muscle } = require('../models');

const muscledata = [
  {
    name: 'Upper Body',
    filename:'Upper Body'
  },
  {
    name: 'Lower Body',
    filename:'Lower Body'
 },
  {
    name: 'Core',
    filename:'Core'

  },
  {
    name: 'Whole Body',
  filename:'Whole Body'
},
];

const seedMuscle = () => Muscle.bulkCreate(muscledata);

module.exports = seedMuscle;
