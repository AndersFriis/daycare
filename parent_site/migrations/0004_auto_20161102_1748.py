# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('parent_site', '0003_auto_20161025_1945'),
    ]

    operations = [
        migrations.AlterField(
            model_name='parentsite',
            name='age',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='parentsite',
            name='emergency',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
