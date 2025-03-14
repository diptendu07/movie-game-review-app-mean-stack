const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      
    });

    if (process.env.NODE_ENV !== "test") {
      console.log("MongoDB Connected Successfully");
    }
  } catch (error) {
    console.error("Database Connection Failed", error);
    process.exit(1);
  }
};

module.exports = connectDB;
