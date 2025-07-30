from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from . import serializers
from .. import models

# Create your views here.
class ListWorkoutView(generics.ListAPIView):
    permission_classes=[IsAuthenticated]
    serializer_class=serializers.WorkoutSerializer
    
    def get_queryset(self):
        print(models.Workout.objects.filter(user=self.request.user))
        return models.Workout.objects.filter(user=self.request.user)
