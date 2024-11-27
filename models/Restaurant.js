import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Restaurant = sequelize.define('Restaurant', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lat: DataTypes.FLOAT,
    lng: DataTypes.FLOAT,
    description: DataTypes.TEXT,
    phone: DataTypes.STRING,
    website: DataTypes.STRING,
    instagram: DataTypes.STRING,
});

export default Restaurant;
