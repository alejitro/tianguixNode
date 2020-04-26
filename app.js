  'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const ordersController = require('./app/controllers/order.ctrl.js');

const app = express();

const port = 8080;

app.options('*', cors());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req,res,next){
  next();
});

app.use('/api/v1',[ordersController]);

app.listen(port, () => {
  console.log('Orders listening on ' + port);
});