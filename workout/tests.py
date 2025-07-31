from rest_framework.test import APITestCase
from rest_framework import status
from django.urls import reverse
import json

# Create your tests here.

class WorkoutCreationTest(APITestCase):
    def setUp(self):  
        self.url=reverse('create-workout')
        response = self.client.post(reverse('signup'), {
            "username": "test",
            "password": "11111111",
            "password2": "11111111",
            "email": "test@email.com"
        })
        self.client.credentials(HTTP_AUTHORIZATION="Bearer "+response.data.get("access"))
        
    def test_create_workout_only_name(self):
        
        response=self.client.post(self.url,{
            "name":"test"
        })
        
        self.assertEqual(response.status_code,status.HTTP_201_CREATED)
        response.data.pop("id")
        self.assertEqual(response.data,{
            "exercises":[],
            "name":"test",
            "comment":None,
            "status":"active",
            "date":None
            })
        
    def test_create_complete_workout(self):
        data=json.dumps({
            'name':'test',
            'comment':'test comment',
            'status':'pending',
            'date':'2025-01-01',
            'exercises':[{
                'exercise_name':'test exercise',
                'description':'test description',
                'category':'test category',
                'repetitions':1,
                'sets':1
            }]
        })
        response=self.client.post(self.url,data=data,content_type='application/json')
        self.assertEqual(response.status_code,status.HTTP_201_CREATED)
        self.assertEqual("test comment",response.data["comment"])
        self.assertEqual("test description",response.data["exercises"][0]["description"])
        
        
        
    def test_create_workout_missing_name(self):
        data=json.dumps({
            'comment':'test comment',
            'status':'pending',
            'date':'2025-01-01',
            'exercises':[{
                'exercise_name':'test exercise',
                'description':'test description',
                'category':'test category',
                'repetitions':1,
                'sets':1
            }]
        })
        response=self.client.post(self.url,data=data,content_type='application/json')
        self.assertEqual(response.status_code,status.HTTP_400_BAD_REQUEST)
        
    def test_create_workout_missing_exercise_wrong_fields(self):
        data=json.dumps({
            'comment':'test comment',
            'status':'pending',
            'date':'2025-01-01',
            'exercises':[{
                'description':'test description',
                'category':'test category',
                'repetitions':1,
                'sets':1
            }]
        })
        response=self.client.post(self.url,data=data,content_type='application/json')
        self.assertEqual(response.status_code,status.HTTP_400_BAD_REQUEST)
        
        data=json.dumps({
            'comment':'test comment',
            'status':'pending',
            'date':'2025-01-01',
            'exercises':[{
                'exercise_name':'test exercise',
                'category':'test category',
                'repetitions':1,
                'sets':1
            }]
        })
        response=self.client.post(self.url,data=data,content_type='application/json')
        self.assertEqual(response.status_code,status.HTTP_400_BAD_REQUEST)
        
        data=json.dumps({
            'comment':'test comment',
            'status':'pending',
            'date':'2025-01-01',
            'exercises':[{
                'exercise_name':'test exercise',
                'description':'test description',
                'category':'test category',
                'repetitions':"1",
                'sets':1
            }]
        })
        response=self.client.post(self.url,data=data,content_type='application/json')
        self.assertEqual(response.status_code,status.HTTP_400_BAD_REQUEST)

class WorkoutListTest(APITestCase):
    def setUp(self):  
        self.url=reverse('list-workouts')
        response = self.client.post(reverse('signup'), {
            "username": "test",
            "password": "11111111",
            "password2": "11111111",
            "email": "test@email.com"
        })
        self.client.credentials(HTTP_AUTHORIZATION="Bearer "+response.data.get("access"))
        
        data=json.dumps({
            'comment':'test comment',
            'status':'pending',
            'date':'2025-01-01',
            'exercises':[{
                'exercise_name':'test exercise',
                'description':'test description',
                'category':'test category',
                'repetitions':"1",
                'sets':1
            }]
        })
        self.client.post(self.url,data=data,content_type='application/json')
        
    def test_list_workouts(self):
        response=self.client.get(self.url)
        self.assertEqual(response.status_code,status.HTTP_200_OK)
        
        
