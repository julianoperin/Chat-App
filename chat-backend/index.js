require("dotenv").config();
const express = require("express");

//! ENV
const config = require("./config/app");

const app = express();

const PORT = config.appPort;

app.get("/home", (req, res) => {
  res.send("Home Screen");
});

app.get("/login", (req, res) => {
  res.send("Home Screen");
});

app.listen(PORT, () => {
  console.log(`Server listening to port ${PORT}`);
});
