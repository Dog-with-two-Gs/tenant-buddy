const router = require('express').Router();

const reservationRoutes = require('./reservationRoutes');
const userRoutes = require('./userRoutes');
// const machineRoutes = require('/machineRoutes');

router.use('/reservation', reservationRoutes);
router.use('/users', userRoutes);
// router.use ('/machine', machineRoutes);

module.exports = router;