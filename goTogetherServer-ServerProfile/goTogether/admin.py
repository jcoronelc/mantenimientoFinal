from django.contrib import admin
from .models import Trip, Car, User


# Register your models here.
admin.site.register(User)
admin.site.register(Car)
admin.site.register(Trip)
