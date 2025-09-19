const Product = require('../models/Product');

exports.list = async (req, res) => {
  const products = await Product.findAll();
  res.render('products', { products });
};

exports.create = async (req, res) => {
  await Product.create(req.body);
  res.redirect('/products');
};

exports.delete = async (req, res) => {
  await Product.destroy({ where: { id: req.params.id } });
  res.redirect('/products');
};
