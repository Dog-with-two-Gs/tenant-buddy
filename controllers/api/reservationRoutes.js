const router = require('express').Router();
const { Reservation } = require('../../models');
const isAuth = require('../../utils/auth');
const { Op } = require('sequelize');
const moment = require('moment');

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

// Gets called in every init to update reservation status
router.put('/', async (req, res) => {
    try {
        const currentTime = moment().utc();
        const reservationData = await Reservation.update({
            is_complete: true,
        },
            {
                where: {
                    reserve_time: {
                        [Op.lt]: currentTime,
                    }
                }
            })

        if (!reservationData) {
            res.status(404).json({ message: 'No machines found' })
        }
        res.status(200).json(reservationData);
    } catch (err) {
        res.status(500).json(err);
    }
})



module.exports = router;