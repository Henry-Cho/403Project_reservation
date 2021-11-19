from django.db import models
from datetime import datetime, timedelta

from django.db.models.deletion import DO_NOTHING

# Create your models here.

class patient(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=50)
    byu_id = models.CharField(max_length=9, blank=True)
    password = models.CharField(max_length=50)
    patient_email = models.EmailField(max_length=100)
    patient_phone = models.CharField(max_length=13, blank=True)

    def __str__(self):
        return (self.full_name)

    @property
    def full_name(self):
         return '%s %s' % (self.first_name, self.last_name)

    def save(self):
        self.first_name = self.first_name.upper()
        self.last_name = self.last_name.upper()
        super(patient, self).save()

class doctor(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=50)
    doctor_email = models.EmailField(max_length=100)
    doctor_phone = models.CharField(max_length=13, blank=True)

    def __str__(self):
        return (self.doc_name)

    @property
    def doc_name(self):
        return 'Dr. %s' %(self.last_name)

class appointment_type(models.Model):
    description = models.CharField(max_length=100)

    def __str__(self):
        return (self.description)

class appointment(models.Model):
    type = models.ForeignKey(appointment_type, on_delete=DO_NOTHING)
    day_time = models.DateTimeField()
    doctor = models.ForeignKey(doctor, on_delete=DO_NOTHING)
    patient = models.ForeignKey(patient, on_delete=DO_NOTHING)

    def __str__(self):
        return str(self.patient)

