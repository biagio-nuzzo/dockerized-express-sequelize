const Sequelize = require("sequelize");
const db = require("../util/database");

const User = db.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  phone: Sequelize.STRING,
  address: Sequelize.STRING,
});

module.exports = User;
