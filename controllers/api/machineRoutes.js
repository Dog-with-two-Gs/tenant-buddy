const router = require('express').Router();
const { Machine } = require('../../models');
const isAuth = require('../../utils/auth')

// PUT route for status_id
router.put('/:id', isAuth, async (req, res) => {
    try {
        const machineData = await Machine.update(
            {
                status_id: 2,
            },
            {
                where: {
                    id: req.params.id,
                },
            },
        );

        if (!machineData) {
            res.status(404).json({ message: 'No machine found with this id' })
        };

        res.status(200).json(machineData);
    } catch (err) {
        res.status(500).json(err);
    };
});

// Make GET route

module.exports = router;