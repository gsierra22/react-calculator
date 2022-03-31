// requires
let express = require("express");
let app = express();

// uses

// globals
const port = 5000;

// spin up server
app.listen(port, () => {
  console.log("server up on", port);
});

// routes
