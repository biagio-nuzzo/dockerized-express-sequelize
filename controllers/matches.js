const User = require("../models/matches");

// CRUD Controllers

//get all users
exports.getMatches = (req, res, next) => {
  User.findAll()
    .then((matches) => {
      res.status(200).json({ matches: matches });
    })
    .catch((err) => console.log(err));
};

//get user by id
exports.getUser = (req, res, next) => {
  const matchId = req.params.matchId;
  User.findByPk(matchId)
    .then((match) => {
      if (!match) {
        return res.status(404).json({ message: "Match not found!" });
      }
      res.status(200).json({ match: match });
    })
    .catch((err) => console.log(err));
};

//create user
exports.createMatch = (req, res, next) => {
  const name = req.body.name;
  User.create({
    name: name,
  })
    .then((result) => {
      console.log("Created Match");
      res.status(201).json({
        message: "Match created successfully!",
        match: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
