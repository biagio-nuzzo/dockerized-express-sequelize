const Sequelize = require("sequelize");
const db = require("../util/database");

const Match = db.define("matches", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: Sequelize.STRING,
});

module.exports = Match;