class WorkoutUpdateTest(APITestCase):
    def setUp(self):
        
        response = self.client.post(reverse('signup'), {
            "username": "test",
            "password": "11111111",
            "password2": "11111111",
            "email": "test@email.com"
        })
        self.client.credentials(HTTP_AUTHORIZATION="Bearer "+response.data.get("access"))
        
        data=json.dumps({
            'name':'test',
            'comment':'test comment',
            'status':'pending',
            'date':'2025-01-01',
            'exercises':[{
                'exercise_name':'test exercise',
                'description':'test description',
                'category':'test category',
                'repetitions':1,
                'sets':1
            }]
        })
        response=self.client.post(reverse("create-workout"),data=data,content_type='application/json')
        self.url=reverse('update-workout',args=[response.data.get("id")])
        
    def test_update_workout(self):
        data=json.dumps({
            'name':'test - updated',
            'comment':'test comment',
            'status':'pending',
            'date':'2025-01-01',
            'exercises':[{
                'exercise_name':'test exercise',
                'description':'test description',
                'category':'test category',
                'repetitions':1,
                'sets':1
            }]
        })
        response=self.client.put(self.url,data=data,content_type='application/json')
        self.assertEqual(response.status_code,status.HTTP_200_OK)
        self.assertEqual(response.data.get("name"),'test - updated')
        
    def test_create_exercise(self):
        data=json.dumps({
            'name':'test',
            'comment':'test comment',
            'status':'pending',
            'date':'2025-01-01',
            'exercises':[{
                'exercise_name':'test exercise',
                'description':'test description',
                'category':'test category',
                'repetitions':1,
                'sets':1
            },
            {
                'exercise_name':'test exercise new',
                'description':'test description new',
                'category':'test category new',
                'repetitions':1,
                'sets':1
            }]
        })
        response=self.client.put(self.url,data=data,content_type='application/json')
        self.assertEqual(response.status_code,status.HTTP_200_OK)
        self.assertEqual(len(response.data.get("exercises")),2)
        self.assertEqual(response.data.get("exercises")[1]["exercise_name"],"test exercise new")
        
    def test_delete_exercise(self):
        data=json.dumps({
            'name':'test',
            'comment':'test comment',
            'status':'pending',
            'date':'2025-01-01',
            'exercises':[]
        })
        response=self.client.put(self.url,data=data,content_type='application/json')
        self.assertEqual(response.status_code,status.HTTP_200_OK)
        self.assertEqual(len(response.data.get("exercises")),0)
        
    def test_update_exercise(self):
        data=json.dumps({
            'name':'test',
            'comment':'test comment',
            'status':'pending',
            'date':'2025-01-01',
            'exercises':[{
                'exercise_name':'test exercise - updated',
                'description':'test description',
                'category':'test category',
                'repetitions':1,
                'sets':1
            }]
        })
        response=self.client.put(self.url,data=data,content_type='application/json')
        self.assertEqual(response.status_code,status.HTTP_200_OK)
        self.assertEqual(response.data.get("exercises")[0]["exercise_name"],"test exercise - updated")
        
    def test_delete_exercise(self):
        data=json.dumps({
            'name':'test',
            'comment':'test comment',
            'status':'pending',
            'date':'2025-01-01',
            'exercises':[]
        })
        response=self.client.put(self.url,data=data,content_type='application/json')
        self.assertEqual(response.status_code,status.HTTP_200_OK)
        self.assertEqual(len(response.data.get("exercises")),0)
        
    def test_missing_exercise_field(self):
        data=json.dumps({
            'name':'test',
            'comment':'test comment',
            'status':'pending',
            'date':'2025-01-01',
            'exercises':[{
                'exercise_name':'test exercise - updated',
                'category':'test category',
                'repetitions':1,
                'sets':1
            }]
        })
        response=self.client.put(self.url,data=data,content_type='application/json')
        self.assertEqual(response.status_code,status.HTTP_400_BAD_REQUEST)
        
    def test_missing_workout_field(self):
        data=json.dumps({
            'name':'test',
            'status':'pending',
            'date':'2025-01-01',
            'exercises':[{
                'exercise_name':'test exercise - updated',
                'description':'test description',
                'category':'test category',
                'repetitions':1,
                'sets':1
            }]
        })
        response=self.client.put(self.url,data=data,content_type='application/json')
        self.assertEqual(response.status_code,status.HTTP_200_OK)
        
        
class WorkoutDeleteTest(APITestCase):
    def setUp(self):
        
        response = self.client.post(reverse('signup'), {
            "username": "test",
            "password": "11111111",
            "password2": "11111111",
            "email": "test@email.com"
        })
        self.client.credentials(HTTP_AUTHORIZATION="Bearer "+response.data.get("access"))
        
        data=json.dumps({
            'name':'test',
            'comment':'test comment',
            'status':'pending',
            'date':'2025-01-01',
            'exercises':[{
                'exercise_name':'test exercise',
                'description':'test description',
                'category':'test category',
                'repetitions':1,
                'sets':1
            }]
        })
        response=self.client.post(reverse("create-workout"),data=data,content_type='application/json')
        self.url=reverse('delete-workout',args=[response.data.get("id")])
        
        
    def test_delete_workout(self):
        response=self.client.delete(self.url)
        self.assertEqual(response.status_code,status.HTTP_204_NO_CONTENT)
