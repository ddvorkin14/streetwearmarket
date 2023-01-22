const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  comment: "String",
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Review", ReviewSchema);
