module.exports = {
  checkLogin: ctx => {
    if (ctx.session && ctx.session.user) {
      ctx.redirect('/');
      return true;
    } else {
      if (ctx.path !== '/signin') ctx.redirect('/signin');
      return false;
    }
  }
}