const Restaurant = require('../models/Restaurant');
const AppError = require('../utils/AppError');

exports.getAllRestaurants = async (req, res, next) => {
  try {
    const restaurants = await Restaurant.findAll();
    if (!restaurants.length) {
      throw new AppError('No restaurants found', 404);
    }

    res.status(200).json(restaurants);
  } catch (err) {
    next(err);
  }
};

exports.getRestaurantById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const restaurant = await Restaurant.findByPk(id);

    if (!restaurant) {
      throw new AppError('Restaurant not found', 404);
    }

    res.status(200).json(restaurant);
  } catch (err) {
    next(err);
  }
};

exports.createRestaurant = async (req, res, next) => {
  try {
    if (!req.body.name || !req.body.address) {
      throw new AppError('Name and address are required', 400);
    }

    const restaurant = await Restaurant.create(req.body);
    res.status(201).json(restaurant);
  } catch (err) {
    next(err);
  }
};
