from django.db import models

# Create your models here.
from django.db import models


class University(models.Model):
    """
    Represents a university in the system.
    """

    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name