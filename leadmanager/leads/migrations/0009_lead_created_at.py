# Generated by Django 3.0.5 on 2020-07-24 16:33

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('leads', '0008_remove_lead_created_at'),
    ]

    operations = [
        migrations.AddField(
            model_name='lead',
            name='created_at',
            field=models.DateField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
