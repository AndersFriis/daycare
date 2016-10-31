from django.conf.urls import include, url
from rest_framework import routers
from .viewsets import NewsViewSet


router = routers.DefaultRouter()
router.register(r'newssite', NewsSiteViewSet)


urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^accounts/', include('accounts.urls', namespace='accounts')),