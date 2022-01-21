const router = require('express').Router();
const{ Reservation } = require('../../models');
const isAuth = require('../../utils/auth')

// Make GET, CREATE, PUT, DELETE routes

router.post('/', isAuth, async (req, res) => {
    try {
        const reservationData = await Reservation.create({
            ...req.body,
            user_id: req.session.user_id,
        });
            
        res.status(200).json(reservationData);
    } catch (err) {
        res.status(400).json(err);
    };
});



module.exports = router;