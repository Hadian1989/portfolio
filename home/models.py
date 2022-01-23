from django.utils import timezone
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
    title = models.CharField(max_length=20)
    slug = models.SlugField(max_length=20, unique=True)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    finished_at = models.DateTimeField(default=timezone.now, blank=True)
    STATUS_CHOICES = (
        ("p", "in progress"),
        ("F", "Finished"),
        ("d", 'Draft')
    )
    status = models.CharField(max_length=1, choices=STATUS_CHOICES)
    image = CloudinaryField("image", folder="/portfolio/projects")

    def __str__(self):
        return self.title
