'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class RolePermission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  RolePermission.init({
    role_id: DataTypes.INTEGER,
    perm_id: DataTypes.INTEGER,
     createdAt: {
         field: 'created_at',
         type: DataTypes.DATE,
     },
     updatedAt: {
         field: 'updated_at',
         type: DataTypes.DATE,
     }
  }, {
    sequelize,
    modelName: 'RolePermission',
  });
  return RolePermission;
};