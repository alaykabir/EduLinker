const express = require("express");
const mongoose = require("mongoose");

const url = `mongodb+srv://edulinker:8EHdU4u5zKEicZvD@cluster0.bqv3fyw.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to the database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. n${err}`);
  });

const app = express();

app.listen(5000, () => {
  console.log("server is running");
});
