from django.contrib import admin
from home import models


# Register your models here.
@admin.register(models.Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ("name", "phone", "email")
    list_per_page = 20
    actions_selection_counter = True


@admin.register(models.Project)
class ContactAdmin(admin.ModelAdmin):
    list_display = ("pk", "title")
    list_per_page = 20
    actions_selection_counter = True
