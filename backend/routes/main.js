const express = require('express');
const router = express.Router();

// adding user to database
router.post('/addUser', async (req, res) => {
    const { name, admissionNo, batch, email, leader, teamMember1, teamMember2, teamMember3 } = req.body;
    try {
        const user = new User({
            name,
            admissionNo,
            batch,
            email,
            leader,
            teamMember1,
            teamMember2,
            teamMember3,
        });
        await user.save();
        res.status(200).json({ message: 'User added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;