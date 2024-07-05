const router = require('express').Router();
const userModel = require('../models/user');
const wrapAsync = require('../utils/wrapAsync');


router.get('/', wrapAsync(async (req, res) => {
    try {
        const user = await userModel.find({});
        console.log("requested")
        res.send(user)
    } catch (error) {
        console.log(error)
    }
}));

router.post('/update', wrapAsync(async (req, res) => {
    try {
        console.log(req.body)
        const userData = req.body;
        if (userData) {
            const user = await userModel.findByIdAndUpdate(userData.id, userData, { new: true });
            // Update the user session with the updated user data
            req.login(user, (err) => {
                if (err) {
                    res.status(500).send("Error updating user session");
                } else {
                    res.status(200).json({ user });
                }
            });
        } else {
            res.status(400).send("Invalid user data");
        }
    } catch (error) {
        res.send(error)
    }
}));

router.delete('/', wrapAsync(async (req, res) => {
    try {
        const userIds = req.body.userIds;
        const result = await userModel.deleteMany({ _id: { $in: userIds } });
        if (result.acknowledged) {
            res.json(result);
        } else {
            res.json({});
        }
    } catch (error) {
        console.log(error)
    }
}));

module.exports = router;
