const restaurants = require('../data/restaurants.json');
const sequelize = require('../config/database.js');
const Restaurant = require('../models/Restaurant');

const seedRestaurants = async () => {
  try {
    const existingCount = await Restaurant.count(); // Check if records already exist
    if (existingCount > 0) {
      console.log('Database already seeded. Skipping seeding...');
      return;
    }

    for (let i = 0; i < restaurants.length; i++) {
      const restaurant = restaurants[i];
      await Restaurant.create(restaurant);
      console.log(`Inserted: ${restaurant.name}`);
    }

    console.log('All restaurants have been inserted successfully!');
  } catch (error) {
    console.error('Error inserting restaurants:', error);
  }
};

sequelize
  .sync({ force: false }) // Ensure database schema is synced without dropping tables
  .catch((err) => {
    console.error('Error syncing the database:', err);
  });

module.exports = seedRestaurants;
