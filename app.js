import express from "express";
const app = express();

// app setup
app.use(express.json()); //alternate of bodyparser

// DB Connection
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

// server setup
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server Running on ${port}`));
