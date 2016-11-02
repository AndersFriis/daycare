from rest_framework import serializers
from .models import ParentSite


class ParentSiteSerializer(serializers.ModelSerializer):
    class Meta:
        model = ParentSite
        fields = ('id', 'name', 'lastname', 'age', 'emergency', 'foodprefer', 'allergies', 'naptime', 'email','authorized', 'medicine' )

