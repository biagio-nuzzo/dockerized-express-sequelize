require("dotenv").config(); // Load environment variables from a .env file

const User = require("../../models/user"); // Import the User model
const jwt = require("jsonwebtoken"); // Import the jsonwebtoken module

const { comparePassword } = require("./utils/password");

// Define a route for login a user
// The route URL is http://localhost:8000/api/auth/login
// The HTTP method is POST
exports.login = async (req, res, next) => {
  // Extract the data from the request body
  const { username, password } = req.body;

  // Check if the user exists with the given username
  const loginAttempt = await User.findOne({
    where: { username: username },
  }).catch((err) => {
    console.log(err); // Log any errors
  });

  if (!loginAttempt) {
    return res.status(401).json({
      error: "Invalid username or password",
    });
  }

  // Check if the password matches
  const isMatch = await comparePassword(password, loginAttempt.password).catch(
    (err) => {
      console.log(err); // Log any errors
    }
  );

  if (!isMatch) {
    return res.status(401).json({
      error: "Invalid username or password",
    });
  }

  // Create a new access token with the user id as the payload and send it to the user
  const token = jwt.sign({ id: loginAttempt.id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  // Send the response to the user with the access token and user details

  loginAttempt.password = undefined;
  res.status(200).json({
    message: "User logged in successfully",
    token: token,
    user: loginAttempt,
  });
};
