# Workout Tracker 🏋️

A full-stack web application for tracking and managing your personal workout routines. Built with Django REST Framework (backend) and React + Vite (frontend).

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Project Management](#project-management)
- [Contributing](#contributing)
- [License](#license)

## 📝 Overview

Workout Tracker is a comprehensive fitness application that allows users to:
- Create and manage personalized workout routines
- Track exercises with detailed information (sets, reps, weights)
- Monitor workout progress and status
- Organize workouts by date and status
- Secure user authentication with JWT tokens

## ✨ Features

### Backend Features
- 🔐 **JWT Authentication** - Secure user registration and login
- 📝 **Workout CRUD Operations** - Create, read, update, and delete workouts
- 🏋️ **Exercise Management** - Add and manage exercises within workouts
- 🔍 **Advanced Filtering & Search** - Filter by status, name, date, and more
- 👤 **User Isolation** - Each user can only access their own workouts
- ✅ **Comprehensive Testing** - Full test coverage for API endpoints
- 📊 **Data Persistence** - SQLite database with Django ORM

### Frontend Features
- 🎨 **Modern UI** - Responsive design with CSS modules
- 🔄 **Redux State Management** - Centralized state for efficient data flow
- 🧭 **React Router** - Client-side routing for seamless navigation

## 🛠️ Tech Stack

### Backend
- **Framework:** Django
- **API:** Django REST Framework
- **Authentication:** JWT (djangorestframework_simplejwt)
- **Database:** SQLite3
- **Language:** Python 3.x

### Frontend
- **Framework:** Reactjs
- **Build Tool:** Vite
- **State Management:** Redux Toolkit
- **Routing:** React Router DOM
- **Form Handling:** Formik, Yup
- **HTTP Client:** Axios
- **Icons:** React Icons
- **Styling:** CSS Modules
- **Language:** JavaScript (ES6+)

## 📂 Project Structure

```
workout_tracker/
├── backend/
│   ├── manage.py                 # Django management script
│   ├── requirements.txt           # Python dependencies
│   ├── db.sqlite3                 # SQLite database
│   ├── workout_tracker/           # Main project settings
│   │   ├── settings.py           # Django settings
│   │   ├── urls.py               # Project URL configuration
│   │   ├── asgi.py               # ASGI configuration
│   │   └── wsgi.py               # WSGI configuration
│   ├── user_auth/                # Authentication app
│   │   ├── models.py             # User models
│   │   ├── api/
│   │   │   ├── views.py          # Authentication views
│   │   │   ├── serializers.py    # User serializers
│   │   │   └── urls.py           # Auth endpoints
│   │   └── migrations/           # Database migrations
│   └── workout/                  # Workout management app
│       ├── models.py             # Workout and Exercise models
│       ├── api/
│       │   ├── views.py          # Workout/Exercise views
│       │   ├── serializers.py    # Workout serializers
│       │   └── urls.py           # Workout endpoints
│       └── migrations/           # Database migrations
│
└── frontend/
    └── workout-tracker/
        ├── package.json          # Node dependencies
        ├── vite.config.js        # Vite configuration
        ├── eslint.config.js      # ESLint configuration
        ├── index.html            # HTML entry point
        ├── src/
        │   ├── main.jsx          # React entry point
        │   ├── App.jsx           # Main App component
        │   ├── redux/
        │   │   ├── Store.js      # Redux store configuration
        │   │   └── Slices.js     # Redux slices
        │   ├── pages/            # Page components
        │   │   ├── Home.jsx
        │   │   ├── Login.jsx
        │   │   ├── Register.jsx
        │   │   ├── AddWorkout.jsx
        │   │   ├── EditWorkout.jsx
        │   │   ├── DetailedWorkout.jsx
        │   │   └── About.jsx
        │   ├── components/       # Reusable components
        │   │   ├── Navbar.jsx
        │   │   └── Workout.jsx
        │   ├── layouts/          # Layout components
        │   │   └── MainLayout.jsx
        │   ├── assets/
        │   │   ├── css/          # Stylesheets
        │   │   ├── images/       # Image assets
        │   │   └── js/
        │   │       └── axios.js  # Axios configuration
        │   └── App.css
        └── public/               # Static files
```

## 🚀 Installation & Setup

### Prerequisites
- **Python 3.8+** (for backend)
- **Node.js 16+** and **npm** (for frontend)
- **Git** (for version control)

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Create a virtual environment** (optional but recommended)
   ```bash
   python -m venv venv
   # On Windows
   venv\Scripts\activate
   # On macOS/Linux
   source venv/bin/activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run database migrations**
   ```bash
   python manage.py migrate
   ```

5. **Create a superuser** (optional, for admin access)
   ```bash
   python manage.py createsuperuser
   ```

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend/workout-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure API endpoint** (if needed)
   - Edit `src/assets/js/axios.js` to set your backend URL

## ▶️ Running the Application

### Running the Backend

```bash
cd backend
python manage.py runserver
```

The API will be available at `http://localhost:8000`

### Running the Frontend

```bash
cd frontend/workout-tracker
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use)

### Building for Production

**Frontend:**
```bash
npm run build
```

This creates an optimized build in the `dist/` directory.

## 📚 API Documentation

### Authentication Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/signup/` | Register new user |
| POST | `/auth/api/token/` | Login and get JWT tokens |
| POST | `/auth/api/token/refresh/` | Refresh access token |

### Workout Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/workouts/` | List all user workouts (with filtering, searching, pagination) |
| POST | `/workouts/create/` | Create new workout |
| PUT | `/workouts/edit/{id}/` | Update workout |
| DELETE | `/workouts/delete/{id}/` | Delete workout |
| GET | `/workouts/{id}/` | Get detailed workout view |

### Query Parameters

**Workouts endpoint supports:**
- `search` - Search by workout name
- `status` - Filter by workout status
- `ordering` - Sort results (e.g., `-date_created`)
- `page` - Pagination

## 🤝 Project Management

This project uses Git for version control and is hosted on GitHub. Key branches:
- `main` - Production-ready code
- Feature branches - For new features and enhancements

### Development Workflow

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes and commit: `git commit -am 'Add your feature'`
3. Push to the branch: `git push origin feature/your-feature`
4. Create a Pull Request

## 🧪 Testing

### Running Backend Tests

```bash
cd backend
python manage.py test
```

## 📝 License

This project is licensed under the MIT License. See the `backend/LICENSE` file for details.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Created by:** Fateme Abdellahi  
**Repository:** https://github.com/fateme-abdellahi/workout_tracker

For more information about the backend API, see `backend/README.md`.
