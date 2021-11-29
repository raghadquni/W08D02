const express = require("express");
const {createRole} = require("./../controller/role");
const roleRouter = express.Router();

roleRouter.post("/createRole" , createRole)

module.exports = roleRouter;