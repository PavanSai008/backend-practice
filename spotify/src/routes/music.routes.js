const express = require("express");
const musicController = require("../controllers/music.controller");
const multer = require("multer");
const AuthMiddleware = require("../middleware/auth.middelware");

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post(
  "/upload",
  AuthMiddleware.AuthArtist,
  upload.single("music"),
  musicController.createMusic,
);
router.post("/album", AuthMiddleware.AuthArtist, musicController.createAlbum);

router.get("/", AuthMiddleware.AuthUser, musicController.getMusic);

router.get("/albums", AuthMiddleware.AuthUser, musicController.getAlbums);

router.get(
  "/albums/:albumid",
  AuthMiddleware.AuthUser,
  musicController.getAlbumid,
);
module.exports = router;
