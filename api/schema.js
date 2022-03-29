const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: { type: String, default: "abc" },
  description: {
    type: String,
    required: true,
  },
  created_on: { type: Date, default: Date.now },
})

const postModel = mongoose.model("recent", PostSchema);

module.exports = postModel;