from rest_framework import viewsets
from .models import ParentSite
from .serializer import ParentSiteSerializer

class ParentSiteViewSet(viewsets.ModelViewSet):
    queryset = ParentSite.objects.all()
    serializer_class = ParentSiteSerializer