# E-commerce Frontend

A modern e-commerce platform built with Next.js, featuring a customer-facing storefront and an admin dashboard.

Note: This project was created for learning purposes — to explore modern frontend technologies and best practices for building scalable web applications.

## Features

### Client (Customer Store)
- Browse products with filtering and search
- Product detail pages with image galleries
- Shopping cart with persistent state (Zustand)
- Checkout process with shipping and payment forms
- Responsive design with Tailwind CSS
- Dark/light theme support

### Admin Dashboard
- Product management (CRUD operations)
- Order tracking and management
- User management
- Analytics dashboard with charts
- Data tables with sorting and filtering
- Modern sidebar navigation
- Theme switching

## Tech Stack

### Frontend (Both Client & Admin)
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **Lucide React** - Icons

### Client Specific
- **Zustand** - State management for cart
- **React Toastify** - Notifications

### Admin Specific
- **Radix UI** - Component primitives
- **Recharts** - Data visualization
- **Tanstack Table** - Data tables
- **Next Themes** - Theme management
- **Shadcn/ui** - UI component library

## Project Structure

```
ecommerce-frontend/
├── client/                 # Customer-facing storefront
│   ├── src/
│   │   ├── app/           # Next.js App Router pages
│   │   ├── components/    # Reusable components
│   │   ├── store/         # Zustand state management
│   │   └── types.ts       # TypeScript type definitions
│   └── public/            # Static assets
│
├── admin/                 # Admin dashboard
│   ├── src/
│   │   ├── app/          # Next.js App Router pages
│   │   ├── components/   # UI components
│   │   │   ├── ui/       # Shadcn/ui components
│   │   │   └── layout/   # Layout components
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utility functions
│   └── public/           # Static assets
│
└── README.md             # This file
```
**Access the applications**
   - Client Store: http://localhost:3000
   - Admin Dashboard: http://localhost:3001

## Future Enhancements

- [ ] Backend API integration
- [ ] Authentication and authorization
- [ ] Payment gateway integration
- [ ] Image upload functionality
- [ ] Email notifications
- [ ] Advanced filtering and search
- [ ] Product reviews and ratings
- [ ] Inventory management
- [ ] Multi-language support

## Author

**Márton Ruzsik**
- GitHub: [@RuzsikMarton](https://github.com/RuzsikMarton)

---