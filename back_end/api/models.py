import uuid

from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Chat(models.Model):
    _id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    message = models.TextField()
    user = models.ForeignKey(User, related_name='author', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.message

    class Meta:
        db_table = 'chat'
        verbose_name = 'Chat'
        verbose_name_plural = 'Chats'
        ordering = ['user']