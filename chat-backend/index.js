const express = require("express");
const config = require("./config/app");
const router = require("./router");
const cors = require("cors");

const app = express();
const bodyParser = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(router);
app.use(express.static(__dirname + "/public"));

const port = config.appPort;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
