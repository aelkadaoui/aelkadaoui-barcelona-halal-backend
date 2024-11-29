# Barcelona Halal - Backend

This is the backend service for the Barcelona Halal application. It provides RESTful APIs for managing and retrieving restaurant data.

---

## Tech Stack
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: SQLite (with Sequelize ORM)
- **Language**: JavaScript/TypeScript

---

## Installation

### Prerequisites
1. Install [Node.js](https://nodejs.org/) (v16+ recommended)
2. Install a SQLite client for database inspection (optional)

### Steps
1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd barcelona-halal-finder-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run database migrations (using Sequelize CLI):
   ```bash
   npx sequelize-cli db:migrate
   ```

4. Start the server:
   ```bash
   npm start
   ```
   The server will run on `http://localhost:3000` by default.

---

## API Endpoints

### **Restaurants**
| Method | Endpoint         | Description                      |
|--------|------------------|----------------------------------|
| GET    | `/restaurants`   | Fetch all restaurants           |
| GET    | `/restaurants/:id` | Fetch a restaurant by its ID    |
| POST   | `/restaurants`   | Add a new restaurant            |

---

## Notes
1. This backend is in its early stages and currently supports only basic functionality:
   - Retrieving all restaurants
   - Fetching a single restaurant by ID
   - Adding new restaurants
2. Future updates may include features for updating and deleting restaurants.

---

## Important Notice
This backend is intended for **personal use only**. Redistribution, resale, or commercialization in any form is strictly prohibited.

---

## License
This project is licensed under the MIT License.