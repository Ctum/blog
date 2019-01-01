const UserModel = require('../model/user');
const bcrypt = require('bcryptjs');

class UserController {
  static async create(ctx) {
    const user = ctx.request.body;

    if(user.username && user.password) {
      const existName = await UserModel.findUserByName(user.username);

      if(existName) {
        ctx.response.status = 403;
        ctx.body = {
          code: 403,
          msg: '用户已存在'
        };
      } else {
        const salt = bcrypt.genSaltSync();
        const hash = bcrypt.hashSync(user.password, salt);
        user.password = hash;

        await UserModel.create(user);

        const newUser = await UserModel.findUserByName(user.username)

        ctx.response.status = 200;
        ctx.body = newUser;
      }
    } else {
      ctx.response.status = 412;
      ctx.body = {
        code: 412,
        msg: '参数错误'
      };
    }
  }
}

module.exports = UserController;