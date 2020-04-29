'use strict';

const mysql = require('mysql');
//var conf = require('./config.js');
const dotenv = require('dotenv');

let connection;

/*if(process.env.NODE_ENV === 'db'){
  dotenv.config( {path: "./environments/mv.env"});
}else{
  dotenv.config( {path: "./environments/aws.env"});
}*/

dotenv.config( {path: "./environments/db.env"});
var dbParams;
/*if (process.env.NODE_ENV === 'test'){
    dbParams = conf.get('test');
} else {
    dbParams = conf.get('db');
}*/
console.log(process.env.HOST);
console.log(process.env.USER);


function connectDB(){
    if(!connection){
        connection = mysql.createConnection({
            host: process.env.HOST,
            user: process.env.USER_DB,
            password: process.env.PASSWORD_DB,
            database: process.env.DATABASE,
            timeoutBeforeReconnection: process.env.timeoutBeforeReconnection
          });
        connection.connect((err)=>{
            if(!err)
                console.log(`Conexion BD ${process.env.DATABASE} OK`);
            else
                console.log(`Conexion errada BD ${process.env.DATABASE}: ` + err);
        })
    }
    return connection;
}


  module.exports = connectDB();
