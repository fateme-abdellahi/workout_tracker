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
    
    # def post(self, request):
    #     workout_serializer=serializers.WorkoutSerializer(data=request.data)
    #     exercises_serializer=serializers.ExerciseSerializer(data=request.data.pop('exercises'),many=True)
    #     if exercises_serializer.is_valid():
    #         if workout_serializer.is_valid():
    #             workout_serializer.save()
    #             return Response(status=status.HTTP_201_CREATED)
    #         return Response(workout_serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    #     return Response(workout_serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        