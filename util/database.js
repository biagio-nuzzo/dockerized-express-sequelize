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

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!");
    console.log(err);
  });

// Synchronize Sequelize models with the database and start the server
// Calling "sequelize.sync()" creates or updates database tables based on defined models
// Once the synchronization is successful, the server starts listening on port 8000
sequelize
  .sync()
  .then((result) => {
    console.log("Sequelize models synced with PostgreSQL database");
    console.log(result);
  })
  .catch((err) => {
    console.log("An error occurred while creating the database tables:");
    console.log(err);
  });

module.exports = sequelize; // Export the Sequelize instance for database operations
