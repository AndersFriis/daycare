# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('parent_site', '0002_auto_20161025_1943'),
    ]

    operations = [
        migrations.AlterField(
            model_name='parentsite',
            name='age',
            field=models.DecimalField(blank=True, max_digits=12, null=True, decimal_places=2),
        ),
    ]
