const express = require('express');
const router = express.Router();
const https = require('https');
const superagent = require('superagent'); 

function getCyrpto(num){
    return  new Promise((resolve, reject)=>  {
        var result;
        superagent.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit='+num+'&tsym=USD')
        .query({ api_key: 'd8f5548599981b6a5af61d2de9fb7869bb424bd7ac94769f81b1cbf2a93aa783'})
        .end((err, res) => {
        if (err) { return console.log(err); reject(err);}
        result = res.body;
        setTimeout(() => {
            console.log(result);
            resolve(result)
        }, 2000)
        });
    });
}



router.get('/top_list&ammt=:num', (req, res, next) => {
    num = req.params.num;
    getCyrpto(num).then(crypto=>{
        setTimeout(()=>{
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.status(200).json({
                apiRes: crypto
            });
        }, 2500);
    }).catch(err=>res.status(400).json(err));
});

module.exports = router;