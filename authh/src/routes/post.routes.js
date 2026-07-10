const express = require("express");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

const router = express.Router();

router.post("/create", async (req, res) => {
  const token = req.cookies.token;
  console.log(req.cookies);
  if (!token) {
    return res.status(409).json({ message: "unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findOne({ _id: decoded.id });
    console.log(user);
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
  res.send("pposted");
});
module.exports = router;
