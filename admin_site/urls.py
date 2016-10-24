from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.admin_list, name='admin_list'),
    url(r'^(?P<id>\d+)/$', views.admin_detail, name='admin_detail'),
    url(r'^(?P<id>\d+)/edit/$', views.admin_edit, name='admin_edit'),
]