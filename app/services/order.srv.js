'use strict'
const mysql = require('mysql');
var connection = require('../../db');

module.exports.createOrder= function(instrument,order_type,quantity, unit_value,success,error){
        var datos_order= [[order_type,instrument,unit_value,quantity]];
        console.log(datos_order);
        connection.query('INSERT INTO arquitecturadb.order (order_type,instrument,unit_value,quantity) values ?',
        [datos_order],function(err,result,fields){
            if(err){
                throw err;
            }
            console.log(result);
            success(result);
        });      
}

module.exports.readOrders= function(success,error){
    connection.query('select * from arquitecturadb.order',function(err,result){
        if(err){
            throw err;
        }
        success(result);
    });      
}