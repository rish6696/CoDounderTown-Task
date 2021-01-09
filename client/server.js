const express = require("express");
const app = express();
const fs = require("fs");
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", express.static(__dirname + "/build"));

app.use("*", (req, res) => {
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log("server started on port bcajcbjbcjb ", PORT);
});

//13.232.36.165
