const Restaurant = require('../models/Restaurant');
const restaurant = require('../data/restaurants.json');

const seedRestaurants = async () => {
  try {
    await Restaurant.bulkCreate(restaurant);
    console.log('Restaurants seeded successfully');
  } catch (err) {
    console.error('Error seeding restaurants:', err);
  }
};

seedRestaurants();
