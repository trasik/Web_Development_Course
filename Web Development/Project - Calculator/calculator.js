const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/", (req, res) => {
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
  res.send("The total of the calculation is " + (num1 + num2));
});

app.get("/bmi", (req, res) => {
  res.sendFile(__dirname + "/public/bmi.html");
});

app.post("/bmi", (req, res) => {
  const weight = Number(req.body.weight);
  const height = Number(req.body.height);
  const BMI = weight / (height * height);
  res.send("Your total BMI is: " + BMI);
});

app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
});
