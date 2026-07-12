const express = require("express");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth.routes");
const musicRoute = require("./routes/music.routes");

const app = express();
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/auth", musicRoute);

module.exports = app;
