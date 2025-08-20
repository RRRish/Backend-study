require("dotenv").config();
const express = require("express");
const app = express();
// const port = 3000;

app.get("/", function (req, res) {
  res.send("Hey Everyone");
});

app.listen(process.env.PORT, () => {
  console.log(`${port}`);
});
  