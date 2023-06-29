exports.test = async (req, res, next) => {
  console.log("USER ID", req.user.id);
  console.log("USER USERNAME", req.user.username);
  console.log("USER EMAIL", req.user.email);

  res.status(200).json({
    message: "Test route",
  });
};
