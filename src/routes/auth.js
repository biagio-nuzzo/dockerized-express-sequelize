// Views
const register = require("../api/auth/register"); // Import the controller module for handling user-related requests
const login = require("../api/auth/login"); // Import the controller module for handling user-related requests
const test = require("../api/auth/authenticated_api"); // Import the controller module for handling user-related requests

const passport = require("passport");
const router = require("express").Router(); // Import the Router module from Express

// AUTH Routes /auth
router.post("/register", register.register); // Handle POST requests to /auth/register by calling the register function from the api
router.post("/login", login.login); // Handle POST requests to /auth/login by calling the login function from the api
router.get(
  "/test",
  passport.authenticate("jwt", { session: false }),
  test.test
); // Handle POST requests to /auth/test by calling the test function from the api

module.exports = router;
