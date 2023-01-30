# Generated by Django 4.1.5 on 2023-01-29 09:41

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='IpAddressModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ip_address', models.CharField(max_length=12, verbose_name='Ip')),
                ('ip_combinations', models.CharField(blank=True, max_length=255, null=True, verbose_name='Combinaciones')),
                ('ip_joined', models.DateTimeField(auto_now_add=True, verbose_name='Fecha de ingreso')),
            ],
            options={
                'db_table': 'ip_info',
            },
        ),
    ]