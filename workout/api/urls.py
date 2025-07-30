from django.urls import path
from . import views

urlpatterns = [
    path('', views.ListWorkoutView.as_view(),name='list-workouts'),
    path('create/', views.CreateWorkoutView.as_view(),name='create-workout'),
    path('update/<int:pk>/', views.UpdateWorkoutView.as_view(),name='update-workout'),
]
