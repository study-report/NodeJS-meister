const express = require("express");
const router = require("./routers");
const app = express();

const { connect } = require("./models/connecter");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);
app.use((err, _, res) => {
  return res.status(500).json(err);
});

connect();
app.listen(8088);
