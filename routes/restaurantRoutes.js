const express = require('express');
const { getAllRestaurants, createRestaurant } = require('../controllers/restaurantController');

const router = express.Router();

router.get('/', getAllRestaurants);
router.post('/', createRestaurant);

module.exports = router;
