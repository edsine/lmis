'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      ref_area: {
        type: Sequelize.STRING,
        allowNull: true
      },
      indicator: {
        type: Sequelize.STRING,
        allowNull: true
      },
      source: {
        type: Sequelize.STRING,
        allowNull: true
      },
      sex: {
        type: Sequelize.STRING,
        allowNull: true
      },
      classif1: {
        type: Sequelize.STRING,
        allowNull: true
      },
      time: {
        type: Sequelize.STRING,
        allowNull: true
      },
      obs_value: {
        type: Sequelize.STRING,
        allowNull: true
      },
      obs_status: {
        type: Sequelize.STRING,
        allowNull: true
      },
      note_classif: {
        type: Sequelize.STRING,
        allowNull: true
      },
      note_indicator: {
        type: Sequelize.STRING,
        allowNull: true
      },
      note_source: {
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
    await queryInterface.dropTable('Employees');
  }
};