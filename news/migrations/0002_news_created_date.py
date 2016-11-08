# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='news',
            name='created_date',
            field=models.DateTimeField(auto_now=True, default=datetime.datetime(2016, 11, 8, 16, 36, 56, 304567, tzinfo=utc)),
            preserve_default=False,
        ),
    ]
