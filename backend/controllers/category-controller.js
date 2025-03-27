const categoryModel = require("../models/category-model");

module.exports.addCategory = async (req, res) => {
  await categoryModel
    .create({
      name: req.body.name,
    })
    .then((msg) => {
      res.send({ message: "Category Added Successfully", msg });
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports.updateCategory = async (req, res) => {
  let id = req.params.id;
  let updated = await categoryModel.findOneAndUpdate(
    { _id: id },
    { name: req.body.name }
  );
  res.send({ message: "Category Updated" });
};

module.exports.deleteCategory = async (req, res) => {
  await categoryModel.deleteOne({ _id: req.params.id });
  res.send({ message: "Category Deleted" });
  ``;
};

module.exports.categories = async (req, res) => {
  let allCategories = await categoryModel.find();
  allCategories = allCategories.map((categories, index) => {
    return {
      id: index + 1,
      ...categories._doc,
    };
  });
  res.send(allCategories);
};
