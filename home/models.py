from django.db import models

# Create your models here.


class Contact(models.Model):
    name = models.CharField(max_length=30)
    lemail = models.EmailField()
    phone = models.CharField(max_length=10)
    description = models.TextField()
