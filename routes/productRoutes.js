const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

function isAuthenticated(req, res, next) {
  if (req.session.userId) return next();
  res.redirect('/login');
}

router.get('/', isAuthenticated, productController.list);
router.post('/create', isAuthenticated, productController.create);
router.post('/delete/:id', isAuthenticated, productController.delete);

module.exports = router;
