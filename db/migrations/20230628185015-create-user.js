"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("User", {
      id: {
        // Attribute for the user's ID
        type: Sequelize.INTEGER, // Data type is INTEGER
        autoIncrement: true, // ID value is automatically incremented
        allowNull: false, // ID cannot be null
        primaryKey: true, // ID is the primary key of the model
      },
      username: {
        // Attribute for the user's username
        type: Sequelize.STRING, // Data type is STRING
        allowNull: false, // Username cannot be null
        unique: true, // Username must be unique
      },
      email: {
        // Attribute for the user's email
        type: Sequelize.STRING, // Data type is STRING
        allowNull: true, // Email can be null
        unique: true, // Email must be unique
      },
      password: {
        // Attribute for the user's password
        type: Sequelize.STRING, // Data type is STRING
        allowNull: false, // Password cannot be null
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("User");
  },
};
