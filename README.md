# Store Rating Platform

A full-stack web application that allows users to view and rate stores. Built with role-based access control for System Administrators, Store Owners, Admins, and Normal Users.

## Tech Stack

* **Frontend**: React, TypeScript, ShadCN UI, React Router, React Query
* **Backend**: Express, TypeScript, Prisma, MySQL
* **Authentication**: JWT with secure cookie storage
* **ORM**: Prisma with MySQL
* **Validation**: express-validator, Zod (frontend)

## Features

* User authentication with role management
* Role-based access control on routes and UI
* Create, update, delete stores and ratings
* View users and stores with sorting, filtering, and searching
* Dashboard for System Administrator with store/user/rating stats
* Generic, reusable frontend components (e.g., table, form)

## Roles and Permissions

* **System Administrator**: Manage all users and stores, view system stats
* **Admin**: Manage users (except delete)
* **Store Owner**: View and manage their own store(s) and ratings
* **User**: View stores and rate them once

## Notes

* Some values are currently hardcoded for simplicity due to time constraints
* Proper validation and error handling is implemented throughout the backend
* Sorting and filtering are implemented client-side for tables

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/vikramsamak/store-rating-platform
cd store-rating-platform
```

---

### 2. Backend Setup

```bash
cd server
npm install
```

#### Create a `.env` file in the `server` directory

```env
PORT=3000

# Replace with your actual database connection string
DATABASE_URL="mysql://<user>:<password>@localhost:3306/<database_name>"

# Replace with a secure random secret key
JWT_SECRET_KEY=your_jwt_secret_key_here
```

#### Run migrations and start the server

```bash
# For development
npm run dev

# For production build
npm run prestart
npm start
```

---

### 3. Frontend Setup

```bash
cd frontend
npm install
```

#### Create a `.env` file in the `frontend` directory

```env
# Replace with your backend API base URL
VITE_API_BASE_URL=http://localhost:3000/api
```

#### Start the frontend

```bash
npm run dev
```
