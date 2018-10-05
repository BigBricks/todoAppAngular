const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const Todo = mongoose.Schema({
  id: { type: Number },
  title: { type: String, required: true },
  complete: { type: Boolean, default: false }
});

module.exports = mongoose.model("Todo", Todo);
