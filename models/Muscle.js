const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Muscle extends Model {}

Muscle.init(
  {
    // define columns
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement:true
    },
    name:{
      type:DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'muscle',
  }
);

module.exports = Muscle;
