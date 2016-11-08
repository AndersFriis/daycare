# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0002_news_created_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='news',
            name='created_date',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
