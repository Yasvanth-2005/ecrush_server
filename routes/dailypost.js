const express = require("express");
const DailyPosts = require("../Models/dailyPosts");
const Trivia = require("../Models/trivia");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config();
const axios = require("axios");

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

router.post("/mail", (req, res) => {
  const data = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER_MAIL,
      pass: process.env.USER_PASS,
    },
  });
  const mailOptions = {
    from: data.email,
    to: process.env.MAIL_TO,
    text: `Name : ${data.name}\n\n Email : ${data.email} \n\n ${data.message}`,
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({ Error: err.message });
    } else {
      console.log("Emil Sent : " + info.response);
      res.status(200).json({ message: "Success" });
    }
  });
});

const news_apikey = process.env.NEWS_API_KEY;
const apiurl = `https://newsapi.org/v2/top-headlines`;
const params = {
  country: "in",
  apikey: news_apikey,
};

router.get("/news", (req, res) => {
  axios
    .get(apiurl, { params })
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((err) => res.status(500).json({ error: err.message }));
});

module.exports = router;
