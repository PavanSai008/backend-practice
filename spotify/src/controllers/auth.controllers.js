const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

async function registerUser(req, res) {
  const { username, email, password, role = "user" } = req.body;

  const isExists = userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (isExists) {
    return res.status(409).json({ message: "user already exists" });
  }

  const user = await userModel.create({
    username,
    email,
    password: hash,
    role,
  });

  const hash = await bcrypt.hash(password, 10);

  const token = jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET,
  );

  const token = jwt.sign();
}

module.exporsts = { registerUser };
