from rest_framework import routers
from django.urls import path, include

from .views import TaskViewSet

router = routers.SimpleRouter()
router.register(r'task', TaskViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
