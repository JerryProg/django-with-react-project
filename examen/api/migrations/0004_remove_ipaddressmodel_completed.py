# Generated by Django 4.1.5 on 2023-01-31 06:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_ipaddressmodel_ip_combinations'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='ipaddressmodel',
            name='completed',
        ),
    ]
