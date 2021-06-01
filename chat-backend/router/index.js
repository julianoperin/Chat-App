const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("This is home");
});

router.use("/", require("./auth"));

module.exports = router;
