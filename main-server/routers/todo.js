const express = require("express");
const router = express.Router();
const { getConnection } = require("../models/connecter");

router.get("/", async (_, res) => {
  const [results] = await getConnection().execute(`SELECT * FROM todo`);
  return res.json(results);
});

router.post("/", async (req, res) => {
  const { todo, completed } = req.body;
  await getConnection().execute(`INSERT todo(todo, completed) VALUES(?, ?)`, [
    todo,
    completed,
  ]);
  return res.json("성공");
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await getConnection().execute(`DELETE FROM todo WHERE id = ?`, [id]);
  return res.json("성공");
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { todo, completed } = req.body;
  await getConnection().execute(
    `UPDATE todo SET todo = ?, completed = ? WHERE id = ?;`,
    [todo, completed, id]
  );

  return res.json("성공");
});

module.exports = router;
