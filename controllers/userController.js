const UserService = require('../services/userService');

exports.list = async (req, res) => {
  const users = await UserService.getAllUsers();
  res.render('users', { users });
};

exports.delete = async (req, res) => {
  await UserService.deleteUser(req.params.id);
  res.redirect('/users');
};
