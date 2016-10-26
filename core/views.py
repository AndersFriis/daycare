from django.shortcuts import render
from django.views.generic import TemplateView
from django.http import HttpResponse
from rest_framework import permissions

class IndexView(TemplateView):
    template_name = 'core/index.html'