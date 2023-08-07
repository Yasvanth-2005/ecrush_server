const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require("./routes/dailypost");
const newsRouter = require("./routes/news");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ limit: "30mb", extended: false }));
app.use(bodyParser.json({ limit: "30mb", extended: false }));

// Routes
app.use("/api", router);
app.use("/api/news", newsRouter);

const uri = process.env.CONNECTION_URL;
mongoose
  .connect(uri)
  .then(() => {
    const port = process.env.PORT || 8080;
    app.listen(port, () => console.log(`Port Started on server ${port}`));
  })
  .catch((err) => console.log(err.message));
