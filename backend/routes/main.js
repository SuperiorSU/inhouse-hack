const express = require('express');
const router = express.Router();
const User = require('../models/user');
// adding user to database
router.post('/addUser', async (req, res) => {
    const { name, admission, batch, email, teamlead,members, member1, member2, member3 } = req.body;
    try {
        const user = new User({
            name,
            admission,
            batch,
            email,
            teamlead,
            members,
            member1,
            member2,
            member3,
        });
        await user.save();
        res.status(200).json({ 
            success:"true",
            message: 'User added successfully' });
    } catch (error) {
        res.status(500).json({
            success:"false",
            message: 'Server Error' });
    }
});

module.exports = router;