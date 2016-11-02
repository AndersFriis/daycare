from django.db import models
from django.core.urlresolvers import reverse

class ParentSite(models.Model):
    name = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    foodprefer = models.CharField(max_length=50)
    allergies = models.CharField(max_length=50)
    age = models.IntegerField(blank=True, null=True,)
    emergency = models.IntegerField(blank=True, null=True,)
    naptime = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    authorized = models.CharField(max_length=50)
    medicine = models.CharField(max_length=50)


    

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name



