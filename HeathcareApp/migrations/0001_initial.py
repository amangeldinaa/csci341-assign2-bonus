# Generated by Django 4.1.3 on 2022-11-17 17:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='DiseaseType',
            fields=[
                ('id', models.IntegerField(default='0', primary_key=True, serialize=False)),
                ('description', models.CharField(max_length=140)),
            ],
        ),
        migrations.CreateModel(
            name='Disease',
            fields=[
                ('disease_code', models.CharField(max_length=50, primary_key=True, serialize=False)),
                ('pathogen', models.CharField(max_length=20)),
                ('description', models.CharField(max_length=140)),
                ('id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='HeathcareApp.diseasetype')),
            ],
        ),
    ]
