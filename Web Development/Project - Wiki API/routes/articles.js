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

router.get("/:title", (req, res) => {
  const articleTitle = req.params.title;

  Article.findOne({ title: articleTitle }, (error, article) => {
    if (!error) {
      if (article) {
        res.send(article);
      } else {
        res.status(400).send({ error: "No article of such title exists!" });
      }
    } else {
      res.status(400).send({ error: error });
    }
  });
});

router.put("/:title", (req, res) => {
  const articleTitle = req.params.title;

  const updatedInfo = {
    title: req.body.title,
    content: req.body.content,
  };

  Article.updateOne(
    { title: articleTitle },
    updatedInfo,
    (error, updatedArticle) => {
      if (!error) {
        console.log(updatedArticle);
        if (updatedArticle) {
          res.status(200).send({
            success: `Successfully updated article with title: ${articleTitle}`,
          });
        } else {
          res.status(400).send({ error: "No article found with this filter" });
        }
      } else {
        res.status(400).send({ error: error });
      }
    }
  );
});

router.patch("/:title", (req, res) => {
  const articleTitle = req.params.title;

  Article.updateOne(
    { title: articleTitle },
    req.body,
    (error, updatedArticle) => {
      if (!error) {
        console.log(updatedArticle);
        if (updatedArticle) {
          res.status(200).send({
            success: `Successfully updated article with title: ${articleTitle}`,
          });
        } else {
          res.status(400).send({ error: "No article found with this filter" });
        }
      } else {
        res.status(400).send({ error: error });
      }
    }
  );
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

router.delete("/", (req, res) => {
  Article.deleteMany({}, (error) => {
    if (!error) {
      res
        .status(200)
        .send({ success: "Successfully deleted all articles from database." });
    } else {
      res.status(400).send({ error: error });
    }
  });
});

router.delete("/:title", (req, res) => {
  const articleTitle = req.params.title;
  Article.deleteOne({ title: articleTitle }, (error) => {
    if (!error) {
      res
        .status(200)
        .send({
          success: `Successfully deleted the article with title ${articleTitle}`,
        });
    } else {
      res.status(400).send({ error: error });
    }
  });
});

export default router;
