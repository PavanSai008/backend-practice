const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const cookie = require("cookie");

async function registerUser(req, res) {
  const { userName, email, password } = req.body;
  const emailExists = await userModel.findOne({ email });
  if (emailExists) {
    res.status(409).json({
      message: "user already exists",
    });
  }
  const user = await userModel.create({
    userName,
    email,
    password,
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );
  res.cookie("token", token);
  res.status(201).json({
    message: "user registered succesfully",
    user,
    token,
  });
}

module.exports = { registerUser };
