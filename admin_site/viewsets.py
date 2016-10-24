from rest_framework import viewsets
from .models import Admin_site
from .serializers import Admin_siteSerializer

class Admin_site(viewsets.ModelViewSet):
    queryset = admin_site.objects.all()
    serializer_class = Admin_siteSerializer