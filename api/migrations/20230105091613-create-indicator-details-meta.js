"use strict";

const { defaultDimensions } = require("../utils/dimensions");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("IndicatorDetailsMeta", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      indicator_details_id: {
        type: Sequelize.INTEGER,
      },
      data: {
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

    for (const dimension in defaultDimensions) {
      await queryInterface.addColumn(
        "IndicatorDetailsMeta", // table name
        defaultDimensions[dimension].value, // field name
        {
          type: Sequelize.STRING,
          allowNull: true,
        }
      );
    }
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("IndicatorDetailsMeta");
  },
};
