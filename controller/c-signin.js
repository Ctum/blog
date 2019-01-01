exports.getSignin = async ctx => {
  await ctx.render('signin');
}

exports.postSignin = async ctx => {
  console.log(ctx.request.body);
  let { name, password } = ctx.request.body;
}