# Generated by Django 4.1.3 on 2022-11-17 19:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('HeathcareApp', '0010_publicservant'),
    ]

    operations = [
        migrations.CreateModel(
            name='Specialize',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('diseaseid', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='HeathcareApp.diseasetype')),
                ('email', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='HeathcareApp.doctor')),
            ],
        ),
    ]
