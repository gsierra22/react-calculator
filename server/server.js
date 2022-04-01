const express = require("express");
const app = express();

const port = 5000;

app.listen(port, () => {
  console.log("server up on:", port);
});

app.get("/calc", (req, res) => {
  console.log("/calc GET");
  res.send(items);
});
