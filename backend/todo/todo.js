const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const Todo = mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  complete: { type: Boolean, required: true }
});

module.exports = mongoose.model("Todo", Todo);
