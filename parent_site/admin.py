from django.contrib import admin

from .models import ParentSite

class ParentAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("name", "id",)}