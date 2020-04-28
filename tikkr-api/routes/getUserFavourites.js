const express = require('express');
const router = express.Router();
const https = require('https');
const superagent = require('superagent'); 

router.get('/getFav&favArray=:arry', (req, res, next) => {
    var array = req.params.favArray;
    console.log(array)

    getCyrpto(num).then(crypto=>{
        setTimeout(()=>{
            time += 1;
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.status(200).json({
                apiRes: 'hello world',
                array:  array
            });
        }, 1200);
    }).catch(err=>res.status(400).json(err));
});




module.exports = router;