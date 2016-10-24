from rest_framework import serializers
from .models import Parent_site

class Parent_siteSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShoppingList
        fields = ('id', 'name', 'lastname', 'age', 'emergency', 'foodprefer')