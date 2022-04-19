const mongoose = require("mongoose");

const transactionSchema  = new mongoose.Schema(
 {
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
     },
     pool_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'pool'
     },
     action:{
         type: String,
         enum:["Deposit", "Withdraw"]
     }
 },
  { timestamps: true }
);

module.exports = mongoose.model("transaction", transactionSchema );