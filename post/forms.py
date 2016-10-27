from django import forms

from .models import Postinfo
from core.forms import BootstrapFormMixin

class Postinfo(BootstrapFormMixin, forms.ModelForm):

    class Meta:
        model = Postinfo

        fields = (
            'name'
            )



