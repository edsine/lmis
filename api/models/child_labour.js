'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcryptjs');


const sql = require("../config/db");

module.exports = (sequelize, DataTypes) => {

    class ChildLabour extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
          // define association here
        }
      };
      ChildLabour.init({
        ref_area: DataTypes.STRING,
        indicator: DataTypes.STRING,
        source: DataTypes.STRING,
        sex: DataTypes.STRING,
        classif1: DataTypes.STRING,
        time: DataTypes.STRING,
        obs_value: DataTypes.STRING,
        obs_status: DataTypes.STRING,
        note_source: DataTypes.STRING,
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: null
        },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: null
        },
        deletedAt: {
         field: 'deleted_at',
         type: DataTypes.DATE,
         allowNull: true,
         defaultValue: null
        },
     }, {
       sequelize,
       modelName: 'ChildLabour',
       paranoid: true
     });

    return ChildLabour;
};
 
