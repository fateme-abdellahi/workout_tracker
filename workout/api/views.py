from django.shortcuts import render
from rest_framework import generics, filters, status
from rest_framework.permissions import IsAuthenticated
from . import serializers
from .. import models
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.response import Response

# Create your views here.
class ListWorkoutView(generics.ListAPIView):
    permission_classes=[IsAuthenticated]
    serializer_class=serializers.WorkoutSerializer
    filter_backends=[DjangoFilterBackend,filters.SearchFilter,filters.OrderingFilter]
    filterset_fields=["status","name"]
    search_fields=["name",]
    ordering_fields=["date",]
    
    def get_queryset(self):
        return models.Workout.objects.filter(user=self.request.user)


class CreateWorkoutView(generics.CreateAPIView):
    permission_classes=[IsAuthenticated]
    serializer_class=serializers.WorkoutSerializer
    
    def get_queryset(self):
        return models.Workout.objects.filter(user=self.request.user)

class UpdateWorkoutView(generics.RetrieveUpdateAPIView):
    permission_classes=[IsAuthenticated]
    serializer_class=serializers.WorkoutSerializer
    
    def get_queryset(self):
        return models.Workout.objects.filter(user=self.request.user)
    