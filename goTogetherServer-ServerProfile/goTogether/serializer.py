
from rest_framework import serializers
from .models import Trip, Car, User

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        
class VehicleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = '__all__'
        
class TripSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trip
        fields = '__all__'


