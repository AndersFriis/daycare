from django.db import models
from django.core.urlresolvers import reverse
from django.conf import settings
from .helpers import send_new_post_email

class Post(models.Model):
    post = models.CharField(max_length=500)
    created_date = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL)
    class Meta:
        ordering = ['post', 'owner']

    def __str__(self):
        return self.post
    
    

    
    # def get_absolute_url(self):
    #     return reverse('posts:app') + '#/post/{}'.format(self.pk)

    # def get_email_url(self):
    #     return settings.BASE_URL + self.get_absolute_url()

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

        send_new_post_email(self)


