const Sequelize = require('../config/db');
const User = Sequelize.import('../scheme/user');

// 同步到db
User.sync({force: false});

class UserModel {
  static async create(user) {
    let { username, password } = user;
    
    await User.create({
      username,
      password
    });
    return true;
  }

  static async delete(id) {
    await User.destroy({
      where: {
        id
      }
    });
    return true;
  }

  static async findAllUserList() {
    return await User.findAll({
      attributes: ['id', 'username']
    });
  }

  static async findUserByName(username) {
    return await User.findOne({
      where: {
        username
      }
    });
  }
}

module.exports = UserModel;
