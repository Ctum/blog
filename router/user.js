const router = require('koa-router');
const UserController = require('../controller/user');

const route = new router();

route.post('/user/register', UserController.create);

module.exports=route;