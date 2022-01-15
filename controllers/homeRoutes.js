const router = require('express').Router();

// Make routes

// Get route for homepage
router.get('/', async (req, res) => {
    try {
        res.render('homepage')
    } catch (err) {
        res.status(500).json(err);
    }

})

// Get route for login page
router.get('/login', async (req, res) => {
    try {
        if (req.session.logged_in) {
            res.redirect('/profile');
            return;
        } else {
            res.render('login');
        };
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get route for signup page
router.get('signup', async (req, res) => {
    try {
        if (req.session.logged_in) {
            res.redirect('/profile');
            return;
        } else {
            res.render('signup')
        };
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;