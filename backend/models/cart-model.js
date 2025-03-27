const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
  userId: { type: Schema.Types.ObjectId, ref: "user" },
  productId: Array(String),
});
module.exports = mongoose.model("cart", cartSchema);
