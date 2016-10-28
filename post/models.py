from django.db import models
from django.core.urlresolvers import reverse

class Post(models.Model):
    post = models.CharField(max_length=500)
    
    class Meta:
        ordering = ['post']

    def __str__(self):
        return self.post




