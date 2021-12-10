from django.db import models
from django.shortcuts import render
from .models import Patient, Appointment

def indexPageView(request) :

    return render(request, 'reservation/index.html')

def addPageView(request) :
    data = Appointment.objects.all()

    context = {
        "appt" : data
    }

    return render(request, 'reservation/add.html', context)