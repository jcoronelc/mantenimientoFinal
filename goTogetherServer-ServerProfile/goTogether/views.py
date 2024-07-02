from rest_framework import viewsets
from .serializer import TripSerializer, ProfileSerializer
from .models import Trip, User

# Create your views here.

class TripView(viewsets.ModelViewSet):
    serializer_class = TripSerializer
    queryset = Trip.objects.all()  
    
class ProfileView(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    queryset = User.objects.all()