from django.conf.urls import include, url
from rest_framework import routers
from parent_site.viewsets import ParentSiteViewSet


router = routers.DefaultRouter()
router.register(r'parent', ParentSiteViewSet)


urlpatterns = [
    url(r'^', include(router.urls)),


]





