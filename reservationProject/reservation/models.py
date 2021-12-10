from django.db import models
from django.db.models.deletion import DO_NOTHING

# Create your models here.

class Patient(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=50)
    byu_id = models.CharField(max_length=9)
    class Meta:
        db_table = "patient"

    def __str__(self):
        return self.full_name

    @property
    def full_name(self):
        return '%s %s' % (self.first_name, self.last_name)

    def save(self):
        self.first_name = self.first_name.upper()
        self.last_name = self.last_name.upper()
        super(Patient, self).save()

class Appointment(models.Model):
    day_time = models.DateTimeField()
    patient_id = models.CharField(max_length=9)
    appointment_type = models.CharField(max_length=6)

    class Meta:
        db_table = "appointment"

    def __str__(self):
        return str(self.patient_id)

