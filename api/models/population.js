'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcryptjs');


const sql = require("../config/db");

module.exports = (sequelize, DataTypes) => {

    class Population extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
          // define association here
        }
      };
      Population.init({
        reference_area: DataTypes.STRING,
        time_period: DataTypes.STRING,
        age_15_plus: DataTypes.STRING,
        age_15_64: DataTypes.STRING,
        age_15_24: DataTypes.STRING,
        age_25_plus: DataTypes.STRING,
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
       modelName: 'Population',
       paranoid: true
     });

    return Population;
};
 
