const express = require('express');
const router = express.Router();
const carController = require('../Controllers/carController');
//car routes
router.post('/postCar', carController.postCars);

module.exports = router;