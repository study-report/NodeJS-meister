const express = require("express");
const router = require("./routers");
const app = express();

const { connect } = require("./models/connecter");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

connect();
app.listen(8088);
