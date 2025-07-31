from django.urls import path
from . import views
# from rest_framework.authtoken.views import obtain_auth_token
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView

urlpatterns = [
    path('signup/',views.SignUpView.as_view(),name='signup'),
    # path('login/',obtain_auth_token,name='login'),
    # path('logout/',views.LogoutView.as_view(),name='logout'),
    
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]


