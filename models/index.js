"use strict";

const fs = require("fs"); // Import the fs module for file system operations
const path = require("path"); // Import the path module for working with file paths
const Sequelize = require("sequelize"); // Import Sequelize ORM
const process = require("process"); // Import the process module
const basename = path.basename(__filename); // Get the base name of the current file
const env = process.env.NODE_ENV || "development"; // Get the environment (development, test, production)
const config = require(__dirname + "/../config/config.json")[env]; // Load the database configuration
const db = {}; // Create an empty object to hold the models

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config); // Create a Sequelize instance using environment variable
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  ); // Create a Sequelize instance using configuration values
}

fs.readdirSync(__dirname) // Read the current directory
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && // Exclude files starting with a dot (e.g., .gitignore)
      file !== basename && // Exclude the current file
      file.slice(-3) === ".js" && // Include only JavaScript files
      file.indexOf(".test.js") === -1 // Exclude test files
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    ); // Import each model file and initialize it with Sequelize
    db[model.name] = model; // Add the model to the db object
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db); // Call the associate function for each model to define associations
  }
});

db.sequelize = sequelize; // Assign the Sequelize instance to the db object
db.Sequelize = Sequelize; // Assign the Sequelize library to the db object

module.exports = db; // Export the db object containing all the models
