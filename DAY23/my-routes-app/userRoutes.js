const express = require('express');
const router = express.Router();

// Grouped routes for users
router.get('/', (req, res) => {
    res.send('User List');
});

router.get('/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

module.exports = router;
