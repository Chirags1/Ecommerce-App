const productModel = require("../models/product-model");

module.exports.addProduct = async (req, res) => {
  try {
    let {
      productName,
      shortDescription,
      description,
      price,
      discount,
      image,
      categoryId,
      brandId,
      isFeatured,
      IsNew,
    } = req.body;
    console.log(req.body);

    let product = await productModel.create({
      productName,
      shortDescription,
      description,
      price,
      discount,
      image,
      categoryId,
      brandId,
      isFeatured,
      IsNew,
    });
    res.send({ message: "Product Added Successfully", product });
  } catch (err) {
    res.send(err);
  }
};

module.exports.getProduct = async (req, res) => {
  let product = await productModel.find();
  product = product.map((products, index) => {
    return {
      id: index + 1,
      ...products._doc,
    };
  });
  res.send(product);
};

module.exports.deleteProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.params.id);
    res.send({ message: "Product Deleted" });
  } catch (err) {
    res.send(err);
  }
};

module.exports.updateProduct = async (req, res) => {
  try {
    data = { ...req.body };
    let product = await productModel.findByIdAndUpdate(
      { _id: req.params.id },
      { ...req.body },
      { new: true }
    );
    console.log(product, data);
    res.send({ message: "Product Updated Successfully", product });
  } catch (err) {
    res.send(err);
  }
};

module.exports.findOneProduct = async (req, res) => {
  try {
    let product = await productModel.findOne({ _id: req.params.id });
    res.send(product);
  } catch (err) {
    res.send(err);
  }
};

module.exports.featuredProduct = async (req, res) => {
  try {
    let product = await productModel.find({ isFeatured: true });
    console.log(product);
    res.send(product);
  } catch (err) {
    res.send(err);
    console.log(err);
  }
};

module.exports.newProduct = async (req, res) => {
  try {
    let product = await productModel.find({ IsNew: true });
    res.send(product);
  } catch (err) {
    res.send(err);
  }
};
