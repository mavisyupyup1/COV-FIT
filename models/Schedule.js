const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Schedule extends Model {}

Schedule.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model:'user',
            key:'id'
        }
    },
    painting_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references:{
          model:'painting',
          key:'id'
      }
    },
    start:{
        type: DataTypes.DATE,
        allowNull: false
      },

  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'schedule',
  }
);

module.exports = Schedule;