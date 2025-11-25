from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from .views import ChatMessageHandler, actual_user, logout_view,UserAuthView

router = DefaultRouter()
router.register(r'chat', ChatMessageHandler,basename='chat')

urlpatterns = [
    path('', include(router.urls)),
    path('users/register', UserAuthView().as_view(), name='register'),
    path('users/login', TokenObtainPairView().as_view(), name='login'),
    path('users/token/refresh', TokenRefreshView().as_view(), name='refresh'),
    path('users/me', actual_user, name='me'),
    path('users/logout',logout_view,name='logout'),
    path('chat/send',ChatMessageHandler.handle_chat_message,name='send_message'),
    path('chat/history',ChatMessageHandler.show_chat_message_history,name='history')
]