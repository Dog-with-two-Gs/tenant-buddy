const router = require('express').Router();
const { User } = require('../../models')

// Make GET, CREATE, PUT routes
router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll();
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    };
});

router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);

        // req.session.save(() => {
        //     req.session.user_id = userData.id;
        //     req.session.logged_in = truw;

        //     res.status(200).json(userData);
        // });

        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    };
});

router.put('/:id', async (req, res) => {
    try {
        const userData = await User.update(
            {
                password: req.body.password,
            },
            {
                where: {
                    id: req.params.id,
                },
            },
        );

        if (!userData) {
            res.status(404).json({ message: "NO ONE BY THAT ID DUMMY!" });
        };

        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    };
});

module.exports = router;