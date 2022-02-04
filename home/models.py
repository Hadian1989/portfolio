from django.utils import timezone
from django.db import models
from cloudinary.models import CloudinaryField
from django.core.validators import MaxValueValidator, MinValueValidator

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
    created_at = models.DateField()
    finished_at = models.DateField(default=timezone.now, blank=True,null=True)
    STATUS_CHOICES = (
        ("In Progress", "in progress"),
        ("Accomplished", "Finished"),
        ("Pending", 'Draft')
    )
    status = models.CharField(max_length=15, choices=STATUS_CHOICES)
    image = CloudinaryField("image", folder="/portfolio/projects")

    def __str__(self):
        return self.title


class Job(models.Model):
    title = models.CharField(max_length=30)
    description = models.TextField()
    company = models.CharField(max_length=30)
    started_at = models.DateField()
    finished_at = models.DateField(null=True, blank=True)
    STATUS_CHOICES = (
        ("o", "Ongoing"),
        ("F", "Finished"),
    )
    status = models.CharField(max_length=1, choices=STATUS_CHOICES)

    def __str__(self):
        return self.title

# https://res.cloudinary.com/ghazalpro/image/upload/v1642853899/portfolio/slider16_btgbht.jpg
# https://res.cloudinary.com/ghazalpro/image/upload/v1642853880/portfolio/slider11_egc68p.jpg
# https://res.cloudinary.com/ghazalpro/image/upload/v1642853903/portfolio/slider12_v3o4rr.jpg


class Education(models.Model):
    title = models.CharField(max_length=30)
    description = models.TextField()
    gpa = models.FloatField(
        validators=[MinValueValidator(10.0), MaxValueValidator(20.0)])
    university = models.CharField(max_length=30)
    started_at = models.DateTimeField()
    finished_at = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.title


class Skill(models.Model):
    title = models.CharField(max_length=30)
    competency = models.CharField(max_length=30)

    def __str__(self):
        return self.title
