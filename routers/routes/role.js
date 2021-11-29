const express = require("express");
const {createRole, getRole} = require("./../controller/role");
const roleRouter = express.Router();

roleRouter.post("/createRole" , createRole)
roleRouter.get("/getRole" , getRole)

module.exports = roleRouter;