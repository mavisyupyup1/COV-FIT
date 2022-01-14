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
    Year:{
        type: DataTypes.INTEGER,
        allowNull: false,
        len: [4]
      },
      Month:{
        type: DataTypes.INTEGER,
        allowNull: false,
        len: [1]
      },
      Day: {
        type: DataTypes.INTEGER,
        allowNull: false,
        len: [1]
      },
      Hour:{
        type: DataTypes.INTEGER,
        allowNull: false,
        len: [1,2]
      },
      Minute:{
        type: DataTypes.INTEGER,
        allowNull: false,
        len: [4]
      }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'schedule',
  }
);

module.exports = Schedule;