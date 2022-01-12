const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class WorkoutEquipment extends Model {}

WorkoutEquipment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    workout_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model:'workout',
        key:'id'
      }
    },
    equipment_id:{
      type:DataTypes.INTEGER,
      references:{
        model:'equipment',
        key:'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'workout_equipment',
  }
);

module.exports = WorkoutEquipment;
