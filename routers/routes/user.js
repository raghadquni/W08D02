const express = require("express");
const userRouter = express.Router();

const { register, getUsers, login } = require("../controller/user");

userRouter.post("/signup", register);
userRouter.get("/getUsers", getUsers);
userRouter.post("/login", login);

module.exports = userRouter;
