from django.db import models
from django.shortcuts import render
from .models import Patient, Appointment

def indexPageView(request) :

    return render(request, 'reservation/index.html')

def loginPageView(req) :
    input = req.GET['search']

    try: 
        result = Patient.objects.get(byu_id = input)
    except :
        newP = Patient()
        newP.byu_id = input
        newP.save()
    return render(req, 'reservation/login.html')

def addPageView(request) :
    data = Appointment.objects.all()

    context = {
        "appt" : data
    }

    return render(request, 'reservation/add.html', context)