import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import errorHandler from './middlewares/errorHandler.js';
import sequelize from './config/database.js';
import restaurantRoutes from './routes/restaurantRoutes.js';



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
