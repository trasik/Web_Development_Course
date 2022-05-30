import express from "express";
import mongoose from "mongoose";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { Item } from "./models/item.js";
import List from "./models/list.js";
import _ from "lodash";

const app = express();
const PORT = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

mongoose.connect("mongodb://localhost:27017/todolist", (err) => {
  err ? console.log(err) : console.log("Connected to database.");
});

const item1 = new Item({
  name: "Walk my dog",
});

const item2 = new Item({
  name: "Have lunch with friends at 12PM",
});

const item3 = new Item({
  name: "Exercise for 30 minutes",
});

const defaultItems = [item1, item2, item3];

app.get("/", (req, res) => {
  Item.find({}, (err, foundItems) => {
    if (err) {
      console.log(err);
    } else {
      if (foundItems.length == 0) {
        Item.insertMany(defaultItems, (err) => {
          err
            ? console.log(err)
            : console.log("Successfully added default items to database.");
        });
        res.redirect("/");
      } else {
        res.render("index", {
          listTitle: "Today",
          todoListItems: foundItems,
        });
      }
    }
  });
});

app.get("/:customListName", (req, res) => {
  const listName = _.capitalize(req.params.customListName);
  List.findOne({ name: listName }, (err, foundList) => {
    if (err) {
      console.log(err);
    } else {
      if (!foundList) {
        const list = new List({
          name: listName,
          items: defaultItems,
        });
        list.save();
        res.redirect("/" + listName);
      } else {
        res.render("index", {
          listTitle: foundList.name,
          todoListItems: foundList.items,
        });
      }
    }
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.post("/", (req, res) => {
  const newItem = req.body.newItem;
  const listName = req.body.button_list_add;
  console.log(listName);

  const toAdd = new Item({
    name: newItem,
  });

  if (listName == "Today") {
    toAdd.save();
    res.redirect("/");
  } else {
    List.findOne({ name: listName }, (err, foundList) => {
      if (err) {
        console.log(err);
      } else {
        foundList.items.push(toAdd);
        foundList.save();
        res.redirect("/" + listName);
      }
    });
  }
});

app.post("/delete", (req, res) => {
  const checkboxID = req.body.checkbox;
  const listName = req.body.listName;
  if (listName == "Today") {
    Item.findByIdAndRemove(checkboxID, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Successfully removed item with id: " + checkboxID);
        res.redirect("/");
      }
    });
  } else {
    List.findOneAndUpdate(
      { name: listName },
      { $pull: { items: { _id: checkboxID } } },
      (err, foundList) => {
        if (err) {
          console.log(err);
        } else {
          res.redirect("/" + listName);
        }
      }
    );
  }
});

app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
});
