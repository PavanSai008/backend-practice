const express = require("express");
const postModel = require("./models/model.post");
const uploadFile = require("./services/storage.service");
const multer = require("multer");

const app = express();
app.use(express.json());
const upload = multer({ storage: multer.memoryStorage() });

app.post("/create-post", upload.single("image"), async (req, res) => {
  const result = await uploadFile(req.file.buffer);
  console.log(req.body.caption);
  console.log(req.file);
  const post = await postModel.create({
    image: result.url,
    caption: req.body.caption,
  });
  console.log(result);
  return res.status(201).json({ message: "Posted" });
});

app.get("/post", async (req, res) => {
  const posts = await postModel.find();
  return res.status(200).json({
    message: "all posts",
    posts,
  });
});

module.exports = app;
