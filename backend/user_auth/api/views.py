from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from . import serializers

class SignUpView(APIView):
    def post(self, request):
        serializer=serializers.ProfileSerializer(data=request.data)
        if serializer.is_valid():
            data=serializer.save()
            return Response(data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
# class LogoutView(APIView):
#     def get(self, request):
#         try:
#             token=Token.objects.get(user=request.user)
#             token.delete()
#             return Response(status=status.HTTP_204_NO_CONTENT)
#         except:
#             return Response(status=status.HTTP_400_BAD_REQUEST)
