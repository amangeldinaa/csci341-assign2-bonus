from django.shortcuts import render
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from HeathcareApp.models import *
from HeathcareApp.serializers import *
from django.core.files.storage import default_storage

from sqlalchemy import create_engine
from sqlalchemy import text

# Create your views here.

@csrf_exempt
def diseaseApi(request):
    if request.method=='GET':
        disease = Disease.objects.all()
        disease_serializer = DiseaseSerializer(disease,many=True)
        res = JsonResponse(disease_serializer.data,safe=False)
        return res
    elif request.method=='POST':
        disease_data=JSONParser().parse(request)
        disease_serializer=DiseaseSerializer(data=disease_data)
        if disease_serializer.is_valid():
            disease_serializer.save()
            return JsonResponse("Added successfully",safe=False)
        return JsonResponse("Failed to add", safe=False)
    elif request.method=='PUT':
        disease_data=JSONParser().parse(request)
        disease=Disease.objects.get(disease_code=disease_data['disease_code'])
        disease_serializer=DiseaseSerializer(disease,data=disease_data)
        if disease_serializer.is_valid():
            disease_serializer.save()
            return JsonResponse("Updates successfully",safe=False)
        return JsonResponse("Failed to update", safe=False)
    elif request.method=='DELETE':
        disease_data=JSONParser().parse(request)
        disease=Disease.objects.get(disease_code=disease_data['disease_code'])
        disease.delete()
        return JsonResponse("Deleted successfully",safe=False)

@csrf_exempt
def diseaseTypeApi(request):
    if request.method=='GET':
        diseaseType = DiseaseType.objects.all()
        diseaseType_serializer = DiseaseTypeSerializer(diseaseType,many=True)
        res = JsonResponse(diseaseType_serializer.data,safe=False)
        return res
    elif request.method=='POST':
        diseaseType_data=JSONParser().parse(request)
        diseaseType_serializer=DiseaseTypeSerializer(data=diseaseType_data)
        if diseaseType_serializer.is_valid():
            diseaseType_serializer.save()
            return JsonResponse("Added successfully",safe=False)
        return JsonResponse("Failed to add", safe=False)
    elif request.method=='PUT':
        diseaseType_data=JSONParser().parse(request)
        diseaseType=DiseaseType.objects.get(id=diseaseType_data['id'])
        diseaseType_serializer=DiseaseTypeSerializer(diseaseType,data=diseaseType_data)
        if diseaseType_serializer.is_valid():
            diseaseType_serializer.save()
            return JsonResponse("Updates successfully",safe=False)
        return JsonResponse("Failed to update", safe=False)
    elif request.method=='DELETE':
        diseaseType_data=JSONParser().parse(request)
        diseaseType=DiseaseType.objects.get(id=diseaseType_data['id'])
        diseaseType.delete()
        return JsonResponse("Deleted successfully",safe=False)


@csrf_exempt
def countryApi(request):
    if request.method=='GET':
        country = Country.objects.all()
        country_serializer = CountrySerializer(country,many=True)
        res = JsonResponse(country_serializer.data,safe=False)
        return res
    elif request.method=='POST':
        country_data=JSONParser().parse(request)
        country_serializer=CountrySerializer(data=country_data)
        if country_serializer.is_valid():
            country_serializer.save()
            return JsonResponse("Added successfully",safe=False)
        return JsonResponse("Failed to add", safe=False)
    elif request.method=='PUT':
        country_data=JSONParser().parse(request)
        country=Country.objects.get(cname=country_data['cname'])
        country_serializer=CountrySerializer(country,data=country_data)
        if country_serializer.is_valid():
            country_serializer.save()
            return JsonResponse("Updates successfully",safe=False)
        return JsonResponse("Failed to update", safe=False)
    elif request.method=='DELETE':
        country_data=JSONParser().parse(request)
        country=Country.objects.get(cname=country_data['cname'])
        country.delete()
        return JsonResponse("Deleted successfully",safe=False)

