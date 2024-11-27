const request = require('supertest');
const app = require('../index.js');

describe('Restaurant API', () => {

  it('should fetch all restaurants', async () => {
    const response = await request(app).get('/api/restaurants');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
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
