from rest_framework import serializers
from .. import models

class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Exercise
        fields="__all__"
        extra_kwargs={
            'workout':{
                "read_only":True
            }
        }

class WorkoutSerializer(serializers.ModelSerializer):
    exercises=ExerciseSerializer(many=True,required=False)
    class Meta:
        model=models.Workout
        exclude=["user",]
        
    def validate(self, data):
        user = self.context['request'].user
        name = data.get('name')
        
        if not self.instance:
            if models.Workout.objects.filter(user=user, name=name).exists():
                raise serializers.ValidationError({'name': 'You already have a workout with this name.'})
        else:
            if name != self.instance.name:
                if models.Workout.objects.filter(user=user, name=name).exists():
                    raise serializers.ValidationError({'name': 'You already have a workout with this name.'})
        return data
    
    def create(self, validated_data):
        exercises_data=[]
        exercises_data = validated_data.pop('exercises',None)
        validated_data['user']=self.context['request'].user
        workout = models.Workout.objects.create(**validated_data)
        if exercises_data:
            for exercise_data in exercises_data:
                models.Exercise.objects.create(workout=workout, **exercise_data)
        return workout
    