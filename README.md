# pos-aplication

MONGO_URL= mongodb+srv://meryemkurt824:4UaOm5ho1ub5hqYl@cluster0.psdq32c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
SİFE=4UaOm5ho1ub5hqYl

POS Application
Overview
- The POS Application is a simple and efficient Point of Sale (POS) system.
- Designed to help businesses manage:
  - Sales
  - Products
  - Invoices
- Key functionalities:
  - Track products
  - Add sales to the cart
  - Manage customer information
  - Generate invoices
- Built using modern technologies like React and Node.js.
- Ideal for small to medium-sized businesses.

- Features
  - Product Management: Add, update, and delete products in your inventory.
  - Invoice Generation: Automatically create and manage invoices based on sales data.
  - Sales Tracking: Track and manage customer sales with real-time updates.
  - Cart Management: Add or remove items from the cart, adjust quantities, and calculate totals.
  - Customer Information: Store and manage customer details for a personalized experience.
  - Responsive Design: Works on both desktop and mobile devices.
- Tech Stack
  - Frontend: 
     - React
     - Ant Design for UI components
     - React Router for navigation
 - Backend:
    - Node.js
    - Express.js for RESTful API
  - Database:
     - MongoDB (or MySQL, depending on your configuration) for data storage
 - Styling: Tailwind CSS for responsive design
 - State Management: Redux Toolkit for managing application state 
 - Installation and Setup
 - Prerequisites 
   - Node.js installed on your machine
   - MongoDB or MySQL server setup

bash
Kodu kopyala
git clone https://https://github.com/meryemgkrt/pos-aplication
cd pos-application
Install backend dependencies:

bash
Kodu kopyala
cd backend
npm install
Set up environment variables:

Create a .env file in the backend folder and add the following:
makefile
Kodu kopyala
PORT=5000
MONGODB_URI=mongodb://localhost:27017/pos-db
JWT_SECRET=your-secret-key
Start the backend server:

bash
Kodu kopyala
npm start
Frontend Setup
Navigate to the frontend folder:

bash
Kodu kopyala
cd frontend
Install frontend dependencies:

bash
Kodu kopyala
npm install
Start the frontend server:

bash
Kodu kopyala
npm start
The app will be running on http://localhost:5000.

API Endpoints
GET /api/products/get-all: Retrieve all products.
POST /api/bills/add-bill: Add a new invoice.
GET /api/bills/get-all: Retrieve all invoices.
Screenshots
Dashboard

Cart and Invoice Management

License
This project is licensed under the MIT License.

- - Gif add
![](./client/src/img/pos-aplication.gif)