const express = require("express");
const router = express.Router();
const { getConnection } = require("../models/connecter");

const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res) => {
  const { email, pw } = req.body;
  await getConnection().execute(`INSERT user (email, pw) VALUES (?, ?)`, [
    email,
    pw,
  ]);
  return res.json("성공");
});

router.post("/signin", async (req, res) => {
  const { email, pw } = req.body;

  // await getConnection().execute(`INSERT user (email, pw) VALUES (?, ?)`, [
  //   email,
  //   pw,
  // ]);

  const token = jwt.sign({ email }, "secret");
  return res.json({ token });
});

module.exports = router;
