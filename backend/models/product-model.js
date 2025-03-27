const mongoose = require("mongoose");
const { Schema } = mongoose;
const productSchema = new mongoose.Schema({
  productName: String,
  shortDescription: String,
  description: String,
  price: Number,
  discount: Number,
  image: Array(String),
  categoryId: { type: Schema.Types.ObjectId, ref: "category" },
  brandId: { type: Schema.Types.ObjectId, ref: "brand" },
  isFeatured: Boolean,
  IsNew: Boolean,
});
module.exports = mongoose.model("product", productSchema);
