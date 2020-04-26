'use strict'
const mysql = require('mysql');
var connection = require('../../db');

module.exports.createOrder= function(instrument,order_type,quantity, unit_value,success,error){
        var datos_order= [[order_type,instrument,unit_value,quantity]];
        connection.query(`insert into order (order_type,instrument,unit_value,quantity)  values ? `,
        [datos_order],function(err,result,fields){
            if(err){
                throw err;
            }
            success(result);
        });      
}