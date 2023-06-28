require("dotenv").config(); // Load environment variables from a .env file

const Sequelize = require("sequelize"); // Import the Sequelize library

const sequelize = new Sequelize(
  process.env.PG_DB, // Use the environment variable PG_DB as the database name
  process.env.PG_USER, // Use the environment variable PG_USER as the username
  process.env.PG_PASSWORD, // Use the environment variable PG_PASSWORD as the password
  {
    host: process.env.PG_HOST, // Use the environment variable PG_HOST as the host
    dialect: "postgres", // Use PostgreSQL as the database dialect
  }
);

module.exports = sequelize; // Export the Sequelize instance for database operations
