const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/todo", () => {
  res.send("Hello World!");
});

const database = [];

app.post("/todo", (req, res) => {
  database.push({ ...req.body, id: database.length + 1 });
  return res.json(database);
});

app.listen(3001);
