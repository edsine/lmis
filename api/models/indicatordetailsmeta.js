"use strict";
const { Model } = require("sequelize");
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
  IndicatorDetailsMeta.init(
    {
      indicator_id: DataTypes.INTEGER,
      data: DataTypes.JSONB,
      indexes: [
        {
          fields: ["data"],
          using: "gin",
          operator: "jsonb_path_ops",
        },
      ],
    },
    {
      sequelize,
      modelName: "IndicatorDetailsMeta",
    }
  );
  return IndicatorDetailsMeta;
};
