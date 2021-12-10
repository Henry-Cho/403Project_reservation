from django.db import models
from django.db.models.deletion import DO_NOTHING

# Create your models here.

class Patient(models.Model):
    byu_id = models.CharField(max_length=9)
    class Meta:
        db_table = "patient"

    def __str__(self):
        return self.byu_id

    def save(self):
        super(Patient, self).save()

class Appointment(models.Model):
    day_time = models.DateTimeField()
    patient_id = models.CharField(max_length=9)
    appointment_type = models.CharField(max_length=6)

    class Meta:
        db_table = "appointment"

    def __str__(self):
        return str(self.patient_id)

