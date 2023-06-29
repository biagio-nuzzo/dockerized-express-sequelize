const passport = require("passport");
const passportJWT = require("passport-jwt");
const ExtractJWT = passportJWT.ExtractJwt;
const StrayegyJWT = passportJWT.Strategy;
const User = require("../../../models/user");

passport.use(
  new StrayegyJWT(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    },
    async (payload, next) => {
      return User.findOne({ where: { id: payload.id } })
        .then((user) => {
          return next(null, user);
        })
        .catch((err) => {
          return next(err);
        });
    }
  )
);
