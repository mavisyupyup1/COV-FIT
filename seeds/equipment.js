const { Equipment } = require('../models');

const equipmentData = [
  {
    title: 'Barbell',
  },
  {
    title: 'Dumbell',
      },
  {
    title: 'Cable',
      },
  {
    title: 'Kettlebell',
      },
  {
    title: 'Bench',
    },
  {
    title: 'Pull Up Bar',
      },
  {
    title: 'Mat',
      }
];

const seedEquipment = () => Equipment.bulkCreate(equipmentData);

module.exports = seedEquipment;
