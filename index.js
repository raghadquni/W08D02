const express = require("express");
require("dotenv").config(); // اقدر اكتبها كذا باختصار
const db = require("./db/index.js");


// instantiate express
const app = express();
app.use(express.json());

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`SERVER RUN ON PORT ${PORT}`);
  });