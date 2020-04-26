'use strict'
var express = require('express')
var routr = express.Router();
var orderServices = require('../services/order.srv.js');

routr.post('/orders',function (req,res){
    var order_type = req.body.order_type;
    var instrument = req.body.instrument;
    var unit_value= req.body.unit_value;
    var quantity = req.body.quantity;
    
    orderServices.createOrder(instrument,order_type,quantity, unit_value,function(){
            res.statusCode = 200;
            res.send({ OK: "OK" });
    });
})

module.exports = routr;