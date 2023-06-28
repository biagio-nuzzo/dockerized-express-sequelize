// Load environment variables from the .env file into process.env
require("dotenv").config();

// Export configuration object
module.exports = {
  // Development environment configuration
  development: {
    username: "user", // Database username
    password: "password", // Database password
    database: "db_name", // Database name
    host: "node_db", // Database host
    dialect: "postgres", // Database dialect
    port: process.env.DB_PORT, // Database port (from environment variable)
  },
  // Test environment configuration
  test: {
    username: "root", // Database username
    password: null, // Database password (null for no password)
    database: "database_test", // Database name
    host: "127.0.0.1", // Database host
    dialect: "postgres", // Database dialect
  },
  // Production environment configuration
  production: {
    username: "root", // Database username
    password: null, // Database password (null for no password)
    database: "database_production", // Database name
    host: "127.0.0.1", // Database host
    dialect: "postgres", // Database dialect
  },
};
