# ShoppyGlobe Backend API

This project is the backend implementation of the **ShoppyGlobe E-commerce application** built using **Node.js, Express.js, and MongoDB**.

## Features

- User Registration and Login with JWT Authentication
- Product API
- Shopping Cart API
- MongoDB Database Integration
- API Error Handling and Validation
- Tested using ThunderClient

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- ThunderClient

### Authentication

POST `/register`  
Register new user

POST `/login`  
Login user and return JWT token

### Products

GET `/products`  
Get all products

GET `/products/:id`  
Get single product by ID

### Cart

POST `/cart`  
Add product to cart (Protected)

PUT `/cart/:id`  
Update cart quantity (Protected)

DELETE `/cart/:id`  
Remove product from cart (Protected)

## Testing

All APIs were tested using **ThunderClient** in VS Code.

## Database Collections

- Users
- Products
- Cart

## API Testing Screenshots

Screenshots of API testing using ThunderClient and MongoDB Compass are included in the **Test-screenshots** folder.
