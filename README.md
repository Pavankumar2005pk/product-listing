Product Store
A full-stack web application for managing products with CRUD (Create, Read, Update, Delete) functionality. The backend is built with Node.js, Express, and MongoDB, while the frontend uses React, Chakra UI, and Zustand for state management. The app allows users to view, add, edit, and delete products, with a responsive UI supporting light/dark mode.
Table of Contents

Features
Tech Stack
Project Structure
Setup Instructions
Prerequisites
Installation
Environment Variables
Running the Application


Usage
API Endpoints
Contributing
License

Features

View a list of products in a responsive grid
Create new products with name, price, and image URL
Update existing products via a modal
Delete products with success/error notifications
Light/dark mode toggle for better user experience
Optimistic UI updates for fast interactions
Fake data seeding for testing with Faker.js
Mobile-responsive design

Tech Stack

Backend:
Node.js
Express.js
MongoDB (via Mongoose)
Faker.js (for dummy data)
Dotenv (for environment variables)


Frontend:
React 18+
Chakra UI (with light/dark mode)
React Router v6
Zustand (state management)
React Icons


Database: MongoDB Atlas (cloud-hosted)

Project Structure
product-store/
├── backend/
│   ├── controllers/
│   │   └── product.controller.js
│   ├── models/
│   │   └── product.model.js
│   ├── routes/
│   │   └── product.route.js
│   ├── .env
│   ├── data.js
│   ├── db.js
│   ├── package.json
│   └── server.js (assumed, not provided)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── ProductCard.jsx
│   ├── pages/
│   │   ├── CreatePage.jsx
│   │   └── HomePage.jsx
│   ├── store/
│   │   └── product.js
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md

Setup Instructions
Prerequisites

Node.js (v16 or higher)
MongoDB Atlas account (or local MongoDB instance)
npm (comes with Node.js)

Installation

Clone the repository:
git clone https://github.com/your-username/product-store.git
cd product-store


Backend Setup:

Navigate to the backend directory:cd backend


Install dependencies:npm install




Frontend Setup:

Navigate to the frontend directory (assuming src is in the root or a separate frontend folder):cd ../


Install dependencies:npm install





Environment Variables
Create a .env file in the backend directory with the following:
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.g8nubi2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
PORT=5000


Replace <username>:<password> with your MongoDB Atlas credentials.
Security Note: Never commit .env to version control. Add .env to .gitignore.

Running the Application

Start the Backend:
cd backend
npm start


The server runs on http://localhost:5000.


Start the Frontend:

In a new terminal, from the root:npm start


The app runs on http://localhost:3000 (assuming Vite/Create React App defaults).


Seed Dummy Data (optional):

To populate the database with 100 fake products:cd backend
node data.js


Warning: This clears existing products. Use with caution.



Usage

Home Page (/): View all products in a grid. If empty, a link to create a product is shown.
Create Page (/create): Add a new product with name, price, and image URL.
Edit Product: Click the edit icon on a product card to open a modal and update details.
Delete Product: Click the delete icon to remove a product (no confirmation yet—use carefully).
Theme Toggle: Use the sun/moon icon in the navbar to switch between light/dark mode.

API Endpoints



Method
Endpoint
Description



GET
/api/products
Fetch all products


POST
/api/products
Create a new product


PUT
/api/products/:id
Update a product by ID


DELETE
/api/products/:id
Delete a product by ID


Example Request (Create Product):
curl -X POST http://localhost:5000/api/products \
-H "Content-Type: application/json" \
-d '{"name":"Sample Product","price":29.99,"image":"https://example.com/image.jpg"}'

Contributing

Fork the repository.
Create a feature branch (git checkout -b feature/your-feature).
Commit changes (git commit -m "Add your feature").
Push to the branch (git push origin feature/your-feature).
Open a pull request.

Please follow coding standards (e.g., ESLint, Prettier) and add tests for new features.
License
This project is licensed under the MIT License. See the LICENSE file for details.