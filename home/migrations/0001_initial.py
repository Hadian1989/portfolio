# Generated by Django 4.0.1 on 2022-01-19 09:04

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('lemail', models.EmailField(max_length=254)),
                ('phone', models.CharField(max_length=10)),
                ('description', models.TextField()),
            ],
        ),
    ]
