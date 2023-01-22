const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: String,
  email: {
    type: String,
    lowercase: true,
  },
  password: String,
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

// all info for schema above.. once that is defined, create the model

module.exports = mongoose.model("User", userSchema);

// "user" is what you see inside the mongoDB database, then pass in schema .. then export it
