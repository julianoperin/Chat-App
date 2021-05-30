const express = require("express");

const app = express();

const PORT = 3000;

app.get("/home", (req, res) => {
  res.send("Home Screen");
});

app.get("/login", (req, res) => {
  res.send("Home Screen");
});

app.listen(PORT, () => {
  console.log(`Server listening to port ${PORT}`);
});
