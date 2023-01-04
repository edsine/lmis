"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     *     */
    await queryInterface.bulkInsert(
      "Permissions",
      [
        //Users
        {
          perm_name: "user_add",
          perm_description: "Add User",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          perm_name: "user_update",
          perm_description: "Update User",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          perm_name: "user_get",
          perm_description: "Get User",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          perm_name: "user_get_all",
          perm_description: "Get All Users",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          perm_name: "user_delete",
          perm_description: "Delete User",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //Roles
        {
          perm_name: "role_add",
          perm_description: "Add Role",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          perm_name: "role_update",
          perm_description: "Update Role",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          perm_name: "role_get",
          perm_description: "Get Role",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          perm_name: "role_get_all",
          perm_description: "Get All Roles",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          perm_name: "role_delete",
          perm_description: "Delete Role",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //Permissions
        {
          perm_name: "permission_add",
          perm_description: "Add Permission",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          perm_name: "permission_update",
          perm_description: "Update Permission",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          perm_name: "permission_get",
          perm_description: "Get Permission",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          perm_name: "permission_get_all",
          perm_description: "Get All Permissions",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          perm_name: "permission_delete",
          perm_description: "Delete Permission",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //Products
        {
          perm_name: "product_add",
          perm_description: "Add Product",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          perm_name: "product_update",
          perm_description: "Update Product",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          perm_name: "product_get",
          perm_description: "Get Product",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          perm_name: "product_get_all",
          perm_description: "Get All Products",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          perm_name: "product_delete",
          perm_description: "Delete Product",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Sectors
        {
          perm_name: "sector_add",
          perm_description: "Add Sector",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          perm_name: "sector_update",
          perm_description: "Update Sector",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          perm_name: "sector_get",
          perm_description: "Get Sector",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          perm_name: "sector_get_all",
          perm_description: "Get All Sector",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          perm_name: "sector_delete",
          perm_description: "Delete Sector",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // States
        {
          perm_name: "state_add",
          perm_description: "Add State",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          perm_name: "state_update",
          perm_description: "Update State",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          perm_name: "state_get",
          perm_description: "Get State",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          perm_name: "state_get_all",
          perm_description: "Get All State",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          perm_name: "state_delete",
          perm_description: "Delete State",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Local Govt
        {
          perm_name: "local_govt_add",
          perm_description: "Add Local Govt",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          perm_name: "local_govt_update",
          perm_description: "Update Local Govt",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          perm_name: "local_govt_get",
          perm_description: "Get Local Govt",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          perm_name: "local_govt_get_all",
          perm_description: "Get All Local Govts",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          perm_name: "local_govt_delete",
          perm_description: "Delete Local Govt",
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
    await queryInterface.bulkDelete("Permissions", null, {});
  },
};
