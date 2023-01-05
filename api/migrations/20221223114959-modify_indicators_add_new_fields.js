"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.addColumn(
      "Indicators", // table name
      "dimensions", // new field name
      {
        type: Sequelize.STRING,
        allowNull: false,
        get() {
          return this.getDataValue("dimensions").split(";");
        },
        set(val) {
          this.setDataValue("dimensions", val.join(";"));
        },
      }
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn(
      "Indicators", // table name
      "dimensions" // field name
    );
  },
};
