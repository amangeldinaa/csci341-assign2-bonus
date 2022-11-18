from rest_framework import serializers
from HeathcareApp.models import *

class DiseaseTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model=DiseaseType
        fields='__all__'

class DiseaseSerializer(serializers.ModelSerializer):
    class Meta:
        model=Disease
        fields='__all__'

class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model=Country
        fields='__all__'

class DiscoverSerializer(serializers.ModelSerializer):
    class Meta:
        model=Discover
        fields='__all__'
        unique_together = (('cname','disease_code'))

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model=Users
        fields='__all__'

class PublicServantSerializer(serializers.ModelSerializer):
    class Meta:
        model=PublicServant
        fields='__all__'

class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model=Doctor
        fields='__all__'

class SpecializeSerializer(serializers.ModelSerializer):
    class Meta:
        model=Specialize
        fields='__all__'
        unique_together = (('diseaseid','email'))

class RecordSerializer(serializers.ModelSerializer):
    class Meta:
        model=Record
        fields='__all__'
        unique_together = (('email','cname','disease_code'))