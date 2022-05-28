import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import _ from 'lodash';

const app = express();
const PORT = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

const startingHomeContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const aboutContent = "Condimentum id venenatis a condimentum. Donec ultrices tincidunt arcu non. Tempor orci dapibus ultrices in. Semper auctor neque vitae tempus quam pellentesque nec. Diam ut venenatis tellus in metus vulputate eu. Lacus luctus accumsan tortor posuere ac ut consequat semper. Est sit amet facilisis magna etiam tempor. Urna duis convallis convallis tellus. Aliquet bibendum enim facilisis gravida neque convallis a. Quis varius quam quisque id. Felis donec et odio pellentesque. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Adipiscing vitae proin sagittis nisl rhoncus mattis.";
const contactContent = "In dictum non consectetur a erat nam. Neque ornare aenean euismod elementum nisi quis eleifend. Ornare quam viverra orci sagittis eu volutpat odio facilisis mauris. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Duis ultricies lacus sed turpis. Orci a scelerisque purus semper eget duis. Egestas dui id ornare arcu odio. Quam quisque id diam vel quam elementum pulvinar etiam. Ac orci phasellus egestas tellus rutrum tellus pellentesque. Aliquet porttitor lacus luctus accumsan. Dui sapien eget mi proin sed libero enim. Vel orci porta non pulvinar neque laoreet suspendisse. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Id aliquet lectus proin nibh nisl condimentum id venenatis. Id leo in vitae turpis massa. Nisl tincidunt eget nullam non nisi est. Sem nulla pharetra diam sit.";
const posts = [];

app.get("/", (req, res) => {
  res.render("home", {startingHomeContent: startingHomeContent, posts: posts});
});

app.get("/about", (req, res) => {
  res.render("about", {aboutContent: aboutContent});
});

app.get("/contact", (req, res) => {
  res.render("contact", {contactContent: contactContent});
});

app.get("/compose", (req, res) => {
  res.render("compose");
});

app.get("/posts/:postName", (req, res) => {
  const postFound = posts.filter(post => _.lowerCase(post.title) === _.lowerCase(req.params.postName));
  if(postFound.length > 0) {
    const post = postFound[0];
    res.render("post", {post: post});
  } else {
    res.redirect("/");
  }
});

app.post("/compose", (req, res) => {
  const [postTitle, postBody] = [req.body.postTitle, req.body.postBody];
  const newPost = {};
  if(postTitle !== "" || postBody !== "") {
    newPost.title = postTitle;
    newPost.body = postBody;
    posts.push(newPost);
  }
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Server up and running on ${PORT}`);
});
