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
- [Environment Configuration](#%EF%B8%8F-environment-configuration)
- [Troubleshooting](#%F0%9F%94%A7-troubleshooting)
- [API Documentation](#api-documentation)
- [Project Management](#project-management)
- [Docker & Containerization](#docker--containerization)
- [CI/CD Pipeline](#cicd-pipeline)
- [Testing](#testing)
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
- **Containerization:** Docker
- **Language:** Python 3.12

### Frontend
- **Styling:** CSS Modules
- **Containerization:** Docker
- **Language:** JavaScript (ES6+)

### DevOps & CI/CD
- **Containerization:** Docker & Docker Compose
- **CI/CD:** GitHub Actions workflows

## 📂 Project Structure

```
workout_tracker/
├── .github/
│   └── workflows/                # GitHub Actions CI/CD workflows
│       ├── blank.yml             # Generic workflow template
│       └── django.yml            # Django testing workflow
├── backend/
│   ├── .env                      # Environment variables
│   ├── venv/                     # Python virtual environment
│   ├── Dockerfile                # Docker configuration for backend
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
├── frontend/
│   ├── Dockerfile                # Docker configuration for frontend
│   └── workout-tracker/
│       ├── package.json          # Node dependencies
│       ├── vite.config.js        # Vite configuration
│       ├── eslint.config.js      # ESLint configuration
│       ├── index.html            # HTML entry point
│       ├── src/
│       │   ├── main.jsx          # React entry point
│       │   ├── App.jsx           # Main App component
│       │   ├── redux/
│       │   │   ├── Store.js      # Redux store configuration
│       │   │   └── Slices.js     # Redux slices
│       │   ├── pages/            # Page components
│       │   │   ├── Home.jsx
│       │   │   ├── Login.jsx
│       │   │   ├── Register.jsx
│       │   │   ├── AddWorkout.jsx
│       │   │   ├── EditWorkout.jsx
│       │   │   ├── DetailedWorkout.jsx
│       │   │   └── About.jsx
│       │   ├── components/       # Reusable components
│       │   │   ├── Navbar.jsx
│       │   │   └── Workout.jsx
│       │   ├── layouts/          # Layout components
│       │   │   └── MainLayout.jsx
│       │   ├── assets/
│       │   │   ├── css/          # Stylesheets
│       │   │   ├── images/       # Image assets
│       │   │   └── js/
│       │   │       └── axios.js  # Axios configuration
│       │   └── App.css
│       └── public/               # Static files
├── docker-compose.yml            # Docker Compose configuration
├── .gitignore                    # Git ignore rules
├── .dockerignore                 # Docker build ignore rules
└── README.md                     # Project documentation
```

## 🚀 Installation & Setup

### Prerequisites
- **Python 3.12** (for backend)
- **Node.js 16+** and **npm** (for frontend)
- **Git** (for version control)
- **Docker & Docker Compose** (optional, for containerized deployment)

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Create a virtual environment** (recommended)
   ```bash
   python -m venv venv
   ```

   **Activate the virtual environment:**
   
   On Windows:
   ```bash
   venv\Scripts\activate
   ```
   
   On macOS/Linux:
   ```bash
   source venv/bin/activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure environment variables**
   
   The `.env` file is already provided with default values:
   ```properties
   DEBUG=True
   DJANGO_SECRET_KEY=your-secret-key-here
   ```
   
   For production, update these values in the `.env` file.

5. **Run database migrations**
   ```bash
   python manage.py migrate
   ```

6. **Create a superuser** (optional, for admin access)
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
   
   Edit `src/assets/js/axios.js` to set your backend URL:
   ```javascript
   const API_URL = 'http://localhost:8000'; // Change this to your backend URL
   ```

4. **Verify ESLint configuration** (optional)
   
   ```bash
   npm run dev
   ```

## ▶️ Running the Application

### Option 1: Using Docker Compose (Recommended)

**Start the application:**
```bash
docker-compose up --build
```

This will:
- Build and start the backend (Django) on `http://localhost:8000`
- Build and start the frontend (React) on `http://localhost:3000`
- Automatically run database migrations
- Watch for file changes in development mode

**Stop the application:**
```bash
docker-compose down
```

### Option 2: Running Locally (Without Docker)

#### Running the Backend

```bash
cd backend
python manage.py runserver
```

The API will be available at `http://localhost:8000`

#### Running the Frontend

```bash
cd frontend/workout-tracker
npm run dev
```

The application will be available at `http://localhost:3000`

### Building for Production

**Backend:**
```bash
cd backend
python manage.py collectstatic
# Then deploy using your preferred hosting platform
```

**Frontend:**
```bash
cd frontend
npm run build
```

This creates an optimized build in the `dist/` directory.

## ⚙️ Environment Configuration

### Backend Environment Variables

The `.env` file in the `backend/` directory contains:

```properties
DEBUG=True                              # Set to False in production
DJANGO_SECRET_KEY=your-secret-key-here  # Generate a strong secret key
```

**Generate a new Django secret key for production:**
```bash
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```

### Frontend Environment Variables

The frontend uses Vite's environment variables. Create a `.env` file in `frontend/`:

```properties
VITE_API_URL=http://localhost:8000  # Backend API URL
```

## 🔧 Troubleshooting

### Port Already in Use
If port 8000 (backend) or 3000/5173 (frontend) is already in use:

**Backend:**
```bash
python manage.py runserver 8001  # Use a different port
```

**Frontend (Vite):**
```bash
npm run dev -- --port 5174  # Use a different port
```

### Database Migration Issues
If you encounter migration errors:
```bash
cd backend
python manage.py migrate --fake-initial  # For fresh start (use with caution)
python manage.py migrate              # Apply all migrations
```

### Node Modules Cache Issues
```bash
cd frontend/workout-tracker
rm -rf node_modules package-lock.json
npm install
```

On Windows:
```bash
rmdir /s node_modules
del package-lock.json
npm install
```

### Virtual Environment Not Activating
Make sure you're in the correct directory (`backend/`) before activating:
```bash
cd backend
python -m venv venv
venv\Scripts\activate  # Windows
```

Or on macOS/Linux:
```bash
source venv/bin/activate
```

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

## 🐳 Docker & Containerization

The project includes Docker configurations for both backend and frontend:

### Docker Files
- `backend/Dockerfile` - Python 3.12 slim image with Django dependencies
- `frontend/Dockerfile` - Node.js image for React/Vite build
- `docker-compose.yml` - Orchestrates both services with volume mounting and port exposure

### Docker Compose Services

**Backend Service:**
- Port: 8000
- Volume: `./backend:/backend` for development
- Runs migrations and starts Django development server

**Frontend Service:**
- Port: 3000
- Volume: `./frontend:/frontend` with node_modules excluded
- Runs Vite development server with host binding

## ⚙️ CI/CD Pipeline

GitHub Actions workflows are configured in `.github/workflows/`:

- **django.yml** - Runs Django tests and code checks on every push
- **blank.yml** - Template workflow for custom automation (temporary)

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

For more information about the backend API, see `backend/README.md`.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

Email: fateme.abdellahii@gmail.com

Project Link: [https://github.com/fateme-abdellahi/workout_tracker](https://github.com/fateme-abdellahi/workout_tracker)
