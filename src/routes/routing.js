const express = require('express');
const router = express.Router();
const service = require('../service/service');
var bodyParser = require('body-parser');
router.use(bodyParser.json());


router.get('/setupDb', (req, res, next) => {
    service.setupDb().then((data)=>{
        res.json(data)
    })
})

router.post('/signup',function(req,res,next){
    var credentials={
        "fullName":req.body.fullName,
        "email":req.body.email,
        "password":req.body.password,
        "phoneNo":req.body.phoneNo
    }
    return service.signUpUser(credentials)
            .then(function(data){
                res.json(data);
            }).catch(function (err){
                next(err);
            });
});

router.get('/getProvincesList',(req,res,next)=>{
    service.getProvincesList().then(data=>{
        res.json(data[0].array)
    })
})

router.post('/getInstallmentOptions',(req,res,next)=>{
    service.installmentOptions(req.body).then(data=>{
        res.json(data)
    })
})

router.post('/purchasePolicy',(req,res,next)=>{
    service.postPurchasePolicy(req.body).then(data=>{
        res.json("data uploaded")
    })
})

router.get('/purchasePolicy',(req,res,next)=>{
    service.getPurchasePolicy().then(data=>{
        res.json(data)
    })
})

router.get('/mtplCalculator/',(req, res, next)=>{
    service.getdetailbyregno().then(data=>{
        res.json(data)
    }).catch((err) => next(err));
});

router.post('/mtplCalculator',(req, res, next)=>{
    const data=req.body;
    console.log("inside post.. ...")
    service.adddetails(data).then(data=>{
        res.json(data)
    }).catch((err) => next(err));
});

module.exports = router;