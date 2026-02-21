from django.contrib import admin

# Register your models here.
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User


@admin.register(User)
class UserAdmin(BaseUserAdmin):
    model = User

    ordering = ("email",)  #  Fix for removed username
    
    # Columns shown in the user list page
    list_display = (
        "email",
        "get_full_name",
        "major",
        "student_id",
        "university",
        "role",
        "is_staff",
    )

    # Make full name a readable column
    def get_full_name(self, obj):
        """
        Returns the user's full name.
        """
        return obj.get_full_name()

    get_full_name.short_description = "Full Name"