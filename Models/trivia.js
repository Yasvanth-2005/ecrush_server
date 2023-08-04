const mongoose = require("mongoose");

const triviaSchema = mongoose.Schema({
  link: { type: String, required: true },
  winners: {
    name1: { type: String, required: true },
    name2: { type: String, required: true },
    name3: { type: String, required: true },
    id1: { type: String, required: true },
    id2: { type: String, required: true },
    id3: { type: String, required: true },
  },
});

module.exports = mongoose.model("trivia", triviaSchema);
