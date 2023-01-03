'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  class Indicator extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  };
  Indicator.init({
    title: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    imagePath:  {
      type: DataTypes.STRING,
      allowNull: true
    },
     createdAt: {
         field: 'created_at',
         type: DataTypes.DATE,
         allowNull: true,
     },
     updatedAt: {
        field: 'updated_at',
        type: DataTypes.DATE,
         allowNull: true,
     },
     deletedAt: {
      field: 'deleted_at',
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null
     }
  }, {
    sequelize,
    modelName: 'Indicator',
    paranoid: true,
    timestamps: true,
    //underscored: true,
    //freezeTableName: true
  });

  return Indicator;
};