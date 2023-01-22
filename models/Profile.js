const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    userId: {

    }
    city: String,
    first_name: String,
    last_name: String,
    age: Number,
    location: String,
    birthday: { type: Date },
  });



  module.exports = mongoose.model("Profile", profileSchema);