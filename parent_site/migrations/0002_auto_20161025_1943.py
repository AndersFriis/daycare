# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('parent_site', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='parentsite',
            name='age',
            field=models.DecimalField(blank=True, null=True, decimal_places=2, max_digits=2),
        ),
    ]
