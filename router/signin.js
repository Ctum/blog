const route = require('koa-router')();
const controller = require('../controller/c-signin');

route.get('/signin', controller.getSignin);
route.post('/signin', controller.postSignin);

module.exports = route;
