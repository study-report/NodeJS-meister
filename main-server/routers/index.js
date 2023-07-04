const express = require("express");
const router = express.Router();

const todoRouter = require("./todo");
const authRouter = require("./auth");

router.use("/auth", authRouter);
router.use("/todo", todoRouter);

module.exports = router;
