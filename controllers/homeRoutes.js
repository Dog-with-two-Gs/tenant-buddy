const router = require('express').Router();
const { Op } = require('sequelize');
const moment  = require('moment');
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

router.get('/update', isAuth, async (req, res) => {
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

        const user = userData.get({ plain: true });
        res.render('dashboard', {
            ...user,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
})

// Get route for reservation page
router.get('/reservation', isAuth, async (req, res) => {
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
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/futureres/:time', isAuth, async (req, res) => {
    // const request_time = req.params.time.replaceAll('C', ':').replaceAll('S', 'T').replaceAll('D', '-');

    // console.log(request_time)
    // const test = new Date(request_time);
    // console.log(test.toUTCString());
    // console.log(request_time)

    try {
        // const request_time = new Date(req.params.time.replaceAll('C', ':').replaceAll('S', ' ').replaceAll('D', '-')).toUTCString();
        const request_time = moment(req.params.time.replaceAll('C', ':').replaceAll('S', ' ').replaceAll('D', '-')).utc()//.format("YYYY-MM-DD HH:mm:ss");
        console.log(moment(request_time).add(1, 'hour').add(16, 'minutes'))


        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: {
                model: Apartment,
                include: {
                    model: Complex,
                    include: {
                        model: Machine,
                        include: {
                            model: Reservation,
                            where: {
                                [Op.and]: 
                                [{
                                    reserve_time: {
                                        [Op.notBetween]:
                                        [moment(request_time),
                                        moment(request_time).add(1, 'hour').add(15, 'minutes')]
                                    }
                                },
                                {
                                    expire_at: {
                                        [Op.notBetween]: 
                                        [moment(request_time),
                                        moment(request_time).add(15, 'minutes')]
                                    }
                                }]
                            }
                        }
                    }
                }
            }
        });

        const user = userData.get({ plain: true });

        // console.log(user);
        // console.log(user);
        res.render('futureres', {
            ...user,
            logged_in: req.session.logged_in
        })
        // }
    } catch (err) {
        res.status(400).json(err)
    }
})


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