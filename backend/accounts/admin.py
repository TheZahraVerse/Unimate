# accounts/admin.py
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.forms import UserChangeForm, UserCreationForm
from .models import User


class CustomUserCreationForm(UserCreationForm):
    """
    Custom form for creating new users in the admin panel.
    Since we removed the username field, we need to specify which fields
    should be displayed when creating a user.
    """
    class Meta:
        model = User
        # Only include fields that exist in our custom User model
        fields = ('email', 'student_id', 'major', 'university', 'role')


@admin.register(User)
class UserAdmin(BaseUserAdmin):
    """
    Custom admin configuration for the User model.
    This replaces the default UserAdmin which expects a username field.
    """
    model = User
    add_form = CustomUserCreationForm  # Use our custom form for user creation
    
    # Sort users by email instead of the removed username field
    ordering = ("email",)
    
    # Columns displayed in the user list page
    list_display = (
        "email",
        "get_full_name",
        "major",
        "student_id",
        "university",
        "role",
        "is_staff",
    )
    
    # Fields that will be searched when using the search box
    search_fields = ("email", "student_id", "major", "first_name", "last_name")
    
    # Filters available in the sidebar
    list_filter = ("role", "is_staff", "is_superuser", "university")
    
    # Fieldset configuration for the user edit page
    # This replaces the default fieldsets that contain 'username'
    fieldsets = (
        (None, {"fields": ("email", "password")}),  # Login credentials
        ("Personal info", {"fields": ("first_name", "last_name", "student_id", "major", "university")}),  # User details
        ("Permissions", {"fields": ("role", "is_active", "is_staff", "is_superuser", "groups", "user_permissions")}),  # Access control
        ("Important dates", {"fields": ("last_login", "date_joined")}),  # Timestamps
    )
    
    # Fieldset configuration for the "Add user" page
    # This removes username from the creation form
    add_fieldsets = (
        (None, {
            "classes": ("wide",),
            "fields": ("email", "first_name", "last_name", "student_id", "major", "university", "role", "password1", "password2"),
        }),
    )
    
    def get_full_name(self, obj):
        """
        Returns the user's full name.
        This method makes the full name displayable in the list view.
        
        Args:
            obj: The User instance
            
        Returns:
            str: The user's full name (first_name + last_name)
        """
        return obj.get_full_name()
    
    # Set a human-readable column header for this method
    get_full_name.short_description = "Full Name"