const express = require("express");
const router = express.Router();
const {
  addBrand,
  getBrand,
  deleteBrand,
  updateBrand,
} = require("../controllers/brand-controller");

router.get("/getBrand", getBrand);
router.post("/addBrand", addBrand);
router.delete("/deleteBrand/:id", deleteBrand);
router.put("/updateBrand/:id", updateBrand);

module.exports = router;
