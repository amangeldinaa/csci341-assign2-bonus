from django.shortcuts import render
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from HeathcareApp.models import *
from HeathcareApp.serializers import *
from django.core.files.storage import default_storage

# from sqlalchemy import create_engine
# from sqlalchemy import text

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

# engine = create_engine('postgresql://postgres:budT4alEoPMiruDRmCuW@containers-us-west-128.railway.app:6076/railway', echo=False)

from django.http import HttpResponse
from django.db import connection
from django.db.models import fields
from django.shortcuts import redirect, render
import simplejson
from django.views.decorators.csrf import csrf_exempt
import simplejson
# engine = create_engine('postgresql://postgres:6916qwopzxnm@localhost:5432/hospital_db', echo=False)

@csrf_exempt
def query1Api(request):
    with connection.cursor() as cursor:
        q = '''
        SELECT d.disease_code, d.description
        FROM public."HeathcareApp_disease" d, public."HeathcareApp_discover" ds
        WHERE d.pathogen='bacteria' AND ds.first_enc_date<'1990-01-01' AND d.disease_code=ds.disease_code_id;
        '''
        cursor.execute(q)
        return HttpResponse(
        simplejson.dumps(cursor.fetchall(), use_decimal = True))

def query2Api(request):
    with connection.cursor() as cursor:
        q = '''
        SELECT DISTINCT u.name, u.surname, d.degree
        FROM public."HeathcareApp_doctor" d, public."HeathcareApp_users" u
        WHERE d.email_id=u.email AND d.email_id NOT IN 
            (SELECT DISTINCT s.email_id
            FROM public."HeathcareApp_specialize" s
            WHERE s.diseaseid_id =1
            );
        '''
        cursor.execute(q)
        return HttpResponse(
        simplejson.dumps(cursor.fetchall(), use_decimal = True))

def query3Api(request):
    with connection.cursor() as cursor:
        q = '''
       SELECT DISTINCT u.name, u.surname, d.degree
        FROM public."HeathcareApp_doctor" d, public."HeathcareApp_users" u
        WHERE d.email_id=u.email AND d.email_id IN (
            SELECT s.email_id
            FROM public."HeathcareApp_specialize" s
            GROUP BY s.email_id
            HAVING COUNT(*)>2
            );
        '''
        cursor.execute(q)
        return HttpResponse(
        simplejson.dumps(cursor.fetchall(), use_decimal = True))

def query4Api(request):
    with connection.cursor() as cursor:
        q = '''
        SELECT cname_id, AVG(salary)
        FROM public."HeathcareApp_specialize" s, public."HeathcareApp_doctor" d, public."HeathcareApp_users" u
        WHERE s.diseaseid_id=5 AND s.email_id=d.email_id AND d.email_id=u.email
        GROUP BY cname_id;
        '''
        cursor.execute(q)
        return HttpResponse(
        simplejson.dumps(cursor.fetchall(), use_decimal = True))

def query5Api(request):
    with connection.cursor() as cursor:
        q = '''
        SELECT p.department, COUNT(*)
        FROM public."HeathcareApp_publicservant" p
        WHERE p.email_id IN (
            SELECT DISTINCT r.email_id
            FROM public."HeathcareApp_record" r
            WHERE r.disease_code_id='covid-19'
            GROUP BY r.email_id
            HAVING COUNT(*) > 1
            )
        GROUP BY p.department; 
        '''
        cursor.execute(q)
        return HttpResponse(
        simplejson.dumps(cursor.fetchall(), use_decimal = True))

def query6Api(request):
    with connection.cursor() as cursor:
        q = '''
        UPDATE public."HeathcareApp_users" 
        SET salary = salary * 2
        WHERE email IN (
        SELECT r.email_id
        FROM public."HeathcareApp_record" r
        WHERE r.disease_code_id='covid-19'
        GROUP BY r.email_id
        HAVING COUNT(*) > 3
        );
        '''
        try:
            cursor.execute(q)
            return HttpResponse('Successfully updated salary')
        except:
            return HttpResponse('Error while updating salary')

def query7Api(request):
    with connection.cursor() as cursor:
        q = '''
        DELETE 
        FROM public."HeathcareApp_users" u 
        WHERE u.name LIKE '%bek%' OR u.name LIKE '%Bek%' OR u.name LIKE '%gul%' OR u.name LIKE '%Gul%';
        
        '''
        try:
            cursor.execute(q)
            return HttpResponse('Successfully deleted users')
        except:
            return HttpResponse('Error while deleting users')

@csrf_exempt
def query8Api(request):
    with connection.cursor() as cursor:
        # Create index on pathogen
        q = '''
        CREATE INDEX idx_pathogen ON public."HeathcareApp_disease"(pathogen);
        
        '''
        try:
            cursor.execute(q)
            return HttpResponse('Successfully created index on pathogen')
        except:
            return HttpResponse('The index already exists')

def query9Api(request):
    with connection.cursor() as cursor:
        q = '''
        SELECT u.email, u.name, p.department
        FROM public."HeathcareApp_publicservant" p, public."HeathcareApp_users"  u
        WHERE p.email_id=u.email AND p.email_id IN (
            SELECT r.email_id
            FROM public."HeathcareApp_record" r
            GROUP BY r.email_id
            HAVING SUM(r.total_patients)>99999 AND SUM(r.total_patients)<1000000
     	);
        '''
        cursor.execute(q)
        return HttpResponse(
        simplejson.dumps(cursor.fetchall(), use_decimal = True))

def query10Api(request):
    with connection.cursor() as cursor:
        q = '''
        SELECT r.cname_id
        FROM public."HeathcareApp_record" r
        GROUP BY r.cname_id
        ORDER BY (SUM(r.total_patients)) DESC
        LIMIT 5
        '''
        cursor.execute(q)
        return HttpResponse(
        simplejson.dumps(cursor.fetchall(), use_decimal = True))

def query11Api(request):
    with connection.cursor() as cursor:
        q = '''
        SELECT dt.description, SUM(r.total_patients)
        FROM public."HeathcareApp_disease" d, public."HeathcareApp_diseasetype" dt, public."HeathcareApp_record" r
        WHERE d.id_id=dt.id AND d.disease_code=r.disease_code_id
        GROUP BY dt.description;
        '''
        cursor.execute(q)
        return HttpResponse(
        simplejson.dumps(cursor.fetchall(), use_decimal = True))