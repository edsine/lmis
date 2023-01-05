"use strict";
const { Model } = require("sequelize");
const Indicator = require("../models").Indicator;
module.exports = (sequelize, DataTypes) => {
  class IndicatorDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      IndicatorDetails.belongsTo(models.Indicator, {foreignKey: 'indicator_id', as: 'indicator'})
    }
  }
  IndicatorDetails.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      measure: DataTypes.STRING,
      dimensions: DataTypes.JSON,
      feasibleCharts: DataTypes.JSON,
      sampleExcelPath: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      indicator_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "IndicatorDetails",
    }
  );
  return IndicatorDetails;
};