@csrf_exempt
def discoverApi(request):
    if request.method=='GET':
        discover = Discover.objects.all()
        discover_serializer = DiscoverSerializer(discover,many=True)
        res = JsonResponse(discover_serializer.data,safe=False)
        return res
    elif request.method=='POST':
        discover_data=JSONParser().parse(request)
        discover_serializer=DiscoverSerializer(data=discover_data)
        if discover_serializer.is_valid():
            discover_serializer.save()
            return JsonResponse("Added successfully",safe=False)
        return JsonResponse("Failed to add", safe=False)
    elif request.method=='PUT':
        discover_data=JSONParser().parse(request)
        discover=Discover.objects.get(cname=discover_data['cname'], disease_code=discover_data['disease_code'])
        discover_serializer=DiscoverSerializer(discover,data=discover_data)
        if discover_serializer.is_valid():
            discover_serializer.save()
            return JsonResponse("Updates successfully",safe=False)
        return JsonResponse("Failed to update", safe=False)
    elif request.method=='DELETE':
        discover_data=JSONParser().parse(request)
        discover=Discover.objects.get(cname=discover_data['cname'])
        discover.delete()
        return JsonResponse("Deleted successfully",safe=False)

@csrf_exempt
def usersApi(request):
    if request.method=='GET':
        users = Users.objects.all()
        users_serializer = UsersSerializer(users,many=True)
        res = JsonResponse(users_serializer.data,safe=False)
        return res
    elif request.method=='POST':
        users_data=JSONParser().parse(request)
        users_serializer=UsersSerializer(data=users_data)
        if users_serializer.is_valid():
            users_serializer.save()
            return JsonResponse("Added successfully",safe=False)
        return JsonResponse("Failed to add", safe=False)
    elif request.method=='PUT':
        users_data=JSONParser().parse(request)
        users=Users.objects.get(email=users_data['email'])
        users_serializer=UsersSerializer(users,data=users_data)
        if users_serializer.is_valid():
            users_serializer.save()
            return JsonResponse("Updates successfully",safe=False)
        return JsonResponse("Failed to update", safe=False)
    elif request.method=='DELETE':
        users_data=JSONParser().parse(request)
        users=Users.objects.get(email=users_data['email'])
        users.delete()
        return JsonResponse("Deleted successfully",safe=False)

@csrf_exempt
def publicServantApi(request):
    if request.method=='GET':
        publicServant = PublicServant.objects.all()
        publicServant_serializer = PublicServantSerializer(publicServant,many=True)
        res = JsonResponse(publicServant_serializer.data,safe=False)
        return res
    elif request.method=='POST':
        publicServant_data=JSONParser().parse(request)
        publicServant_serializer=PublicServantSerializer(data=publicServant_data)
        if publicServant_serializer.is_valid():
            publicServant_serializer.save()
            return JsonResponse("Added successfully",safe=False)
        return JsonResponse("Failed to add", safe=False)
    elif request.method=='PUT':
        publicServant_data=JSONParser().parse(request)
        publicServant=PublicServant.objects.get(email=publicServant_data['email'])
        publicServant_serializer=PublicServantSerializer(publicServant,data=publicServant_data)
        if publicServant_serializer.is_valid():
            publicServant_serializer.save()
            return JsonResponse("Updates successfully",safe=False)
        return JsonResponse("Failed to update", safe=False)
    elif request.method=='DELETE':
        publicServant_data=JSONParser().parse(request)
        publicServant=PublicServant.objects.get(email=publicServant_data['email'])
        publicServant.delete()
        return JsonResponse("Deleted successfully",safe=False)

