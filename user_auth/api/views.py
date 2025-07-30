from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from . import serializers

# Create your views here.

class SignUpView(APIView):
    def post(self, request):
        print(request.data)
        serializer=serializers.ProfileSerializer(data=request.data)
        if serializer.is_valid():
            token=serializer.save()
            return Response({"token":token},status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
