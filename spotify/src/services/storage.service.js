const ImageKit = require("@imagekit/nodejs");

const imagekit = new ImageKit({
  privateKey: process.env.PRIVATE_KEY,
});

async function uploadMusic(file) {
  const result = await imagekit.files.upload({
    file,
    fileName: "music_" + Date.now(),
    folder: "/1bakend/music",
  });
  return result;
}
module.exports = { uploadMusic };
