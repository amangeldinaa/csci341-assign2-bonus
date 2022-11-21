from django.db import models

# Create your models here.

class DiseaseType(models.Model):
    id = models.IntegerField(primary_key=True, default='0')
    description = models.CharField(max_length=140)

class Disease(models.Model):
    disease_code = models.CharField(max_length=50, primary_key=True)
    pathogen = models.CharField(max_length=20)
    description = models.CharField(max_length=140)
    id = models.ForeignKey(DiseaseType, on_delete=models.CASCADE)

class Country(models.Model):
    cname = models.CharField(max_length=50, primary_key=True)
    population = models.BigIntegerField()

class Discover(models.Model):
    cname = models.OneToOneField(Country, models.DO_NOTHING, primary_key=True)
    disease_code = models.OneToOneField(Disease, models.DO_NOTHING)
    first_enc_date = models.DateField()

class Users(models.Model):
    email = models.CharField(max_length=60, primary_key=True)
    name = models.CharField(max_length=30)
    surname = models.CharField(max_length=40)
    salary = models.IntegerField()
    phone = models.CharField(max_length=20)
    cname = models.ForeignKey(Country, on_delete=models.CASCADE)

class PublicServant(models.Model):
    email = models.OneToOneField(Users, models.DO_NOTHING, primary_key=True)
    department = models.CharField(max_length=50)

class Doctor(models.Model):
    email = models.OneToOneField(Users, models.DO_NOTHING, primary_key=True)
    degree = models.CharField(max_length=20)

class Specialize(models.Model):
    diseaseid = models.ForeignKey(DiseaseType, on_delete=models.CASCADE)
    email = models.ForeignKey(Doctor, on_delete=models.CASCADE)

class Record(models.Model):
    email = models.ForeignKey(PublicServant, on_delete=models.CASCADE)
    cname = models.ForeignKey(Country, on_delete=models.CASCADE)
    disease_code = models.ForeignKey(Disease, on_delete=models.CASCADE)
    total_deaths = models.IntegerField()
    total_patients = models.IntegerField()
