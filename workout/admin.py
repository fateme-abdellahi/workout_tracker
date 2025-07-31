from django.contrib import admin
from . import models

class WorkoutAdmin(admin.ModelAdmin):
    list_display=["user__username","name",]
    
class ExerciseAdmin(admin.ModelAdmin):
    list_display=["exercise_name",]

admin.site.register(models.Exercise,ExerciseAdmin)
admin.site.register(models.Workout,WorkoutAdmin)
