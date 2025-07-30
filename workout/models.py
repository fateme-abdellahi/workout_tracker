from django.db import models
from django.core.exceptions import ValidationError
from django.contrib.auth.models import User

# Create your models here.
class Workout(models.Model):
    
    STATUS_CHOICES = [
        ('active', 'active'),
        ('pending', 'pending'),
    ]
    
    user=models.ForeignKey(User,on_delete=models.CASCADE,related_name="workouts")
    
    name=models.CharField(max_length=50)
    comment=models.TextField(blank=True,null=True)
    date=models.DateTimeField(blank=True,null=True)
    status=models.CharField(choices=STATUS_CHOICES,default="active")
    
    class Meta:
        ordering=['-date']
    
class Exercise(models.Model):
    workout=models.ForeignKey(Workout,on_delete=models.CASCADE,related_name="exercises")
    exercise_name=models.CharField(max_length=50)
    description=models.CharField(max_length=200)
    category=models.CharField(max_length=30)
    
    repetitions=models.PositiveIntegerField()
    sets=models.PositiveIntegerField()
    weights=models.CharField(blank=True,null=True,max_length=20)
