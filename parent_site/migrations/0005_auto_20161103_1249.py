# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('parent_site', '0004_auto_20161102_1748'),
    ]

    operations = [
        migrations.RenameField(
            model_name='parentsite',
            old_name='foodprefer',
            new_name='snacksprefer',
        ),
    ]
