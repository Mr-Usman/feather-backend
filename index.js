const express = require("express");
const dotenv = require("dotenv").config();
const data = require("./appData");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/policies", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.status(200).json({ data });
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
