# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ParentSite',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, auto_created=True, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('lastname', models.CharField(max_length=50)),
                ('foodprefer', models.CharField(max_length=50)),
                ('allergies', models.CharField(max_length=50)),
                ('age', models.DecimalField(max_digits=6, null=True, blank=True, decimal_places=2)),
                ('emergency', models.DecimalField(max_digits=12, null=True, blank=True, decimal_places=2)),
                ('naptime', models.CharField(max_length=50)),
                ('email', models.CharField(max_length=50)),
                ('authorized', models.CharField(max_length=50)),
                ('medicine', models.CharField(max_length=50)),
            ],
            options={
                'ordering': ['name'],
            },
        ),
    ]
