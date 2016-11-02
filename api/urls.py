from django.conf.urls import include, url
from rest_framework import routers
from parent_site.viewsets import ParentSiteViewSet
from post.viewsets import PostViewSet
from news.viewsets import NewsViewSet




router = routers.DefaultRouter()
router.register(r'parent', ParentSiteViewSet)
router.register(r'post', PostViewSet)
router.register(r'news', NewsViewSet)



urlpatterns = [
    url(r'^', include(router.urls)),


]


