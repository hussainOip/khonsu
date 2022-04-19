const mongoose = require("mongoose");

const investmentSchema = new mongoose.Schema(
 {
     user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
     },
     pool_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'pool'
     },
     ammount: Number

 },
  { timestamps: true }
);

module.exports = mongoose.model("Invest",investmentSchema );