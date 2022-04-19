const mongoose = require("mongoose");

const poolHistorySchema = new mongoose.Schema(
 {
  
     pool_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'pool'
     },
     amount: Number
 },
  { timestamps: true }
);

module.exports = mongoose.model("poolHistory",poolHistorySchema );