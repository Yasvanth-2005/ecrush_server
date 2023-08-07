const express = require("express");
const newsRouter = express.Router();
const axios = require("axios");

const news_apikey = process.env.NEWS_API_KEY;
const apiurl = `https://newsapi.org/v2/top-headlines`;

newsRouter.get("/", (req, res) => {
  const params = {
    country: "in",
    apikey: news_apikey,
    pageSiza: 40,
  };
  axios
    .get(apiurl, { params })
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((err) => res.status(500).json({ error: err.message }));
});

newsRouter.get("/business", (req, res) => {
  const params = {
    country: "in",
    apikey: news_apikey,
    pageSize: 40,
    category: "business",
  };
  axios
    .get(apiurl, { params })
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((err) => res.status(500).json({ error: err.message }));
});

newsRouter.get("/entertainment", (req, res) => {
  const params = {
    country: "in",
    apikey: news_apikey,
    pageSize: 40,
    category: "entertainment",
  };
  axios
    .get(apiurl, { params })
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((err) => res.status(500).json({ error: err.message }));
});

newsRouter.get("/health", (req, res) => {
  const params = {
    apikey: news_apikey,
    pageSize: 40,
    category: "health",
  };
  axios
    .get(apiurl, { params })
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((err) => res.status(500).json({ error: err.message }));
});

newsRouter.get("/science", (req, res) => {
  const params = {
    apikey: news_apikey,
    pageSize: 40,
    category: "science",
  };
  axios
    .get(apiurl, { params })
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((err) => res.status(500).json({ error: err.message }));
});

newsRouter.get("/sports", (req, res) => {
  const params = {
    country: "in",
    apikey: news_apikey,
    pageSize: 40,
    category: "sports",
  };
  axios
    .get(apiurl, { params })
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((err) => res.status(500).json({ error: err.message }));
});

newsRouter.get("/technology", (req, res) => {
  const params = {
    apikey: news_apikey,
    pageSize: 40,
    category: "technology",
  };
  axios
    .get(apiurl, { params })
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((err) => res.status(500).json({ error: err.message }));
});

module.exports = newsRouter;
