const userModel = require("../../db/models/user");

const register = (req, res) => {
  const { email, password, role } = req.body;

  const newUser = new userModel({
    email,
    password,
    role,
  });
  newUser
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {register}