const User = require("../models/user"); // Import the User model

// Get all users
exports.getUsers = (req, res, next) => {
  User.findAll() // Find all users in the database
    .then((users) => {
      res.status(200).json({ users: users }); // Respond with the retrieved users in JSON format
    })
    .catch((err) => console.log(err)); // Log any errors
};

// Get user by ID
exports.getUser = (req, res, next) => {
  const userId = req.params.userId; // Extract the user ID from the request parameters
  User.findByPk(userId) // Find a user with the specified ID in the database
    .then((user) => {
      if (!user) {
        // If user not found, respond with an error message
        return res.status(404).json({ message: "User not found!" });
      }
      res.status(200).json({ user: user }); // Respond with the retrieved user in JSON format
    })
    .catch((err) => console.log(err)); // Log any errors
};

// Create a new user
exports.createUser = (req, res, next) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  User.create({
    // Create a new user in the database with the provided data
    username: username,
    email: email,
    password: password,
  })
    .then((result) => {
      console.log("Created User");
      res.status(201).json({
        // Respond with a success message and the created user in JSON format
        message: "User created successfully!",
        user: result,
      });
    })
    .catch((err) => {
      console.log(err); // Log any errors
    });
};

// Update an existing user
exports.updateUser = (req, res, next) => {
  const userId = req.params.userId; // Extract the user ID from the request parameters
  const updatedUsername = req.body.username; // Extract the username from the request body
  const updatedEmail = req.body.email; // Extract the email from the request body

  User.findByPk(userId) // Find a user with the specified ID in the database
    .then((user) => {
      if (!user) {
        // If user not found, respond with an error message
        return res.status(404).json({ message: "User not found!" });
      }
      user.username = updatedUsername; // Update the username
      user.email = updatedEmail; // Update the email
      return user.save(); // Save the updated user to the database
    })
    .then((result) => {
      res.status(200).json({
        // Respond with a success message and the updated user in JSON format
        message: "User updated!",
        user: result,
      });
    })
    .catch((err) => console.log(err)); // Log any errors
};

// Delete a user
exports.deleteUser = (req, res, next) => {
  const userId = req.params.userId; // Extract the user ID from the request parameters
  User.findByPk(userId) // Find a user with the specified ID in the database
    .then((user) => {
      if (!user) {
        // If user not found, respond with an error message
        return res.status(404).json({ message: "User not found!" });
      }
      return User.destroy({
        // Delete the user from the database
        where: {
          id: userId,
        },
      });
    })
    .then((result) => {
      res.status(200).json({ message: "User deleted!" }); // Respond with a success message
    })
    .catch((err) => console.log(err)); // Log any errors
};
