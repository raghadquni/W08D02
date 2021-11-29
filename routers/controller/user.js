const userModel = require("../../db/models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const salt = Number(process.env.SALT); 

const register = async (req, res) => {
  const { email, password, role } = req.body;

  const savedEmail = email.toLowerCase();
  const savedPassword = await bcrypt.hash(password, salt);

const newUser = new userModel({
    email: savedEmail,
    password: savedPassword,
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

const getUsers = (req, res) => {
    userModel
      .find({})
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  };


const login = (req, res) => {
    const { email, password } = req.body;
    
    userModel
    .findOne({ email })
    .then((result) => {
        if (result) {
            if (result.email == email) {
                if (result.password == password) {
                    res.status(200).json(result);
                } else {
                    res.status(400).json("invalid email or password");
                }
            } else {
                res.status(400).json("invalid email or password");
            }
        } else {
            res.status(404).json(" email does not exsist");
        }
})
.catch((err) => {
    res.status(400).res.json(err);
});
}




module.exports = {register, getUsers, login}