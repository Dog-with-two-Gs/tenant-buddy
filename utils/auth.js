const isAuth = (req, res, next) => {
    // If the user is not logged in, redirect the request to the login route
    if (!req.session.logged_in) {
      console.log(req.session)
      res.redirect('/login');
    } else {
      console.log(`you're logged in :)))))))`)
      next();
    }
  };
  
  module.exports = isAuth;
  