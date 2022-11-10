const express = require("express");

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World! vs KietHo1");
});
app.get("/about", (req, res) => {
  res.send(`I'm Kiet!`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
