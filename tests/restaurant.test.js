const request = require('supertest');
const app = require('../app');
const Restaurant = require('../models/Restaurant');

describe('Restaurant API', () => {

  afterAll(done => {
    app.close();
    done();
  });

  let restaurant;

  beforeEach(async () => {
    restaurant = await Restaurant.create({
      name: 'Test Restaurant',
      address: '123 Test St',
      lat: 41.3879,
      lng: 2.16992,
      description: 'Test description',
      phone: '123456789',
      website: 'https://test.com',
      instagram: '@test',
    });
  });

  it('should fetch all restaurants', async () => {
    const response = await request(app).get('/api/restaurants');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('should fetch a single restaurant by ID', async () => {
    const response = await request(app).get(`/api/restaurants/${restaurant.id}`);
    expect(response.status).toBe(200);
    expect(response.body.name).toBe(restaurant.name);
    expect(response.body.address).toBe(restaurant.address);
  });

  it('should return 404 for a non-existent restaurant', async () => {
    const response = await request(app).get('/api/restaurants/9999');
    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Restaurant not found');
  });

  it('should create a new restaurant', async () => {
    const newRestaurant = {
      name: 'Test Restaurant',
      address: '123 Test St',
      cuisine: 'Halal',
      contact: '1234567890'
    };

    const response = await request(app)
      .post('/api/restaurants')
      .send(newRestaurant);

    expect(response.status).toBe(201);
    expect(response.body.name).toBe(newRestaurant.name);
    expect(response.body.address).toBe(newRestaurant.address);
  });

  it('should return 400 for missing fields when creating a restaurant', async () => {
    const invalidRestaurant = { name: 'Incomplete Restaurant' };

    const response = await request(app)
      .post('/api/restaurants')
      .send(invalidRestaurant);

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Name and address are required');
  });
});
