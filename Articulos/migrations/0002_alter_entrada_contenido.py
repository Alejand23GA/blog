# Generated by Django 5.0.6 on 2024-06-15 23:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Articulos', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='entrada',
            name='contenido',
            field=models.TextField(max_length=400),
        ),
    ]
