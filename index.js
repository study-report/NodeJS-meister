const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let database = [];

app.get("/todo", () => {
  return res.json(database);
});

app.post("/todo", (req, res) => {
  database.push({ ...req.body, id: database.length + 1 });
  return res.json(database);
});

app.delete("/todo/:id", (req, res) => {
  const { id } = req.params;
  database = database.filter((todo) => todo.id !== Number(id));
  return res.json(database);
});

app.put("/todo/:id", (req, res) => {
  const { id } = req.params;
  const foundIdx = database.findIndex((todo) => todo.id === Number(id));
  database[foundIdx] = { ...database[foundIdx], ...req.body };
  return res.json(database);
});

app.listen(3001);
