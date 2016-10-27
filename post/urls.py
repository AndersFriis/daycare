from django.conf.urls import include, url
from rest_framework import routers
from .viewsets import PostViewSet


router = routers.DefaultRouter()
router.register(r'postsite', PostSiteViewSet)


urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^accounts/', include('accounts.urls', namespace='accounts')),