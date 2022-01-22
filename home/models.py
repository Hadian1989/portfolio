from django.db import models
from cloudinary.models import CloudinaryField

# Create your models here.


class Contact(models.Model):
    name = models.CharField(max_length=30)
    email = models.EmailField()
    phone = models.CharField(max_length=10)
    description = models.TextField()

    def __str__(self):
        return self.name


class Project(models.Model):
    title = models.CharField(max_length=30)
    description=models.TextField()
    created_at = models.DateField(auto_now_add=True)
    finished_at = models.DateField(null=True, blank=True)
    Project_Status_CHOICES = (
        ('inProgress', 'in progress'),
        ('Finished', 'Finished'),
        ('inComplete','In Compelete')
    )
    status = models.CharField(max_length=10, choices=Project_Status_CHOICES)
    image=image = CloudinaryField('image', folder="portfolio/projects")
    def __str__(self):
        return self.title