const express = require("express");
const router = express.Router();
const {
  addProduct,
  getProduct,
  deleteProduct,
  updateProduct,
  findOneProduct,
  featuredProduct,
  newProduct,
} = require("../controllers/product-controller");

router.post("/addProduct", addProduct);
router.get("/getProduct", getProduct);
router.put("/updateProduct/:id", updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);
router.get("/featuredProduct", featuredProduct);
router.get("/newProduct", newProduct);
router.get("/:id", findOneProduct);
module.exports = router;
