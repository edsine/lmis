"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("IndicatorDetails", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      measure: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      indicator_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      sampleExcelPath: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      dimensions: {
        allowNull: false,
        type: Sequelize.JSON,
      },
      feasibleCharts: {
        allowNull: false,
        type: Sequelize.JSON,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("IndicatorDetails");
  },
};
