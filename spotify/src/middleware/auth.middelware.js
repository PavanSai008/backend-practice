const jwt = require("jsonwebtoken");

async function AuthArtist(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "unauthorized no token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role != "artist") {
      return res.status(403).json({ message: "unauthorized" });
    }
    req.user = decoded;
    next();
  } catch (err) {
    console.log(err);
    return res
      .status(401)
      .json({ message: "internal server error", error: err.message });
  }
}
async function AuthUser(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "no token" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role != "user" && decoded.role != "artist") {
      return res.status(403).json({ message: "Plese login" });
    }

    req.user = decoded;
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: err });
  }
}
module.exports = { AuthArtist, AuthUser };
