from rest_framework import viewsets

from .serializers import TaskSerializer
from .models import Task
# Create your views here.


class TaskViewSet(viewsets.ModelViewSet):
    """ Simple viewset for viewing and editing"""
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
