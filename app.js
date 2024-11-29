const express = require('express');
const seedRestaurants = require('./seeders/seedRestaurants');
const app = express();
const PORT = process.env.PORT || 3000;

const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

const restaurantRoutes = require('./routes/restaurantRoutes');
app.use('/api/restaurants', restaurantRoutes);

(async () => {
  console.log('Seeding database...');
  await seedRestaurants();
})();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
