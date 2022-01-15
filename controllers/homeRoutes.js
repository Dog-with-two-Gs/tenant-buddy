const router = require('express').Router();

// Make routes

// Get route for homepage
router.get('/', async (req, res) => {
    res.render('homepage')
})

// Get route for login page
router.get('/login', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    } else {
        res.render('login');
    };
});

// Get route for signup page
router.get('signup', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    } else {
        res.render('signup')
    };
});

module.exports = router;