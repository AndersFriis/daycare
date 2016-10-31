from django import forms

from .models import News
from core.forms import BootstrapFormMixin

class News(BootstrapFormMixin, forms.ModelForm):

    class Meta:
        model = News

        fields = (
            'news'
            )