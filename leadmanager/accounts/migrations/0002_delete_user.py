# Generated by Django 3.0.5 on 2020-07-24 09:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('leads', '0006_auto_20200724_1509'),
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.DeleteModel(
            name='User',
        ),
    ]
