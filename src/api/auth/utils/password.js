const bcryptjs = require("bcryptjs");

const saltRounds = 10;

const hashPassword = async (password) => {
  const hashPassword = await bcryptjs
    .hash(password, saltRounds)
    .catch((err) => {
      console.log(err);
    });

  return hashPassword;
};

const comparePassword = (password, hash) => {
  const isMatch = bcryptjs.compare(password, hash).catch((err) => {
    console.log(err);
  });

  return isMatch;
};

module.exports = { hashPassword, comparePassword };
