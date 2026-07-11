require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/db/db");

connectDB();

app.listen(300, () => {
  console.log("server running at port 3000");
});
