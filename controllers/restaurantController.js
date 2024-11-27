import AppError from '../utils/AppError.js';

export const getAllRestaurants = async (req, res, next) => {
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

export const createRestaurant = async (req, res, next) => {
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
