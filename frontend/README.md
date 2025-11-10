# Workout Tracker - Frontend

A modern React + Vite application for managing and tracking personal workout routines. Built with Redux for state management and React Router for navigation.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Running the Application](#running-the-application)
- [Building for Production](#building-for-production)
- [Available Scripts](#available-scripts)
- [Troubleshooting](#troubleshooting)
- [Authentication Flow](#authentication-flow)
- [Redux State Structure](#redux-state-structure)
- [API Integration](#api-integration)
- [Dependencies Overview](#dependencies-overview)
- [License](#license)
- [Contributing](#contributing)

## 📝 Overview

This is the frontend portion of the Workout Tracker application. It provides a user-friendly interface for:
- User authentication (signup, login)
- Creating and managing workout routines
- Adding detailed exercises to workouts
- Viewing and editing existing workouts
- Filtering and searching workouts

## ✨ Features

- 🎨 **Modern UI** - Clean, responsive design with CSS modules
- 🔄 **Redux State Management** - Centralized state management for efficient data flow
- 🧭 **React Router** - Client-side routing with protected routes
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- 🎯 **Form Validation** - Formik and Yup for robust form handling and validation
- 📡 **API Integration** - Axios HTTP client with interceptors for API communication
- 🔐 **Authentication** - JWT token management and secure user sessions
- 📊 **Toast Notifications** - React Toastify for user feedback
- 🎨 **Icon Library** - React Icons for consistent UI components

## 🛠️ Tech Stack

- **Framework:** Reactjs
- **Build Tool:** Vite
- **State Management:** Redux Toolkit
- **Routing:** React Router DOM
- **Form Handling:** Formik, Yup
- **HTTP Client:** Axios
- **UI Components:** React Icons
- **Notifications:** React Toastify
- **Styling:** CSS Modules
- **Development Server:** Vite Dev Server with HMR

## 📂 Project Structure

```
frontend/
└── workout-tracker/
    ├── package.json                  # Project dependencies and scripts
    ├── vite.config.js                # Vite build configuration
    ├── eslint.config.js              # ESLint configuration
    ├── index.html                    # HTML entry point
    ├── src/
    │   ├── main.jsx                  # React app entry point
    │   ├── App.jsx                   # Main App component
    │   ├── App.css                   # App styling
    │   ├── index.css                 # Global styles
    │   ├── redux/
    │   │   ├── Store.js              # Redux store configuration
    │   │   └── Slices.js             # Redux slices for state management
    │   ├── pages/                    # Page components
    │   │   ├── Home.jsx              # Home/Dashboard page
    │   │   ├── Login.jsx             # User login page
    │   │   ├── Register.jsx          # User registration page
    │   │   ├── AddWorkout.jsx        # Add new workout form
    │   │   ├── EditWorkout.jsx       # Edit existing workout
    │   │   ├── DetailedWorkout.jsx   # Detailed workout view
    │   │   └── About.jsx             # About page
    │   ├── components/               # Reusable components
    │   │   ├── Navbar.jsx            # Navigation bar
    │   │   └── Workout.jsx           # Workout card component
    │   ├── layouts/                  # Layout components
    │   │   └── MainLayout.jsx        # Main layout wrapper
    │   └── assets/
    │       ├── css/                  # Stylesheets
    │       │   ├── About.module.css
    │       │   ├── AddWorkout.module.css
    │       │   ├── Home.module.css
    │       │   ├── Navbar.module.css
    │       │   ├── Register.module.css
    │       │   ├── ViewWorkout.module.css
    │       │   ├── Workout.module.css
    │       │   └── utils/
    │       │       ├── base.css      # Base styles
    │       │       ├── form.css      # Form styles
    │       │       └── variables.css # CSS variables
    │       ├── images/               # Image assets
    │       └── js/
    │           └── axios.js          # Axios configuration and interceptors
    └── public/                       # Static files served directly

```

## 🚀 Installation & Setup

### Prerequisites

- **Node.js 16+** and **npm** or **yarn**
- **Backend API** running (see main README)
- **Git** for version control

### Installation Steps

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure API endpoint**
   
   Edit `src/assets/js/axios.js` to set your backend URL:
   ```javascript
   const API_URL = 'http://localhost:8000'; // Change this to your backend URL
   ```

## ▶️ Running the Application

### Development Server

Start the development server with hot module replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (Vite default) or the port shown in your terminal.

### Development with Backend

Make sure your Django backend is running on `http://localhost:8000`:

```bash
# Terminal 1 - Backend
cd backend
python manage.py runserver

# Terminal 2 - Frontend
cd frontend/workout-tracker
npm run dev
```

## 🏗️ Building for Production

### Create Optimized Production Build

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory with:
- Code minification
- Tree shaking
- Asset optimization
- Source maps

### Preview Production Build Locally

```bash
npm run preview
```

This serves the production build locally to verify everything works correctly.

## 📜 Available Scripts

### `npm run dev`
Starts the Vite development server with hot module replacement (HMR).

### `npm run build`
Creates an optimized production build in the `dist/` directory.

### `npm run lint`
Runs ESLint to check code quality and style. Helps catch potential issues early.

### `npm run preview`
Serves the production build locally for testing before deployment.

## 🔐 Authentication Flow

The application uses JWT token-based authentication:

1. **User Registration** - Creates new account and receives tokens
2. **User Login** - Authenticates user and stores JWT token
3. **Token Storage** - JWT stored in Redux state
4. **Authenticated Requests** - Axios interceptor adds token to headers
5. **Token Refresh** - Automatic token refresh before expiration
6. **Logout** - Clears token and Redux state

### Axios Configuration

The `src/assets/js/axios.js` file handles:
- Base URL configuration
- Request/response interceptors
- JWT token injection
- Error handling
- Token refresh logic

## 🔧 Troubleshooting

### Port Already in Use

If port 3000 is already in use:

```bash
npm run dev -- --port 3001
```

### Node Modules Issues

Clear and reinstall dependencies:

```bash
rm -rf node_modules package-lock.json
npm install
```

On Windows:
```bash
rmdir /s node_modules
del package-lock.json
npm install
```

### API Connection Issues

1. **Verify backend is running:**
   ```bash
   curl http://localhost:8000/api/
   ```

2. **Check API URL in axios.js:**
   ```javascript
   const API_URL = 'http://localhost:8000';
   ```

3. **Check browser console for CORS errors** - May need to enable CORS on backend

4. **Verify backend is accepting requests:**
   ```bash
   # Backend terminal
   python manage.py runserver
   ```

### Build Issues

1. **Clear cache and rebuild:**
   ```bash
   npm run build -- --force
   ```

2. **Check Node version:**
   ```bash
   node --version  # Should be 16+
   npm --version   # Should be 8+
   ```

### ESLint Warnings

Fix ESLint issues automatically:

```bash
npm run lint -- --fix
```

## 📚 Redux State Structure

The Redux store in `redux/Store.js` manages:

- **User State** - Authentication status, user profile, tokens
- **Workout State** - List of workouts, filters, search terms
- **UI State** - Loading states, error messages, notifications

See `redux/Slices.js` for detailed slice definitions.

## 🌐 API Integration

The application communicates with the Django REST API:

### Authentication Endpoints
- `POST /auth/signup/` - User registration
- `POST /auth/api/token/` - User login
- `POST /auth/api/token/refresh/` - Refresh JWT token

### Workout Endpoints
- `GET /workouts/` - List all workouts
- `POST /workouts/create/` - Create new workout
- `PUT /workouts/edit/{id}/` - Update workout
- `DELETE /workouts/delete/{id}/` - Delete workout
- `GET /workouts/{id}/` - Get workout details

## 📦 Dependencies Overview

| Package | Version | Purpose |
|---------|---------|---------|
| react | 19.1.1 | Core React library |
| vite | 7.1.7 | Build tool and dev server |
| redux-toolkit | 2.9.2 | State management |
| react-router-dom | 7.9.4 | Client-side routing |
| axios | 1.12.2 | HTTP client |
| formik | 2.4.6 | Form state management |
| yup | 1.7.1 | Form validation |
| react-toastify | 11.0.5 | Toast notifications |
| react-icons | 5.5.0 | Icon library |

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Backend Documentation:** See [../backend/README.md](../backend/README.md)  
**Main Project Documentation:** See [../README.md](../README.md)
