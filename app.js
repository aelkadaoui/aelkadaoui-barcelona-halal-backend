const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const errorHandler = require('./middlewares/errorHandler');
const sequelize = require('./config/database');
const restaurantRoutes = require('./routes/restaurantRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/restaurants', restaurantRoutes);

app.all('*', (req, res, next) => {
  next(new AppError(`Cannot find ${req.originalUrl} on this server`, 404));
});

app.use(errorHandler);

sequelize.sync({ force: false })
  .then(() => console.log('Database synced'))
  .catch(err => console.error('Error syncing database:', err));

const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = server;
