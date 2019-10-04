const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const routes = require('./Routes/route');





app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use('/',routes);
port = 0002;
app.listen( port, () =>{
    console.log(`This Machine is listening on port:${port}`)
});
mongoose.connect('mongodb://localhost:27017/CarRentals',{useUnifiedTopology:true, useNewUrlParser:true});