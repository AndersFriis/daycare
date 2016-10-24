from django.db import models
from django.core.urlresolvers import reverse

class Parent_site(models.Model):
    name = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    foodprefer = models.CharField(max_length=50)
    emergency = models.CharField(max_length=50)
    age = models.DecimalField(max_digits=6, decimal_places=2, blank=True, null=True,)
    

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name