from django.db import models

# Create your models here.


class Task(models.Model):
    """ Creating Task Model Class, this will define db fields """

    # Status Choice
    STATUS_CHOICES = [
        ("CREATED", 'Created'),
        ("STARTED", 'Started'),
        ("MIDWAY", 'Midway'),
        ("COMPLETED", 'Completed')
    ]

    task = models.CharField(max_length=100)
    summary = models.TextField()
    created = models.DateTimeField(auto_now=False, auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True, auto_now_add=False)
    status = models.CharField(
        max_length=10, choices=STATUS_CHOICES, default="CREATED")

    def __str__(self):
        return self.name
