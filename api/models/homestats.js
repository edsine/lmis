'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HomeStats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HomeStats.init({
    statName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    statDesc:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    statValue: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    statSource: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    statPrefix: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
  }, {
    sequelize,
    modelName: 'HomeStats',
    paranoid: true,
    timestamps: true,
  });
  return HomeStats;
};