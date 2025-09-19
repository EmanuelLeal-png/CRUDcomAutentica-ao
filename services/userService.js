const User = require('../models/User');
const bcrypt = require('bcrypt');

class UserService {
  static async createUser({ username, password }) {
    return await User.create({ username, password });
  }

  static async authenticate(username, password) {
    const user = await User.findOne({ where: { username } });
    if (user && await bcrypt.compare(password, user.password)) {
      return user;
    }
    return null;
  }

  static async getAllUsers() {
    return await User.findAll();
  }

  static async deleteUser(id) {
    return await User.destroy({ where: { id } });
  }
}

module.exports = UserService;
