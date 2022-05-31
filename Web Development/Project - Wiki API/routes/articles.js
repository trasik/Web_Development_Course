import express from "express";
import mongoose from "mongoose";
import Article from "../models/articles.js";

const router = express.Router();

router.get("/", (req, res) => {
  Article.find((error, articles) => {
    if (!error) {
      res.send(articles);
    } else {
      res.status(400).send({ error: error });
    }
  });
});

router.post("/", (req, res) => {
  const newArticle = new Article({
    title: req.body.title,
    content: req.body.content,
  });

  newArticle.save((error) => {
    if (!error) {
      res.status(200).send({ success: "Successfully saved new article" });
    } else {
      res.status(400).send({ error: error });
    }
  });
});

export default router;
