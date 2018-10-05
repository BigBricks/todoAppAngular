require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const cors = require("cors");
const TodoRouter = require("./todo/todoRouter");
const mongoURL = process.env.Database_Url || "mongodb://127.0.0.1/todoangular"; //DONT FORGET TO INITIALIZE MONGO LOCALLY
const server = express();
mongoose
  .connect(
    mongoURL,
    { useNewUrlParser: true }
  ) //Whatever mongo db database we use will go here
  .then(mongo => {
    console.log("mongo server working");
  })
  .catch(err => {
    console.error("error", err);
  });

server.use(cors());
server.use(helmet());
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use("/api/todo", TodoRouter);

server.listen(port, () => console.log(`\n=== API up on port: ${port} ===\n`));

module.exports = server;
