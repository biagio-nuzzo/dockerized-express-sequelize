const controller = require("../controllers/matches");
const router = require("express").Router();

// CRUD Routes /users
router.get("/", controller.getMatches); // /users
router.post("/", controller.createMatch); // /users

module.exports = router;
