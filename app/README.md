# E-Commerce Platform

A modern, full-featured e-commerce web application built with **Next.js 15**, **React**, and **Tailwind CSS**. Features include product browsing, cart management, user authentication, wishlist functionality, and order tracking.

## ✨ Features

- 🛍️ **Product Management** - Browse 20+ products with detailed views
- 🛒 **Shopping Cart** - Add/remove items, persist cart in localStorage
- ❤️ **Wishlist** - Save favorite products for later
- 🔐 **Authentication** - Cookie-based login system with route protection
- 📦 **Order Management** - Complete checkout flow and order history
- 📱 **Responsive Design** - Mobile-first design with Tailwind CSS
- ⚡ **Server Components** - Optimized performance with Next.js 15
- 🔄 **State Management** - Global state with React Context API

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/simple-ecommerce-web-app-nextjs.git
   cd simple-ecommerce-web-app-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development servers**
   ```bash
   npm run dev
   ```
   This will start both Next.js (port 3000) and JSON Server (port 3001).

4. **Open your browser**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
simple-ecommerce-web-app-nextjs/
├── app/                    # Next.js 15 App Router
│   ├── (pages)/           # Route groups
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
│   ├── ui/               # Base UI elements
│   ├── layout/           # Header, Footer, Navigation
│   ├── product/          # Product-related components
│   └── cart/             # Cart-related components
├── context/              # React Context providers
├── lib/                  # Utilities and API functions
├── data/                 # JSON Server database
└── middleware.js         # Route protection
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Frontend**: React, Tailwind CSS
- **State Management**: React Context API
- **HTTP Client**: Axios
- **Mock API**: JSON Server
- **Authentication**: Cookie-based sessions
- **Deployment**: Vercel

## 🔐 Authentication

**Test Credentials:**
- Email: `test@example.com`
- Password: `123456`

## 📊 API Endpoints (JSON Server)

- `GET /products` - All products
- `GET /products/:id` - Single product
- `GET /users` - User authentication
- `GET /orders?userId=:id` - User orders
- `POST /orders` - Create new order

## 🌐 Live Demo

Visit the live application: [Your Vercel URL]

## 📝 Available Scripts

```bash
npm run dev          # Start development servers
npm run build        # Build for production
npm run start        # Start production server
npm run json-server  # Start only JSON server
```

## 🎯 Key Implementation Details

- **Route Protection**: Middleware-based authentication for `/profile` and `/wishlist`
- **Cart Persistence**: localStorage integration for non-authenticated users
- **Server Components**: Data fetching with loading states and error boundaries
- **Context Architecture**: Separate contexts for Cart, Auth, and Wishlist management

## 📱 Responsive Design

Fully responsive design optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)

---