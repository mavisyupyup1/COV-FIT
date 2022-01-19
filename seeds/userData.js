const { User } = require('../models');

const userData = [
  {
    user_id: 1,
    name: 'testi',
    weight: 111,
    username: 'testing',
    email: 'testing1@gmail.com',
    password: 'testing123',
  },
  {
    user_id: 2,
    name: 'testi2',
    weight: 222,
    username: 'testing',
    email: 'testing2@gmail.com',
    password: 'testing123',
  },
  {
    user_id: 3,
    name: 'testi3',
    weight: 333,
    username: 'testing',
    email: 'testing3@gmail.com',
    password: 'testing123',
  },
];

const seedExercises = () => User.bulkCreate(userData);

module.exports = seedExercises;