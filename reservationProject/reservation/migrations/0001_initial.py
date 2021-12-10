# Generated by Django 3.2.8 on 2021-12-10 05:21

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Appointment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('day_time', models.DateTimeField()),
                ('patient_id', models.CharField(max_length=9)),
                ('appointment_type', models.CharField(max_length=6)),
            ],
            options={
                'db_table': 'appointment',
            },
        ),
        migrations.CreateModel(
            name='Patient',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('byu_id', models.CharField(max_length=9)),
            ],
            options={
                'db_table': 'patient',
            },
        ),
    ]
