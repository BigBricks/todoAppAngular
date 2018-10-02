const router = require("express").Router();
const Todo = require("./Todo");

router
  .route("/")
  .get(get)
  .post(post);
router
  .route("/:id")
  .put(put)
  .get(getid)
  .delete(deleteid);

function get(req, res) {
  Todo.find()
    .then(expected => {
      res.status(200).json(expected);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "There was an error in GET" });
    });
}

function post(req, res) {
  const todo = new Todo(req.body);
  todo
    .save()
    .then(expected => {
      res.status(201).json(expected);
    })
    .catch(err => {
      res.status(500).json({ message: "There was an error in POST" });
    });
}
function getid(req, res) {
  const id = req.params.id;
  Todo.findById(id)
    .then(expected => {
      res.status(200).json(expected);
    })
    .catch(err => {
      res.status(500).json({ message: "Error on GETID TODO" });
    });
}
function put(req, res) {
  const id = req.params.id;
  const { Todo } = req.body;
  if (!Todo.findById(id)) {
    res.status(404).json({ message: "Todo not found" });
  }
  Todo.findByIdAndUpdate(id, req.body)
    .then(expected => {
      res.status(201).json(expected);
    })
    .catch(err => {
      res.status(500).json({ message: "Error on PUT TODO" });
    });
}
function deleteid(req, res) {
  const id = req.params.id;
  if (!Todo.findById(id)) {
    res.status(404).json({ message: "Todo not found " });
  }
  Todo.findByIdAndRemove(id)
    .then(expected => {
      res.status(204).json(expected);
    })
    .catch(err => {
      res.status(500).json({ message: "Error on DEL TODO" });
    });
}
module.exports = router;
