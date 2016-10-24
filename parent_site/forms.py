from django import forms

from .models import Childinfo
from core.forms import BootstrapFormMixin

class Childinfo(BootstrapFormMixin, forms.ModelForm):

    class Meta:
        model = Childinfo

        fields = (
            'name',
            'lastname',
            'lastname',
            'age',
            'foodprefer'
            'emergency'
            
        )