const User = require("../../models/user"); // Import the User model
const { Op } = require("sequelize"); // Import the Op module for using comparison operators
const { hashPassword } = require("./utils/password"); // Import the hashPassword function from the password.js file

// Define a route for registering a new user
// The route URL is http://localhost:8000/api/auth/register
// The HTTP method is POST
exports.register = async (req, res, next) => {
  // Extract the data from the request body
  const { username, email, password } = req.body;

  // Check if user already exists by username or email
  const alreadyExistsUser = await User.findOne({
    where: {
      [Op.or]: [{ username: username }, { email: email }],
    },
  }).catch((err) => {
    console.log(err); // Log any errors
  });

  if (alreadyExistsUser) {
    return res.status(400).json({
      error: "User with same username or email already exists",
    });
  }

  const hashedPassword = await hashPassword(password);

  // Create a new user with the password hash
  const newUser = new User({
    username: username,
    email: email,
    password: hashedPassword,
  });

  // Save the user details to the database
  const savedUser = await newUser.save().catch((err) => {
    console.log(err); // Log any errors
    res.status(500).json({
      error: "Couldn't save the user",
    });
  });

  if (savedUser) {
    savedUser.password = undefined;
    // Send the response to the user with the access token and user details
    res.status(201).json({
      message: "User saved successfully",
      user: savedUser,
    });
  }
};
