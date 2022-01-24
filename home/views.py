from django.shortcuts import render
from home.models import Contact, Education, Job, Project

# Create your views here.


def home(request):
    context = {"name": "ghazal", "course": "django/python"}
    return render(request, "home.html", context)
    # return HttpResponse("This is my home page(/)")


def resume(request):
    context = {"jobs": Job.objects.all,
               "educations": Education.objects.all}
    return render(request, "resume.html", context)


def about(request):
    return render(request, "about.html")
    # return HttpResponse("This is my about page(/about)")


def projects(request):
    if request.method == "GET":
        projects = Project.objects.all()
    return render(request, "projects.html", {"projects": projects})


def project_detail(request, slug):
    if request.method == "GET":
        context = {"project": Project.objects.get(slug=slug)}
    return render(request, "project-detail.html", context)


def contact(request):
    if request.method == "POST":
        name = request.POST["name"]
        email = request.POST["email"]
        phone = request.POST["phone"]
        description = request.POST["description"]
        print("this is post")
        contact = Contact(name=name, email=email,
                          phone=phone, description=description)
        print("The data wirtten to the db")
        contact.save()
    return render(request, "contact.html")
