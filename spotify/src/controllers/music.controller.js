const musicModel = require("../models/music.model");
const jwt = require("jsonwebtoken");
const albumModel = require("../models/album.model");
const { uploadMusic } = require("../services/storage.service");

async function createMusic(req, res) {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "user not authenticated" });
    }
    const title = req.body.title;
    const file = req.file;
    if (!file) {
      return res.status(400).json({ message: "music file is required" });
    }
    if (!title) {
      return res.status(400).json({ message: "title is required" });
    }
    const result = await uploadMusic(file.buffer.toString("base64"));
    const music = await musicModel.create({
      uri: result.url,
      title,
      artist: req.user.id,
    });
    res.status(201).json({ message: "music uploaded", music });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "internal server error", error: err.message });
  }
}

async function createAlbum(req, res) {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "user not authenticated" });
    }
    const { title, musicid } = req.body;
    if (!title) {
      return res.status(400).json({ message: "title is required" });
    }
    if (!musicid) {
      return res.status(400).json({ message: "musicid is required" });
    }
    const album = await albumModel.create({
      title,
      artist: req.user.id,
      music: musicid,
    });
    res.status(201).json({
      message: "album created",
      album: {
        id: album._id,
        title: album.title,
        artist: album.artist,
        music: album.musics,
      },
    });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "internal server error", error: err.message });
  }
}

async function getMusic(req, res) {
  const music = await musicModel
    .find()
    .limit(2)
    .populate("artist", "email username");

  res.status(200).json({ message: "music fetched", music });
}

async function getAlbums(req, res) {
  const albums = await albumModel
    .find()
    .select("title artist ")
    .populate("artist", "email");

  return res.status(200).json({ message: "albums fetched", albums });
}

async function getAlbumid(req, res) {
  const albumid = req.params.albumid;
  const album = await albumModel
    .findById(albumid)
    .populate("artist", "username eamil")
    .populate("music");
  return res.status(200).json({ message: "album found", album });
}

module.exports = { createMusic, createAlbum, getMusic, getAlbums, getAlbumid };
