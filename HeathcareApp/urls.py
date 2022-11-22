from django.urls import re_path
from HeathcareApp import views

urlpatterns=[
    re_path(r'^disease$',views.diseaseApi),
    re_path(r'^disease/([0-9]+)$',views.diseaseApi),

    re_path(r'^diseasetype$',views.diseaseTypeApi),
    re_path(r'^diseasetype/([0-9]+)$',views.diseaseTypeApi),

    re_path(r'^country$',views.countryApi),
    re_path(r'^country/([0-9]+)$',views.countryApi),

    re_path(r'^discover$',views.discoverApi),
    re_path(r'^discover/([0-9]+)$',views.discoverApi),

    re_path(r'^users$',views.usersApi),
    re_path(r'^users/([0-9]+)$',views.usersApi),

    re_path(r'^publicservant$',views.publicServantApi),
    re_path(r'^publicservant/([0-9]+)$',views.publicServantApi),

    re_path(r'^doctor$',views.doctorApi),
    re_path(r'^doctor/([0-9]+)$',views.doctorApi),

    re_path(r'^specialize$',views.specializeApi),
    re_path(r'^specialize/([0-9]+)$',views.specializeApi),

    re_path(r'^record$',views.recordApi),
    re_path(r'^record/([0-9]+)$',views.recordApi),

    re_path(r'^query1$',views.query1Api),
    re_path(r'^query1/([0-9]+)$',views.query1Api),
]