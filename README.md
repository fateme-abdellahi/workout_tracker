# Workout Management API

A Django REST Framework API for managing personal workout routines with JWT authentication.

## ✨ Features

- 🔐 **User Authentication** - JWT-based registration and login
- 📝 **Workout Management** - Create, update, delete personal workouts
- 🏋️ **Exercise Tracking** - Add detailed exercises to workouts
- 🔍 **Advanced Filtering** - Search and filter workouts by status, name, date
- 👤 **User Isolation** - Each user sees only their own workouts
- ✅ **Testing** - Full test coverage for all endpoints

## 🚀 Quick Start

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/fateme-abdellahi/workout_tracker.git
   ```

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Run migrations**
   ```bash
   python manage.py migrate
   ```

4. **Start the server**
   ```bash
   python manage.py runserver
   ```

## 📚 API Endpoints

### Authentication
- `POST /auth/signup/` - Register new user
- `POST /auth/api/token/` - Login and get JWT tokens
- `POST /auth/api/token/refresh/` - Refresh access token

### Workouts
- `GET    /` - List workouts (with filtering, ordering, searching, pagination)
- `POST   /create/` - Create new workout
- `PUT    /edit/{id}/` - Update workout
- `DELETE /delete/{id}/` - Delete workout

## 🔧 Usage Example

```python
# Register user
response = requests.post('/auth/signup/', {
    "username": "fitness_user",
    "email": "user@example.com",
    "password": "securepass123",
    "password2": "securepass123"
})

# Create workout
headers = {'Authorization': f'Bearer {response.json()["access"]}'}
workout_data = {
    "name": "Push Day",
    "comment": "Upper body workout",
    "date": "2025-01-01",
    "exercises": [
        {
            "exercise_name": "Push-ups",
            "description": "Bodyweight chest exercise",
            "category": "Chest",
            "repetitions": 15,
            "sets": 3
        }
    ]
}

requests.post('/create/', json=workout_data, headers=headers)
```

## 🧪 Testing

```bash
# Run all tests
python manage.py test
```

## 🛠️ Built With

- **Django** - Web framework
- **Django REST Framework** - API framework  
- **djangorestframework-simplejwt** - JWT authentication
- **django-filter** - Advanced filtering


## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

Email: fateme.abdellahii@gmail.com

Project Link: [https://github.com/fateme-abdellahi/workout_tracker](https://github.com/fateme-abdellahi/workout_tracker)
