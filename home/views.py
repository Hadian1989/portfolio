from django.shortcuts import render
from home.models import Contact, Education, Job, Project, Skill

# Create your views here.


def home(request):
    context = {"name": "ghazal", "course": "django/python"}
    return render(request, "home.html", context)
    # return HttpResponse("This is my home page(/)")




def educatiion(request):
    context = {
        "educations": Education.objects.all}
    return render(request, "education.html", context)


def skills(request):
    context = {"skills": Skill.objects.all,
               }
    return render(request, "skills.html", context)


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
        contact = Contact(name=name, email=email,
                          phone=phone, description=description)
        contact.save()
    return render(request, "contact.html")


def search(request):
    if request.method == "GET":
        keyword = request.GET["keyword"]
        context = {"keyword": "you are looking for "+keyword}
    return render(request, "home.html", context)
