# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0005_auto_20161104_1541'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='post',
            options={'ordering': ['post', 'owner']},
        ),
    ]
