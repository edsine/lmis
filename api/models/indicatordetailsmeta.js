"use strict";
const { Model } = require("sequelize");
const { defaultDimensions } = require("../utils/dimensions");
module.exports = (sequelize, DataTypes) => {
  class IndicatorDetailsMeta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  const otherFields = {};
  for (const dimension in defaultDimensions) {
    otherFields[defaultDimensions[dimension].value] = DataTypes.STRING;
  }
  IndicatorDetailsMeta.init(
    {
      indicator_details_id: DataTypes.INTEGER,
      ...otherFields,
    },
    {
      sequelize,
      modelName: "IndicatorDetailsMeta",
    }
  );
  return IndicatorDetailsMeta;
};
