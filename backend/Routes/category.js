const express = require("express");
const router = express.Router();

const {
  addCategory,
  updateCategory,
  deleteCategory,
  categories,
} = require("../controllers/category-controller");
router.get("/", (req, res) => {
  console.log("hello");
});

router.post("/addCategory", addCategory);

router.put("/updateCategory/:id", updateCategory);

router.delete("/deleteCategory/:id", deleteCategory);

router.get("/allCategory", categories);

module.exports = router;
