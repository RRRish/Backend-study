require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", function (req, res) {
  res.send("Hey Everyone");
});

app.listen(port, () => {
  console.log(`${port}`);
});
  