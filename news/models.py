from django.db import models
from django.core.urlresolvers import reverse
from .helpers import send_new_news_email

class News(models.Model):
    news = models.CharField(max_length=500)
    created_date = models.DateTimeField(auto_now=True)
    class Meta:
        ordering = ['news']

    def __str__(self):
        return self.news

    

def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

        send_new_news_email(self)