"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "Permissions",
      [
        //Indicators
        {
          perm_name: "indicator_add",
          perm_description: "Add Indicator",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          perm_name: "indicator_update",
          perm_description: "Update Indicator",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          perm_name: "indicator_get",
          perm_description: "Get Indicator",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          perm_name: "indicator_get_all",
          perm_description: "Get All Indicators",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          perm_name: "indicator_delete",
          perm_description: "Delete Indicator",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Indicator Details
        {
          perm_name: "indicator_detail_add",
          perm_description: "Add Indicator Details",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          perm_name: "indicator_detail_update",
          perm_description: "Update Indicator Details",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          perm_name: "indicator_detail_get",
          perm_description: "Get Indicator Details",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          perm_name: "indicator_detail_get_all",
          perm_description: "Get All Indicator Details",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          perm_name: "indicator_detail_delete",
          perm_description: "Delete Indicator Details",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
