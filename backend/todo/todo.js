const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const Todo = mongoose.Schema({
  todo: { type: String, required: true }
});

module.exports = mongoose.model("Todo", Todo);
