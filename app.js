import express from "express";
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1/ecommerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch((error) => console.log(error.message));
app.use(bodyParser.urlencoded({ extended: true }));
