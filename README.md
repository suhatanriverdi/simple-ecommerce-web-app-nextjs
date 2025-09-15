# Modern E-commerce Web Application

A full-featured e-commerce web application built with Next.js 15, React, and Tailwind CSS. This project demonstrates modern web development practices, including server and client components, authentication, state management, and responsive design.

## ⚡ [Live Preview Link](https://simple-ecommerce-web-app-nextjs.vercel.app/) ⚡


<img width="1651" height="1160" alt="image" src="https://github.com/user-attachments/assets/9f693a13-b8e8-42f8-aa73-9a0bc4defe73" />

<img width="1646" height="1160" alt="image" src="https://github.com/user-attachments/assets/ba62e309-52b7-4e1d-8024-fc02ca1b7425" />

<img width="1650" height="1160" alt="image" src="https://github.com/user-attachments/assets/40a705fd-9ae0-4c3f-b4ca-dab7ba0abc50" />

<img width="1650" height="1159" alt="image" src="https://github.com/user-attachments/assets/4dd6d328-3b10-432b-b203-5cafddc865ec" />

<img width="1649" height="1161" alt="image" src="https://github.com/user-attachments/assets/5a5e4f06-09ac-491b-b780-1c0d0c1cd881" />

<img width="1647" height="1157" alt="image" src="https://github.com/user-attachments/assets/083cc9f6-3540-460b-a44f-a5ce40c6c695" />


## Features

- 🛍️ Product browsing with search and filtering
- 🔒 User authentication with cookie-based sessions
- 🛒 Shopping cart with localStorage persistence
- ❤️ Wishlist functionality for authenticated users
- 🏷️ Category-based product navigation
- 📱 Fully responsive design with dark/light mode
- 🔍 Real-time search and filtering
- 🛍️ Order management and history
- ⚡ Server and client components optimization

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **State Management:** React Context API
- **Database:** JSON Server
- **Authentication:** Cookie-based with Middleware
- **Icons:** React Icons
- **HTTP Client:** Native Fetch API
- **Form Handling:** Native React Forms

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/simple-ecommerce-web-app-nextjs.git
cd simple-ecommerce-web-app-nextjs
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server and JSON Server:

```bash
npm run dev
# or
yarn dev
```

The application will start on `http://localhost:3000` and the JSON Server will run on `http://localhost:3001`.

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── api/             # API routes
│   ├── (routes)/        # Application routes
│   └── layout.js        # Root layout
├── components/          # React components
│   ├── auth/           # Authentication components
│   ├── cart/           # Shopping cart components
│   ├── product/        # Product-related components
│   ├── ui/             # Shared UI components
│   └── wishlist/       # Wishlist components
├── context/            # React Context providers
├── lib/               # Utilities and constants
├── public/            # Static assets
└── services/          # API services
```

## Features in Detail

### Authentication

- Cookie-based session management
- Protected routes with Next.js middleware
- User profile management

### Shopping Cart

- Add/remove products
- Quantity management
- Price calculations
- localStorage persistence for guest users
- Checkout process

### Product Management

- Product listing with filtering
- Search functionality
- Category navigation
- Detailed product views
- Image optimization

### Wishlist

- Add/remove products
- Persistent storage
- User-specific lists
- Quick add to cart

### UI/UX

- Responsive design for all devices
- Dark/Light theme support
- Loading states and animations
- Error handling
- Toast notifications
- Intuitive navigation

## API Routes

- `/api/auth/*` - Authentication endpoints
- `/api/products` - Product management
- `/api/orders` - Order processing
- `/api/wishlist` - Wishlist management

## Development Decisions

### State Management

Chose React Context API over Redux for simplicity and sufficient functionality for the app's needs.

### Data Fetching

Used a combination of server-side and client-side fetching based on the data requirements and user interaction patterns.

### Styling

Implemented Tailwind CSS for rapid development and consistent design system.

### Authentication

Implemented cookie-based authentication with middleware protection for simplicity and security.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Design inspired by modern e-commerce trends
- Product data from [Fake Store API](https://fakestoreapi.com/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)

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
- npm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/suhatanriverdi/simple-ecommerce-web-app-nexjs.git
   cd simple-ecommerce-web-app-nexjs
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
simple-ecommerce-web-app-nexjs/
├── app/                    # Next.js 15 App Router
│   ├── (pages)/           # Route groups
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
│   ├── ui/               # Base UI elements
│   ├── layout/           # Header, Footer, Navbar
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
