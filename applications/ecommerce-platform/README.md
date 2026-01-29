# E-Commerce Platform

A production-grade full-stack e-commerce application with real-time inventory management, secure checkout, and admin dashboard.

## 🎯 Overview

Complete e-commerce solution featuring:
- React frontend with TypeScript and Tailwind CSS
- Express.js backend with robust API
- PostgreSQL database with proper schema
- Stripe payment integration
- Real-time inventory updates
- JWT authentication and role-based access
- Admin dashboard for management
- Responsive design for mobile and desktop

## 📋 Features

### Customer Features
- **User Authentication**: Secure signup/login with JWT
- **Product Browsing**: Search, filter, and sort products
- **Shopping Cart**: Add/remove items, update quantities
- **Checkout**: Secure payment processing with Stripe
- **Order Management**: View order history and status
- **User Profile**: Manage account and addresses

### Admin Features
- **Product Management**: Create, update, delete products
- **Inventory Management**: Real-time stock tracking
- **Order Management**: Process and track orders
- **Analytics Dashboard**: Sales metrics and insights
- **User Management**: View and manage customers

## 🛠️ Tech Stack

### Frontend
- React 18, TypeScript, Tailwind CSS, Redux

### Backend
- Node.js, Express.js, TypeScript, PostgreSQL, JWT, Stripe

## 📁 Project Structure

```
ecommerce-platform/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── types/
│   │   └── index.ts
│   ├── tsconfig.json
│   └── package.json
├── frontend/
│   ├── src/
│   ├── vite.config.ts
│   └── package.json
└── docker-compose.yml
```

## 🚀 Getting Started

### Backend Setup
```bash
cd backend
npm install
cp .env.example .env.local
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## 🧪 Testing
```bash
npm run test          # Run all tests
npm run test:watch   # Watch mode
npm run test:coverage # Coverage report
```

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - Create account
- `POST /api/auth/login` - Login
- `POST /api/auth/refresh` - Refresh token

### Products
- `GET /api/products` - List products
- `GET /api/products/:id` - Get product
- `POST /api/products` - Create (admin)
- `PUT /api/products/:id` - Update (admin)
- `DELETE /api/products/:id` - Delete (admin)

### Cart
- `GET /api/cart` - Get cart
- `POST /api/cart/items` - Add item
- `DELETE /api/cart/items/:id` - Remove item

### Orders
- `GET /api/orders` - List orders
- `POST /api/orders` - Create order
- `PUT /api/orders/:id` - Update status (admin)

## 🔒 Security
- JWT authentication
- bcryptjs password hashing
- CORS & Helmet
- Input validation with Joi
- Stripe PCI compliance

## 📈 Metrics

- **Type**: Full-stack Application
- **Difficulty**: Advanced
- **Estimated LOC**: 8,000+
- **Database**: PostgreSQL with proper schema
- **Test Coverage**: 80%+

---

Part of **Project Challenger 1: Web Development**
