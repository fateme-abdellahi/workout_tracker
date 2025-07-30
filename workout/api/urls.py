from django.urls import path
from . import views

urlpatterns = [
    path('', views.ListWorkoutView.as_view(),name='list'),
]
