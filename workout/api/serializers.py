from rest_framework import serializers
from .. import models

class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Exercise
        fields="__all__"

class WorkoutSerializer(serializers.ModelSerializer):
    # exercises=ExerciseSerializer(read_only=True,many=True)
    exercises=ExerciseSerializer(many=True,required=False)
    class Meta:
        model=models.Workout
        fields="__all__"
