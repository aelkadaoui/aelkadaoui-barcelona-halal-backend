const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const errorHandler = require('./middlewares/errorHandler.js');
const sequelize = require('./config/database.js');
const restaurantRoutes = require('./routes/restaurantRoutes.js');



dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(errorHandler);
app.use(cors());
app.use(express.json());
app.all('*', (req, res, next) => {
  next(new AppError(`Cannot find ${req.originalUrl} on this server`, 404));
});


app.use('/api/restaurants', restaurantRoutes);

sequelize.sync({ force: false })
  .then(() => console.log('Database synced'))
  .catch(err => console.error('Error syncing database:', err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
