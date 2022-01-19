from django.forms import models
from django.shortcuts import render, HttpResponse
from home import models

# Create your views here.
def home(request):
    context = {"name": "ghazal", "course": "django/python"}
    return render(request, "home.html", context)
    # return HttpResponse("This is my home page(/)")


def about(request):
    return render(request, "about.html")
    # return HttpResponse("This is my about page(/about)")


def projects(request):
    # return HttpResponse("This is my projects page(/projects)")
    return render(request, "projects.html")


def contact(request):
    if request.method == "post":
        name = request.Post["name"]
        email = request.Post["email"]
        phone = request.Post["phone"]
        description = request.Post["description"]
        print("this is post")
        # print(name, email, phone, description)
        instance = models.Contact(
            name=name, email=email, phone=phone, description=description
        )
        instance.save()
        print("The data wirtten to the db")
    # return HttpResponse("This is my contact page(/contact)")
    return render(request, "contact.html")
