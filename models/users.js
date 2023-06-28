const Sequelize = require("sequelize"); // Import the Sequelize library
const db = require("../util/database"); // Import the Sequelize instance

const User = db.define("user", {
  // Define a model named "user" with the specified attributes
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

module.exports = User; // Export the User model for querying and manipulating user data
