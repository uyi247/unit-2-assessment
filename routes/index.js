var express = require("express");
var router = express.Router();
const todos = require("./../data/todo");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Unit 2 Assessment", todos: todos });
});

router.post("/", (req, res, next) => {
  const todo = req.body;
  todo.done = false;
  todos.push(todo);
  // res.render("index", { title: "Unit 2 Assessment", todos: todos });

  res.redirect("/");
});

module.exports = router;
