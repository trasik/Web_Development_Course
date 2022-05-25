const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Test</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<p>Contact me at torendrarasik@gmail.com</p>");
});

app.get("/about", (req, res) => {
  res.send(
    "<h1>Hi, I'm Torendra Rasik</h1><p>I am an Aspiring Software Engineer in Full Stack</p>"
  );
});

app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
});
