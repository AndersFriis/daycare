from django.db import models
from django.core.urlresolvers import reverse

class News(models.Model):
    news = models.CharField(max_length=500)
    
    class Meta:
        ordering = ['news']

    def __str__(self):
        return self.news