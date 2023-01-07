'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Roles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      role_name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      role_description: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        // field:"created_at", 
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        // field:"updated_at", 
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Roles');
  }
};