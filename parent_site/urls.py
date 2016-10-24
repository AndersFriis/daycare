from django.conf.urls import include, url
from rest_framework import routers
from .viewsets import ParentSiteViewSet


router = routers.DefaultRouter()
router.register(r'parentsite', ParentSiteViewSet)


urlpatterns = [
    url(r'^', include(router.urls)),


]





