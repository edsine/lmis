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
      dimensions: {
        allowNull: false,
        type: Sequelize.STRING,
        get() {
          return this.getDataValue("dimensions").split(";");
        },
        set(val) {
          this.setDataValue("dimensions", val.join(";"));
        },
      },
      feasibleCharts: {
        allowNull: false,
        type: Sequelize.STRING,
        get() {
          return this.getDataValue("feasibleCharts").split(";");
        },
        set(val) {
          this.setDataValue("feasibleCharts", val.join(";"));
        },
      },
      data: {
        allowNull: false,
        type: Sequelize.JSONB,
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
