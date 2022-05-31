import express from "express";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import articleRouter from "./routes/articles.js";

const app = express();
const PORT = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

mongoose.connect("mongodb://localhost:27017/wiki", (error) => {
  error
    ? console.error(error)
    : console.log(`Connection to Wiki Database successful.`);
});

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

//Article Route
app.use("/articles", articleRouter);

app.listen(PORT, (error) => {
  error
    ? console.error(error)
    : console.log(`Server up and running on port ${PORT}`);
});
