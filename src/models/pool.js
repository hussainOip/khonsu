const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");

const poolSchema = new mongoose.Schema(
 {  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
 },
 name: String,
 unit: String,
 totlaAmount: Number,
 rate: Number,
},
  { timestamps: true }
);

module.exports = mongoose.model("pool",poolSchema );