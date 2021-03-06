const router = require('express').Router();
const { User, Reservation, Status, Machine, Apartment, Complex, Employee, Management } = require('../models');
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

router.get('/update', isAuth, async(req, res) => {
    try {
        res.render('update', {
            logged_in: req.session.logged_in,
        })
    } catch (err) {
        res.status(500).json(err);
    }
})

// GET route for profile page 
router.get('/profile', isAuth, async (req, res) => {
    try {

        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: {
                model: Apartment,
                attributes: ['apartment_no'],
                include: {
                    model: Complex,
                    attributes: ['street_address', 'city', 'state']

                }
            }
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
        console.log(user.reservations[0]);
        res.render('dashboard', {
            ...user,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
})

// Get route for reservation page
router.get('/reservation', async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: {
                model: Apartment,
                include: {
                    model: Complex,
                    include: {
                        model: Machine,
                        where: {status_id: 1},
                    } 
                }
            }
        });
 
        const user = userData.get({ plain: true });
 
        res.render('reservation', {
            ...user,
            logged_in: true,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// get route for contact page
router.get('/contact', async (req, res) => {
    try {
        if (req.session.user_id) {
            const managerData = await User.findByPk(req.session.user_id, {
                attributes: { exclude: ['password'] },
                include: {
                    model: Apartment,
                    include: {
                        model: Complex,
                        include: {
                            model: Employee,
                            where: { role_id: 4 },
                            include: {
                                model: Management,
                            },
                        },
                    },
                },
            });
    
            const manager = managerData.get({ plain: true });
    
            res.render('contact', {
                ...manager,
                logged_in: req.session.logged_in,
            });
        } else {
            res.render('contact')
        }
    } catch (err) {
        res.status(500).json(err);
    };
});

module.exports = router;