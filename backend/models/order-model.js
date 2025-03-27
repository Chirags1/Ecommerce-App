const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  date: Date,
  items: Array(any),
  status: Number,
});
module.exports = mongoose.model("order", orderSchema);
