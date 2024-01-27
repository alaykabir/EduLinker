const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => {
    console.log("Database is connected");
  })
  .catch((error) => console.log("Database Connection error!"));

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.port}`);
});
