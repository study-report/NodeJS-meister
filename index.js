const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/todo", () => {
  res.send("Hello World!");
});

app.post("/todo", (req, res) => {
  const data = req.body;
  console.log(data);
  return res.json(data);
});

app.listen(3001);
