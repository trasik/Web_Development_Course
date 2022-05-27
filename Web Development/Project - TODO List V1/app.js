import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import date from "./date.js";

const app = express();
const PORT = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

const todoListItems = ["Buy Food", "Cook the Food", "Eat the Food"];
const workListItems = ["Fix the bugs on website", "Meet with team"];

app.get("/", (req, res) => {
  res.render("list", {
    listTitle: date(),
    todoListItems: todoListItems,
  });
});

app.get("/work", (req, res) => {
  res.render("list", { listTitle: "Work", todoListItems: workListItems });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.post("/", (req, res) => {
  const newItem = req.body.newItem;
  // prettier-ignore
  const buttonListAdd = req.body.button_list_add;
  if (buttonListAdd == "Work") {
    if (newItem !== "") workListItems.push(newItem);
    res.redirect("/work");
  } else {
    if (newItem !== "") todoListItems.push(newItem);
    res.redirect("/");
  }
});

app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
});
