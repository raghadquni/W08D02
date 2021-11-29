const express = require("express");
require("dotenv").config(); // اقدر اكتبها كذا باختصار

// instantiate express
const app = express();

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`SERVER RUN ON PORT ${PORT}`);
  });