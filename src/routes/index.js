const express = require('express');
const router = express.Router(); 

router.get('/nou', (req, res) => {
    res.send('nameyeff');
});

module.exports = router; 