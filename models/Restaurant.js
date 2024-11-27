const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const Restaurant = sequelize.define('Restaurant', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lat: {
    type: DataTypes.FLOAT,
  },
  lng: {
    type: DataTypes.FLOAT,
  },
  description: {
    type: DataTypes.STRING,
  },
  phone: {
    type: DataTypes.STRING,
  },
  website: {
    type: DataTypes.STRING,
  },
  instagram: {
    type: DataTypes.STRING,
  }
});

module.exports = Restaurant;
