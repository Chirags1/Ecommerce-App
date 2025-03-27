const brandModel = require("../models/brand-model");

module.exports.addBrand = async (req, res) => {
  try {
    let brand = await brandModel.create({ name: req.body.name });
    res.send({ message: "Brand Created", brand });
  } catch (err) {
    res.send(err);
  }
};

module.exports.getBrand = async (req, res) => {
  let brand = await brandModel.find();
  res.send(brand);
};

module.exports.deleteBrand = async (req, res) => {
  try {
    await brandModel.deleteOne({ _id: req.params.id });
    res.send({ message: "Brand Deleted" });
  } catch (err) {
    res.send(err);
  }
};

module.exports.updateBrand = async (req, res) => {
  try {
    await brandModel.findByIdAndUpdate(
      { _id: req.params.id },
      { name: req.body.name }
    );
    res.send({ message: "Brand Updated" });
  } catch (err) {
    res.send(err);
  }
};
