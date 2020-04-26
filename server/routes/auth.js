const express = require('express');
const router = express.Router();
const data = require('../utils/data_handler');
const mongoose = require('mongoose');
const db = mongoose.connection;

router.post('/register', (req, res) => {
    res.send('Register');
});

router.post('/login', (req, res) => {
    console.log(req.body);
    const dat = db.collection('Users').findOne({ phone: req.body.phone, password: req.body.password }, function (err, result) {
        console.log(result);
        if (result)
            res.redirect(`/?name=${result.phone}`);
        else 
            res.redirect("/signin?msg=false");
    });
})

module.exports = router;