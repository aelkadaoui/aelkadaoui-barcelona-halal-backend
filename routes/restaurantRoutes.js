const express = require('express');
const router = express.Router();
const { getAllRestaurants, createRestaurant, getRestaurantById } = require('../controllers/restaurantController');

router.get('/', getAllRestaurants);
router.get('/:id', getRestaurantById);
router.post('/', createRestaurant);

module.exports = router;
