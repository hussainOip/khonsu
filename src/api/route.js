const express = require('express');
const app =  express();

var userRoute = require('./user');
var transactionRoute = require('./transaction');
var poolRoute = require('./pool');
var poolHistoryRoute = require('./poolHistory');
var investmentRoute = require('./investment');


app.use('/auth', userRoute);
app.use('/pool', poolRoute);
app.use('/investment', investmentRoute);
app.use('/transaction', transactionRoute);
app.use('/poolHistory', poolHistoryRoute);



module.exports = app;