const router = require('express').Router();
const { Machine, Reservation } = require('../../models');
const isAuth = require('../../utils/auth');
const moment = require('moment');
const { Op } = require('sequelize');

// PUT route for status_id
router.put('/reserve/:id', isAuth, async (req, res) => {
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


// Gets called in every init to update machine status
router.put('/free', async (req, res) => {
    try {
        console.log('hello')
        const currentTime = moment().utc();
        // const machineData = await Machine.findAll({
        const machineData = await Machine.findAll({
            include: {
                model: Reservation,
                where: {
                    [Op.and]: [
                        {
                            expire_at: {
                                [Op.lt]: currentTime,
                            }
                        },
                        {
                            is_complete: true,
                        },
                    ]
                }
            }
        })
        machineData.forEach(machine => Machine.update({
            status_id: 1,
        },
        {where: {
            id: machine.id,
        }}))

        //.then(targets => {
        //     targets.update({
        //         status_id: 1,
        //     },
        //     {
        //         where: {
        //             target_primary_key: targets.map(t => t.primary_key)
        //         }
        //     })
        // })

        // machineData.update({
        //     status_id: 1,
        // })

        console.log(machineData)

        // const machineData = await Machine.update({
        //     status_id: 1,
        // },
        //     {
        //         include: {
        //             model: Reservation,
        //             where: {
        //                 [Op.and]: [
        //                     {
        //                         expire_at: {
        //                             [Op.lt]: currentTime,
        //                         }
        //                     },
        //                     {
        //                         is_complete: false,
        //                     }
        //                 ]
        //             }
        //         }
        //     });

        if (!machineData) {
            res.status(404).json({ message: 'No machines found!' })
        }

        res.status(200).json(machineData);



    } catch (err) {
        res.status(500).json(err);
    }
})

// Make GET route

module.exports = router;