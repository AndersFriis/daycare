# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0002_auto_20161027_1915'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='post',
            options={'ordering': ['post']},
        ),
        migrations.RenameField(
            model_name='post',
            old_name='name',
            new_name='post',
        ),
    ]
