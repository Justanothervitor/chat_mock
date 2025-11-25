from rest_framework.response import Response
from rest_framework import viewsets, generics , status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.decorators import action
from django.contrib.auth.models import User
from .models import Chat
from .serializers import UserSerializer, SignupSerializer, ChatSerializer, UserDtoSerializer
from .permissions import IsOwnerOrReadOnly

class UserAuthView(generics.CreateAPIView):

    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = SignupSerializer

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def actual_user(request):
    serializer = UserDtoSerializer(request.user)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def logout_view(request):
    try:
        refresh_token = request.data['refresh_token']
        token = RefreshTokens(refresh_token)
        token.blacklist()
        return Response(status=status.HTTP_205_RESET_CONTENT)
    except Exception as e:
        return Response(status=status.HTTP_400_BAD_REQUEST)


class ChatMessageHandler(viewsets.ModelViewSet):
    serializer_class = ChatSerializer
    permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]

    def handle_chat_message(self,serializer):
        serializer.save(user = self.request.user)
        return "Obrigado pelo seu contato. Em breve responderemos"

    @action(detail=False, methods=['get'])
    def show_chat_message_history(self):
        user = self.request.user
        return Chat.objects.filter(user=user)

