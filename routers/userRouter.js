'use client';
const express = require('express');
const Model = require('../models/usermodel');
const jwt = require('jsonwebtoken');
const verifyToken = require('./verifyToken');
require('dotenv').config();

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
    

    Model.find()
    .then((result) => {
        res.status(200).json(result)
        
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err)
        
    });
});


//:denotes url parameter
router.get('/getbycity/:city',(req,res) => {
    console.log(req.params.city);

    Model.find( {city : req.params.city })

        .then((result) => {
            res.status(200).json(result)

        }).catch((err) => {
            console.log(err);
            res.status(500).json(err)

        });
} )     


router.get('/getbyemail/:email', (req, res) => {

    Model.findOne({ email: req.params.email })                
        .then((result) => {
            res.status(200).json(result)

        }).catch((err) => {
            console.log(err);
            res.status(500).json(err)

        });
})


router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id)
        .then((result) => {
            res.status(200).json(result)

        }).catch((err) => {
            console.log(err);
            res.status(500).json(err)

        });
})

router.put('/update/:id',(req,res) => {
    Model.findByIdAndUpdate(req.params.id, req.body, { new : true })
        .then((result) => {
            res.status(200).json(result)

        }).catch((err) => {
            console.log(err);
            res.status(500).json(err)

        });
});

router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.status(200).json(result)

        }).catch((err) => {
            console.log(err);
            res.status(500).json(err)

        });
})



router.post('/authenticate', (req,res) => {
    Model.findOne(req.body)
    .then((result) => {
        
        if(!result){
            // if not match
            return res.status(401).json({message : 'Invalid Credentials'});
        }else{

            const { _id, name, email, password } = result;
            const payload = { _id, name, email, password};

            jwt.sign(
                payload,
                process.env.JWT_SECRET,
                { expiresIn: '3 days' },
                (err, token) => {
                    if(err){
                        console.log(err);
                        return res.status(500).json(err);
                    }else{
                        return res.status(200).json({ token, name, email });
                    }
                }
            )
        }

    }).catch((err) => {
        
    });
})

router.get('/authorise', verifyToken, () => {
    res.status(200).json(req.user);
});

module.exports = router;