from rest_framework import serializers

# import Model attached to this serializer
from .models import Task


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = "__all__"
