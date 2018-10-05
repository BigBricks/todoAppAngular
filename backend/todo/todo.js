const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const Todo = mongoose.Schema({
  _id: { type: ObjectId },
  title: { type: String, required: true },
  complete: { type: Boolean, default: false }
});

module.exports = mongoose.model("Todo", Todo);
