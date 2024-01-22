const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

mongoose
  .connect(process.env.DB_CONNECT)
  .catch((error) => console.log("Database Connection error!"));

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.port} ... `);
});
