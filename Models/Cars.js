const express = require('express');
const mongoose = require('mongoose');


 const carSchema =  new mongoose.Schema({
     Car:String,
     Path:String,
     Fare:String
 }) 

 module.exports = mongoose.model('cars', carSchema);