export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Wetube 2022";
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.loggedInUser = req.session.user;
  console.log(res.locals);
  next();
};
