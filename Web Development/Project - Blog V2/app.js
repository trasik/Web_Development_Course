import express from "express";
import mongoose from "mongoose";
import { fileURLToPath } from "url";
import { dirname } from "path";
import _ from "lodash";
import Post from "./models/posts.js";

const app = express();
const PORT = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

mongoose.connect("mongodb://localhost:27017/blog", (err) => {
  if (err) console.log(err);
  else console.log(`Database connection successful.`);
});

const startingHomeContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const aboutContent =
  "Condimentum id venenatis a condimentum. Donec ultrices tincidunt arcu non. Tempor orci dapibus ultrices in. Semper auctor neque vitae tempus quam pellentesque nec. Diam ut venenatis tellus in metus vulputate eu. Lacus luctus accumsan tortor posuere ac ut consequat semper. Est sit amet facilisis magna etiam tempor. Urna duis convallis convallis tellus. Aliquet bibendum enim facilisis gravida neque convallis a. Quis varius quam quisque id. Felis donec et odio pellentesque. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Adipiscing vitae proin sagittis nisl rhoncus mattis.";
const contactContent =
  "In dictum non consectetur a erat nam. Neque ornare aenean euismod elementum nisi quis eleifend. Ornare quam viverra orci sagittis eu volutpat odio facilisis mauris. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Duis ultricies lacus sed turpis. Orci a scelerisque purus semper eget duis. Egestas dui id ornare arcu odio. Quam quisque id diam vel quam elementum pulvinar etiam. Ac orci phasellus egestas tellus rutrum tellus pellentesque. Aliquet porttitor lacus luctus accumsan. Dui sapien eget mi proin sed libero enim. Vel orci porta non pulvinar neque laoreet suspendisse. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Id aliquet lectus proin nibh nisl condimentum id venenatis. Id leo in vitae turpis massa. Nisl tincidunt eget nullam non nisi est. Sem nulla pharetra diam sit.";

app.get("/", (req, res) => {
  try {
    Post.find({}, (err, foundPosts) => {
      if (err) console.log(err);
      else {
        res.render("home", {
          startingHomeContent: startingHomeContent,
          posts: foundPosts,
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
});

app.get("/about", (req, res) => {
  res.render("about", { aboutContent: aboutContent });
});

app.get("/contact", (req, res) => {
  res.render("contact", { contactContent: contactContent });
});

app.get("/compose", (req, res) => {
  res.render("compose");
});

app.get("/posts/:id", (req, res) => {
  try {
    const postID = req.params.id;
    Post.findOne({ _id: postID }, (err, foundPost) => {
      if (err) console.log(err);
      else {
        res.render("post", { post: foundPost });
      }
    });
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
});

app.post("/compose", (req, res) => {
  const [postTitle, postContent] = [req.body.postTitle, req.body.postContent];
  const newPost = new Post({
    title: postTitle,
    content: postContent,
  });
  try {
    newPost.save((err) => {
      if (err) console.log(err);
      else res.redirect("/");
    });
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () => {
  console.log(`Server up and running on ${PORT}`);
});
