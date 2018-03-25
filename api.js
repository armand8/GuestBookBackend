//====LIST DEPENDENCIES===//

const express = require('express');
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');
const Signature = require('./models/signature.js')
const app = express();
const url = "mongodb://armand8:sandrillon@ds225308.mlab.com:25308/armand8";


//=========================//

//====ROOT DIRECTORY===//
app.get('/', function(req, res) {
  res.json('you did it');
});
//==========================//
//====GET ALL SIGNATURES===//
app.get('/api/signatures', function(req, res) {
  Signature.find({}).then(eachOne => {
    res.json(eachOne);
    })
  })
//==========================//
//====POST NEW SIGNATURE===//
app.post('/api/signatures', function(req, res) {
    var message = req.body;
    console.log(message.signatureOfGuest)
  Signature.create({
      signatureOfGuest: req.body.signatureOfGuest,
      messageOfGuest: req.body.messageOfGuest,
  }).then(signature => {
    res.json(signature)
  });
});
//==========================//

//====MONGOOSE CONNECT===//
mongoose.connect(url, function (err, db) {
 if (err) {
   console.log('Unable to connect to the mongoDB server. Error:', err);
 } else {
   console.log('Connection established to', url);
 }
});
//==========================//

app.listen(process.env.PORT || 3000);
