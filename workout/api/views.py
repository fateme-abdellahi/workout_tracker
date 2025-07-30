from django.shortcuts import render
from rest_framework import generics, filters
from rest_framework.permissions import IsAuthenticated
from . import serializers
from .. import models
from django_filters.rest_framework import DjangoFilterBackend

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

