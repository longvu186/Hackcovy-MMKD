const express = require('express');
const router = express.Router();
const data = require('../utils/data_handler');

router.post('/register', (req,res) => {
    res.send('Register');
});

router.get('/login', (req,res) => {
    res.send(data.makeResponse(status="success",msg="ok"));
})

module.exports = router;