const register = require("../api/auth/register"); // Import the controller module for handling user-related requests
const router = require("express").Router(); // Import the Router module from Express

// AUTH Routes /auth
router.post("/register", register.register); // Handle POST requests to /auth/register by calling the register function from the api

module.exports = router; 