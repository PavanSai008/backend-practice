const express = require("express");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth.routes");
const postRoute = require("./routes/post.routes");
const cookieParser = require("cookie-parser");

app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);

module.exports = app;
