from django.db import models
from django.contrib.auth.models import AbstractUser
from core.models import University, Major  # Import the University model
from django.contrib.auth.models import AbstractUser, BaseUserManager

class CustomUserManager(BaseUserManager):
    """
    Custom manager for User model where email is the unique identifiers
    for authentication instead of usernames.
    """

    def create_user(self, email, student_id, major, university, role, password=None, **extra_fields):
        """
        Create and save a regular User with the given email and password.
        """
        if not email:
            raise ValueError("The Email must be set")
        email = self.normalize_email(email)
        user = self.model(
            email=email,
            student_id=student_id,
            major=major,
            university=university,
            role=role,
            **extra_fields
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, student_id, major, university, role="admin", password=None, **extra_fields):
        """
        Create and save a SuperUser with the given email and password.
        """
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_active", True)

        return self.create_user(email, student_id, major, university, role, password, **extra_fields)


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

    major = models.ForeignKey(
        Major,
        on_delete=models.CASCADE,
        related_name='users',
        help_text="Student's major (e.g. Computer Engineering)",
        
    )

    # Role of the user in the system
    ROLE_CHOICES = (
        ("student", "Student"),
        ("admin", "Admin"),
    )

    role = models.CharField(
        max_length=10,
        choices=ROLE_CHOICES,
        help_text="The user Role in Platform"
    )

    # Define email as the USERNAME_FIELD for login
    USERNAME_FIELD = "email"

    # Fields required when creating a superuser
    REQUIRED_FIELDS = ["student_id", "major", "university", "role"]

    objects = CustomUserManager()

    registered_at = models.DateTimeField(auto_now_add=True)

    last_login = models.DateTimeField(auto_now=True)


    class Meta:
        ordering = ['-registered_at']

    
    def __str__(self):
        """
        String representation of the user.
        """
        return self.email