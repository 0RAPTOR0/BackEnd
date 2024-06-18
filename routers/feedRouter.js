const express = require('express');
const Model = require('../models/feedModel');

const router = express.Router();


router.post('/add', (req,res) => {

    console.log(req.body);

    new Model(req.body).save()                             //this has to use for saving in db 
    
    .then((result) => {
        res.status(200).json(result);
        
    }).catch((err) => {
        res.status(500).json(err);
    });
});
router.get('/getall', (req, res) => {
    res.send('Response from user getall');
    
});




module.exports = router;