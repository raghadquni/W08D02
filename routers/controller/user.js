const userModel = require("../../db/models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { options } = require("../routes/role");


const secret = process.env.SECRET_KEY;

const register = async (req, res) => {
  const { email, password, role } = req.body;

  const salt = Number(process.env.SALT);
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
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).send(err);
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
      const savedEmail = email.toLowerCase();
  userModel
    .findOne({ email: savedEmail })
    .then(async (result) => {
      if (result) {
        if (result.email == email) {
          const hashedPass = await bcrypt.compare(password, result.password);
          const payload = {
            email,
          };

          if (hashedPass) {
            const options = {
                expiresIn : "60m"
            }; 
            let token = jwt.sign(payload, secret, options);
            res.status(200).json({ result, token });
          } else {
            res.status(400).json("Wrong email or password");
          }
        } else {
          res.status(400).json("Wrong email or password");
        }
      } else {
        res.status(404).json("Email not exist");
      }
    })
    .catch((err) => {
      res.send(err);
    });
};



module.exports = {register, getUsers, login}