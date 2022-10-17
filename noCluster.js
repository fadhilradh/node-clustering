const express = require("express");

const app = express();

const port = process.env.PORT || 8000;

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.get("/", (req, res) => {
  for (var i = 0; i < 2e6; i++) {}
  res.send("Server says hello world!");
});
