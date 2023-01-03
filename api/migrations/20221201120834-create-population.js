'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Populations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      reference_area: {
        type: Sequelize.STRING,
        allowNull: true
      },
      time_period: {
        type: Sequelize.STRING,
        allowNull: true
      },
      age_15_plus: {
        type: Sequelize.STRING,
        allowNull: true
      },
      age_15_64: {
        type: Sequelize.STRING,
        allowNull: true
      },
      age_15_24: {
        type: Sequelize.STRING,
        allowNull: true
      },
      age_25_plus: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        field: 'created_at',
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: null
    },
    updatedAt: {
        field: 'updated_at',
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: null
    },
    deletedAt: {
     field: 'deleted_at',
     type: Sequelize.DATE,
     allowNull: true,
     defaultValue: null
    }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Populations');
  }
};