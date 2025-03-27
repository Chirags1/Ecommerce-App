const mongoose = require("mongoose");
const whistListSchema = new mongoose.Schema({
  userId: { type: Schema.Types.ObjectId, ref: "user" },
  productId: Array(String),
});
module.exports = mongoose.model("wishlist", whistListSchema);
