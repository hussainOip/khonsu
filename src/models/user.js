const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    walletAddress: { type: Object, default: {} },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);