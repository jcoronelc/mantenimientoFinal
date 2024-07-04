from rest_framework import viewsets, generics, permissions
from .serializer import TripSerializer, ProfileSerializer, VehicleSerializer
from .models import Trip, User, Car

# Create your views here.

class TripView(viewsets.ModelViewSet):
    serializer_class = TripSerializer
    queryset = Trip.objects.all()  
    
class ProfileView(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    queryset = User.objects.all()
    
class VehicleView(viewsets.ModelViewSet):
    serializer_class = VehicleSerializer
    queryset = Car.objects.all()
    
class VehicleListByOwner(generics.ListAPIView):
    serializer_class = VehicleSerializer
    #permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user_id = self.kwargs['owner_id']
        return Car.objects.filter(owner=user_id)