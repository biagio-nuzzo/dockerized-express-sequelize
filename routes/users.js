const controller = require("../controllers/users");  // Import the controller module for handling user-related requests
const router = require("express").Router();  // Import the Router module from Express

// CRUD Routes /users
router.get("/", controller.getUsers);  // Handle GET requests to /users by calling the getUsers function from the controller
router.get("/:userId", controller.getUser);  // Handle GET requests to /users/:userId by calling the getUser function from the controller
router.post("/", controller.createUser);  // Handle POST requests to /users by calling the createUser function from the controller
router.put("/:userId", controller.updateUser);  // Handle PUT requests to /users/:userId by calling the updateUser function from the controller
router.delete("/:userId", controller.deleteUser);  // Handle DELETE requests to /users/:userId by calling the deleteUser function from the controller

module.exports = router;  // Export the router to be used in other parts of the application
