const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect(
    "mongodb+srv://yt:XxLA7H80WeAD1P7l@yt-complete-backend.rzyolbr.mongodb.net/halley",
    console.log("connected to database"),
  );
}

module.exports = connectDB