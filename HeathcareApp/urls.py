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
    re_path(r'^query2$',views.query2Api),
    re_path(r'^query3$',views.query3Api),
    re_path(r'^query4$',views.query4Api),
    re_path(r'^query5$',views.query5Api),
    re_path(r'^query6$',views.query6Api),
    re_path(r'^query7$',views.query7Api),
    re_path(r'^query8$',views.query8Api),
    re_path(r'^query9$',views.query9Api),
    re_path(r'^query10$',views.query10Api),
    re_path(r'^query11$',views.query11Api),
]