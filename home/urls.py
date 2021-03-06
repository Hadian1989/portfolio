from django.contrib import admin
from django.urls import path, include
from home import views

# Django admin header customization
admin.site.site_header = "Login to Developer Ghazaleh"
admin.site.site_title = "Welcome to Ghazaleh's dashboard"
admin.site.index_title = "Welcome to this portal"
app_name = "home"
urlpatterns = [
    path("", views.home, name="home"),
    path("about", views.about, name="about"),
    path("project/<slug:slug>/", views.project_detail, name="project-detail"),
    path("projects", views.projects, name="projects"),
    path("contact", views.contact, name="contact"),
    path("resume", views.resume, name="resume"),
]
