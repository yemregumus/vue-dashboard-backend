# Vue Dashboard Backend

This is the backend server for the Vue Dashboard application. It is built using Node.js, Express, and MongoDB. The server handles user authentication and provides mock data for the dashboard.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Dependencies](#dependencies)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/vue-dashboard-backend.git
   cd vue-dashboard-backend
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

## Usage

1. Start the server:

   ```sh
   npm start
   ```

2. The server will be running on `http://localhost:5000`.

## API Endpoints

### Authentication

- **Register a new user**

  ```http
  POST /api/auth/register
  ```

  - Request body:
    ```json
    {
      "username": "exampleuser",
      "email": "user@example.com",
      "password": "password123"
    }
    ```
  - Response:
    ```json
    {
      "message": "User registered successfully"
    }
    ```

- **Login a user**
  ```http
  POST /api/auth/login
  ```
  - Request body:
    ```json
    {
      "email": "user@example.com",
      "password": "password123"
    }
    ```
  - Response:
    ```json
    {
      "message": "Login successful",
      "token": "jwt_token"
    }
    ```

### Data

- **Fetch mock data**
  ```http
  GET /api/data
  ```
  - Response:
    ```json
    [
      {
        "id": 1,
        "date_recorded": "2023-03-06T10:00:00",
        "active_customers": 5000,
        "countries_served": 30,
        "nodes_online": 1200,
        "transactions": 15000,
        "blocks_added": 350
      },
      ...
    ]
    ```

## Environment Variables

- [PORT](http://_vscodecontentref_/0): The port on which the server will run (default: 5000).
- [MONGO_URI](http://_vscodecontentref_/1): The MongoDB connection string.
- [JWT_SECRET](http://_vscodecontentref_/2): The secret key for signing JWT tokens.

## Dependencies

- [bcryptjs](https://www.npmjs.com/package/bcryptjs): Library for hashing passwords.
- [cors](https://www.npmjs.com/package/cors): Middleware for enabling Cross-Origin Resource Sharing.
- [dotenv](https://www.npmjs.com/package/dotenv): Module for loading environment variables from a [.env](http://_vscodecontentref_/3) file.
- [express](https://www.npmjs.com/package/express): Web framework for Node.js.
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): Library for generating and verifying JSON Web Tokens.
- [mongoose](https://www.npmjs.com/package/mongoose): MongoDB object modeling tool.

## License

This project is licensed under the ISC License.
