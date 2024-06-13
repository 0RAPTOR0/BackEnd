const express = require('express');

const router = express.Router();


router.post('/add', (req,res) => {

    console.log(req.body);
    
    res.send('Response from user add');
});
router.get('/getall', (req, res) => {
    res.send('Response from user getall');
});


module.exports = router;