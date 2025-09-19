const UserService = require('../services/userService');

exports.register = async (req, res) => {
  const { username, password } = req.body;
  try {
    await UserService.createUser({ username, password });
    res.redirect('/login');
  } catch (err) {
    res.render('register', { error: 'Usuário já existe.' });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await UserService.authenticate(username, password);
  if (user) {
    req.session.userId = user.id;
    res.redirect('/users');
  } else {
    res.render('login', { error: 'Credenciais inválidas.' });
  }
};

exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/login');
  });
};
