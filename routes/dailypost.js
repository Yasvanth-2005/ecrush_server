const express = require("express");
const DailyPosts = require("../Models/dailyPosts");
const Trivia = require("../Models/trivia");

const router = express.Router();

router.get("/posts", async (req, res) => {
  try {
    const posts = await DailyPosts.find();
    res.status(200).json(posts);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.messgae });
  }
});

router.post("/posts", async (req, res) => {
  const post = req.body;
  try {
    const newPost = await new DailyPosts(post);
    newPost.save();
    console.log(newPost);
  } catch (err) {
    console.log(err.message);
  }
});

router.delete("/posts", async (req, res) => {
  try {
    await DailyPosts.deleteMany();
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/trivia", async (req, res) => {
  try {
    const trivia = await Trivia.find();
    res.status(200).json(trivia);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/trivia", async (req, res) => {
  const trivia = req.body;
  try {
    const newTrivia = await new Trivia(trivia);
    newTrivia.save();
    console.log(newTrivia);
  } catch (error) {
    console.log(error.message);
  }
});

router.delete("/trivia", async (req, res) => {
  try {
    await Trivia.deleteMany();
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
