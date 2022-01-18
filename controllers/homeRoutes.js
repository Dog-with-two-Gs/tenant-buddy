const router = require('express').Router();
const { User, Reservation, Status, Machine } = require('../models');
const isAuth = require('../utils/auth');

// Get route for homepage
router.get('/', async (req, res) => {
    try {
        if (req.session.logged_in) {
            res.redirect('/dashboard');
            return;
        } else res.render('homepage', {
        });
    } catch (err) {
        res.status(500).json(err);
    }

})

// Get route for login page
router.get('/login', async (req, res) => {
    try {
        if (req.session.logged_in) {
            res.redirect('/dashboard');
            return;
        } else {
            res.render('login');
        };
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get route for signup page
router.get('/signup', async (req, res) => {
    try {
        if (req.session.logged_in) {
            res.redirect('/dashboard');
            return;
        } else {
            res.render('signup');
        };
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET route for profile page 
router.get('/profile', isAuth, async (req, res) => {
    try {

        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
        });

        const user = userData.get({ plain: true });
        res.render('profile', {
            ...user,
            logged_in: req.session.logged_in,
        })
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/dashboard', isAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: ['firstname'],
            include: {
                model: Reservation,
                include: {
                    model: Machine,
                    attributes: ['id', 'type', 'status_id'],
                    include: {
                        model: Status
                    }
                }
            }
        });

        const user = userData.get({plain: true});
        res.render('dashboard', {
            ...user,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;