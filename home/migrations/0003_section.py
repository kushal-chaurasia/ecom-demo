# Generated by Django 3.2 on 2021-04-13 03:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_carousel'),
    ]

    operations = [
        migrations.CreateModel(
            name='Section',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='meadia/carousel_image')),
                ('title', models.CharField(max_length=50)),
            ],
        ),
    ]
