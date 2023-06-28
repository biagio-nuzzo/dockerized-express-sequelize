const User = require("../../models/user"); // Import the User model

// Define a route for registering a new user
// The route URL is http://localhost:8000/api/auth/register
// The HTTP method is POST
exports.register = (req, res, next) => {
  // Extract the data from the request body
  const { username, email, password } = req.body;

  // check if the user already exists
  User.findOne({ where: { email: email } })
    .then((user) => {
      if (user) {
        // If user already exists, respond with an error message
        return res.status(400).json({ message: "User already exists!" });
      }
    })
    .catch((err) => console.log(err)); // Log any errors

  // Create a new user in the database with the provided data
  User.create({
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
