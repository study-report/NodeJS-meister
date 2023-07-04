const express = require("express");
const router = express.Router();
const { getConnection } = require("../models/connecter");

let database = [];

router.get("/", async (_, res) => {
  const [results] = await getConnection().execute("SELECT * FROM todo");
  return res.json(results);
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
