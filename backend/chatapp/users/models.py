from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    pass
class Interest(models.Model):
    sender = models.ForeignKey(CustomUser, related_name='sent_interests', on_delete=models.CASCADE)
    receiver = models.ForeignKey(CustomUser, related_name='received_interests', on_delete=models.CASCADE)
    is_accepted = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.sender} -> {self.receiver} : {'Accepted' if self.is_accepted else 'Pending'}"
