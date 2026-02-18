from django.db import models
from django.contrib.auth.models import AbstractUser

from django.contrib.auth.models import AbstractUser
from django.db import models
from core.models import University  # Import the University model


class User(AbstractUser):
    """
    Custom user model for the Unimate project.

    We remove the default username field and use email for authentication.
    Each user must belong to a university and have a student ID.
    """

    # Remove the default username field
    username = None

    # Use email as the unique identifier for authentication
    email = models.EmailField(unique=True)

    # Required student ID for university identification
    student_id = models.CharField(
        max_length=20,
        unique=True,
        help_text="University student identification number"
    )

    # Each user must be associated with a university
    university = models.ForeignKey(
        University,
        on_delete=models.CASCADE,
        related_name="users",
        help_text="The university this user belongs to"
    )

    major = models.CharField(
        max_length=100,
        help_text="Student's major (e.g. Computer Engineering)"
    )
    
    # Role of the user in the system
    ROLE_CHOICES = (
        ("student", "Student"),
        ("admin", "Admin"),
    )

    role = models.CharField(
        max_length=10,
        choices=ROLE_CHOICES,
        help_text="Role of the user in the platform"
    )

    # Define email as the USERNAME_FIELD for login
    USERNAME_FIELD = "email"

    # Fields required when creating a superuser
    REQUIRED_FIELDS = ["student_id", "university", "role"]

    def __str__(self):
        """
        String representation of the user.
        """
        return self.email