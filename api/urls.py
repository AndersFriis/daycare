from django.conf.urls import include, url
from rest_framework import routers
from parent_site.viewsets import Parent_siteViewSet


router = routers.DefaultRouter()
router.register(r'parent_site', Parent_siteViewSet)


urlpatterns = [
    url(r'^', include(router.urls)),


]





