const express = require("express");
const router = express.Router();

let database = [];

router.get("/", (_, res) => {
  return res.json(database);
});

router.post("/", (req, res) => {
  database.push({ ...req.body, id: database.length + 1 });
  return res.json("성공");
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  database = database.filter((todo) => todo.id !== Number(id));
  return res.json("성공");
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const foundIdx = database.findIndex((todo) => todo.id === Number(id));
  database[foundIdx] = { ...database[foundIdx], ...req.body };
  return res.json("성공");
});

module.exports = router;
