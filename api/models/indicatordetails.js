"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class IndicatorDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  IndicatorDetails.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      measure: DataTypes.STRING,
      dimensions: DataTypes.STRING,
      feasibleCharts: DataTypes.STRING,
      data: DataTypes.JSONB,
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
