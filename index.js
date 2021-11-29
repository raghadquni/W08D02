const express = require("express");
require("dotenv").config(); // اقدر اكتبها كذا باختصار
const db = require("./db/index.js");


// instantiate express
const app = express();
app.use(express.json());

const roleRouter = require("./routers/routes/role")
app.use(roleRouter)

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`SERVER RUN ON PORT ${PORT}`);
  });