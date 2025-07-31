from rest_framework.test import APITestCase
from rest_framework import status
from django.urls import reverse
# Create your tests here.

class AuthTest(APITestCase):
    def test_successfull_signup(self):
        response = self.client.post(reverse('signup'), {
            "username": "test",
            "password": "11111111",
            "password2": "11111111",
            "email": "test@email.com"
        })
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        
    def test_short_password(self):
        response = self.client.post(reverse('signup'), {
            "username": "test",
            "password": "1",
            "password2": "1",
            "email":"test@email.com"
        })
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        
    def test_missing_field(self):
        response = self.client.post(reverse('signup'), {
            "username": "test",
            "password": "11111111",
            "password2": "111111111",
        })
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        
    def test_existing_user(self):
        self.client.post(reverse('signup'), {
            "username": "test",
            "password": "11111111",
            "password2": "11111111",
            "email":"test@email.com"
        })
        
        response = self.client.post(reverse('signup'), {
            "username": "test",
            "password": "22222222",
            "password2": "22222222",
            "email":"test2@email.com"
        })
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        
    def test_existing_email(self):
        self.client.post(reverse('signup'), {
            "username": "test",
            "password": "11111111",
            "password2": "11111111",
            "email":"test@email.com"
        })
        
        response = self.client.post(reverse('signup'), {
            "username": "test2",
            "password": "22222222",
            "password2": "22222222",
            "email":"test@email.com"
        })
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
