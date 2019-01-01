const Koa = require('koa');
const views = require('koa-views');
const favicon = require('koa-favicon');
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const { resolve } = require('path');

const app = new Koa();
app.use(bodyParser());

app.use(favicon(resolve('./static/favicon.ico')));

app.use(views(resolve(__dirname, './views'), {
  extension: 'pug'
}));

app.use(serve(resolve(__dirname, './static')));


// app.use(async ctx => {
//   ctx.body = '<h1>Hello, world!</h1>'
// })

// 路由
const signin = require('./router/signin');
const index = require('./router/index')
app.use(signin.routes());
app.use(index.routes());

app.listen(8000, console.log('koa2 is running at http://127.0.0.1:8000'));
