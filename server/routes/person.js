const express = require('express');
const router = express.Router();
const data = require('../utils/data_handler');
const db = require('../utils/db');

router.get('/info/:id', (req,res) => {
    try {
        const userId = req.params ? req.params.id : null;

        const userData = db.getData(`/person[${userId}]`);
        
        res.status(200).send({
            ...data.makeResponse(status="success"),
            data: userData
        })
    } catch (e){
        res.status(200).send(data.makeResponse(status="fail",msg=e));
    }
});

router.post('/add', (req,res) => {
    try {
        const userId = req.params ? req.params.id : null;

        const userData = db.push(`/person[]`,req.query);
        
        res.status(200).send({
            ...data.makeResponse(status="success"),
            data: userData
        })
    } catch (e){
        res.status(200).send(data.makeResponse(status="fail",msg=e));
    }
});


router.post('/modify', (req,res) => {
    res.status(200).send(data.makeResponse(status="success"));
});

router.post('/delete/:id', (req,res) => {
    try {
        const userId = req.params ? req.params.id : null;
        db.delete(`/person[${userId}]`);
        res.status(200).send(data.makeResponse(status="success",msg=userId));
    } catch (e) {
        res.status(200).send(data.makeResponse(status="fail",msg=e));
    }
});



module.exports = router;