const api = require("../api/users");  // Import the controller module for handling user-related requests
const router = require("express").Router();  // Import the Router module from Express

// CRUD Routes /users
router.get("/", api.getUsers);  // Handle GET requests to /users by calling the getUsers function from the api
router.get("/:userId", api.getUser);  // Handle GET requests to /users/:userId by calling the getUser function from the api
router.post("/", api.createUser);  // Handle POST requests to /users by calling the createUser function from the api
router.put("/:userId", api.updateUser);  // Handle PUT requests to /users/:userId by calling the updateUser function from the api
router.delete("/:userId", api.deleteUser);  // Handle DELETE requests to /users/:userId by calling the deleteUser function from the api

module.exports = router;  // Export the router to be used in other parts of the application