@csrf_exempt
def doctorApi(request):
    if request.method=='GET':
        doctor = Doctor.objects.all()
        doctor_serializer = DoctorSerializer(doctor,many=True)
        res = JsonResponse(doctor_serializer.data,safe=False)
        return res
    elif request.method=='POST':
        doctor_data=JSONParser().parse(request)
        doctor_serializer=DoctorSerializer(data=doctor_data)
        if doctor_serializer.is_valid():
            doctor_serializer.save()
            return JsonResponse("Added successfully",safe=False)
        return JsonResponse("Failed to add", safe=False)
    elif request.method=='PUT':
        doctor_data=JSONParser().parse(request)
        doctor=Doctor.objects.get(email=doctor_data['email'])
        doctor_serializer=DoctorSerializer(doctor,data=doctor_data)
        if doctor_serializer.is_valid():
            doctor_serializer.save()
            return JsonResponse("Updates successfully",safe=False)
        return JsonResponse("Failed to update", safe=False)
    elif request.method=='DELETE':
        doctor_data=JSONParser().parse(request)
        doctor=Doctor.objects.get(email=doctor_data['email'])
        doctor.delete()
        return JsonResponse("Deleted successfully",safe=False)

@csrf_exempt
def specializeApi(request):
    if request.method=='GET':
        specialize = Specialize.objects.all()
        specialize_serializer = SpecializeSerializer(specialize,many=True)
        res = JsonResponse(specialize_serializer.data,safe=False)
        return res
    elif request.method=='POST':
        specialize_data=JSONParser().parse(request)
        specialize_serializer=SpecializeSerializer(data=specialize_data)
        if specialize_serializer.is_valid():
            specialize_serializer.save()
            return JsonResponse("Added successfully",safe=False)
        return JsonResponse("Failed to add", safe=False)
    elif request.method=='PUT':
        specialize_data=JSONParser().parse(request)
        specialize=Specialize.objects.get(diseaseid=specialize_data['diseaseid'], email=specialize_data['email'])
        specialize_serializer=SpecializeSerializer(specialize,data=specialize_data)
        if specialize_serializer.is_valid():
            specialize_serializer.save()
            return JsonResponse("Updates successfully",safe=False)
        return JsonResponse("Failed to update", safe=False)
    elif request.method=='DELETE':
        specialize_data=JSONParser().parse(request)
        specialize=Specialize.objects.get(diseaseid=specialize_data['diseaseid'], email=specialize_data['email'])
        specialize.delete()
        return JsonResponse("Deleted successfully",safe=False)

@csrf_exempt
def recordApi(request):
    if request.method=='GET':
        record = Record.objects.all()
        record_serializer = RecordSerializer(record,many=True)
        res = JsonResponse(record_serializer.data,safe=False)
        return res
    elif request.method=='POST':
        record_data=JSONParser().parse(request)
        record_serializer=RecordSerializer(data=record_data)
        if record_serializer.is_valid():
            record_serializer.save()
            return JsonResponse("Added successfully",safe=False)
        return JsonResponse("Failed to add", safe=False)
    elif request.method=='PUT':
        record_data=JSONParser().parse(request)
        record=Record.objects.get(cname=record_data['cname'], email=record_data['email'], disease_code=record_data['disease_code'])
        record_serializer=RecordSerializer(record,data=record_data)
        if record_serializer.is_valid():
            record_serializer.save()
            return JsonResponse("Updates successfully",safe=False)
        return JsonResponse("Failed to update", safe=False)
    elif request.method=='DELETE':
        record_data=JSONParser().parse(request)
        record=Record.objects.get(cname=record_data['cname'], email=record_data['email'], disease_code=record_data['disease_code'])
        record.delete()
        return JsonResponse("Deleted successfully",safe=False)

engine = create_engine('postgresql://postgres:budT4alEoPMiruDRmCuW@containers-us-west-128.railway.app:6076/railway', echo=False)

@csrf_exempt
def query1Api(request):
    if request.method=='GET':
        sql = text(
            '''
            SELECT d.disease_code, d.description
            FROM Disease d, Discover ds
            WHERE d.pathogen='bacteria' AND ds.first_enc_date<'1990-01-01' AND d.disease_code=ds.disease_code;
            ''')
        res = engine.connect().execute(sql).fetchall()
        return res