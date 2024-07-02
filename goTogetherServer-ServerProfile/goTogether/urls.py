from django.urls import path, include
# from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from goTogether import views

#api versioninig 

router = routers.DefaultRouter()
router.register(r'trip', views.TripView, 'trip')
router.register(r'profile', views.ProfileView, 'profile')
urlpatterns = [
    path("api/v1/", include(router.urls)),
    # path("docs/", include_docs_urls(title="Go Together API"))
]

#http://localhost:8000/goTogether/api/v1/trip