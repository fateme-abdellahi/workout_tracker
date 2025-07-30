from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

class ProfileSerializer(serializers.ModelSerializer):
    password=serializers.CharField(write_only=True)
    password2=serializers.CharField(write_only=True)
    email=serializers.EmailField(required=True)
    class Meta:
        model=User
        fields=['username','password','password2','email']
        
        
    def validate(self,attrs):
        if attrs['password']!=attrs['password2']:
            raise serializers.ValidationError("passwords aren't the  same")
        return attrs
    
    def save(self, **kwargs):
        username=self.validated_data['username']
        password=self.validated_data['password']
        email=self.validated_data['email']
        
        user=User.objects.create_user(username=username,email=email)
        user.set_password(password)
        user.save()
        token=Token.objects.create(user=user)
        return token.key