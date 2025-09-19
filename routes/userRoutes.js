const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

function isAuthenticated(req, res, next) {
  if (req.session.userId) return next();
  res.redirect('/login');
}

router.get('/', isAuthenticated, userController.list);
router.post('/delete/:id', isAuthenticated, userController.delete);

module.exports = router;
