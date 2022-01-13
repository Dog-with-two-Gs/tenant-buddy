const router = require('express').Router();

const reservationRoutes = require('/reservationRoutes');
const tenantRoutes = require('/tenantRoutes');
const machineRoutes = require('/machineRoutes');

router.use('/reservation', reservationRoutes);
router.use('/tenant', tenantRoutes);
router.use ('/machine', machineRoutes);

module.exports = router;