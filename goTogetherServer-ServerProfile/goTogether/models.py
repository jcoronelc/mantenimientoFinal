from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here, aqui crea las tablas 

class User(models.Model):
    phoneNumber = models.CharField(max_length=20, blank=True)
    username = models.CharField(max_length=150)
    lastname = models.CharField(max_length=150)
    password = models.CharField(max_length=128)
    emailLogin = models.EmailField(unique=True)
    year = models.CharField(max_length=4,null=True, blank=True)
    month = models.CharField(max_length=2,null=True, blank=True)
    day = models.CharField(max_length=2,null=True, blank=True)
    gender = models.CharField(max_length=10, blank=True)
    country = models.CharField(max_length=100, blank=True)
    rating = models.PositiveIntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(5)],
        null=True,
        blank=True
    )
    def __str__(self):
         return f'{self.username} {self.lastname}'
    
class Car(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    plate = models.CharField(max_length=20)
    model = models.CharField(max_length=100)
    passengers = models.IntegerField(default=1)
    color = models.CharField(max_length=50)
    type = models.CharField(max_length=50, blank=True) 
    brand = models.CharField(max_length=100)

class Trip(models.Model):
    driver = models.ForeignKey(User, on_delete=models.CASCADE)
    vehicle = models.ForeignKey(Car, on_delete=models.CASCADE)
    origin = models.CharField(max_length=100, blank=True) 
    destination = models.CharField(max_length=100, blank=True)
    duration = models.CharField(max_length=100, blank=True)  # duracion viaje
    travel_date = models.DateField()  # Fecha del viaje
    pickup_time = models.TimeField()  # Hora de recogida
    arrival_time = models.TimeField() 
    passenger_count = models.PositiveIntegerField(default=1)  # nro de pasajeros
    price_per_seat = models.PositiveIntegerField(default=1)  # Precio por asiento
    checked_items = models.JSONField(default=dict)  # preferencias del viaje
    is_reservation_enabled = models.BooleanField(default=False)  # si la reserva está habilitada

    def __str__(self):
        return f'{self.origin} to {self.destination} on {self.travel_date}'


