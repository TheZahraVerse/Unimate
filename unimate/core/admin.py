from django.contrib import admin
from django.utils import timezone
from django import forms
from django.forms.widgets import TimeInput

from .models import (
    University,
    Professor,
    Course,
    CourseOffering,
    Schedule,
    Enrollment,
    Document,
    Rating,
    Notification
)


@admin.register(University)
class UniversityAdmin(admin.ModelAdmin):
    list_display = ("id", "name")
    search_fields = ("name",)


@admin.register(Professor)
class ProfessorAdmin(admin.ModelAdmin):
    list_display = ("id", "first_name", "last_name", "university", "bio")
    search_fields = ("first_name", "last_name")
    list_filter = ("university",)


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "code", "university")
    search_fields = ("name", "code")
    list_filter = ("university",)


@admin.register(CourseOffering)
class CourseOfferingAdmin(admin.ModelAdmin):
    list_display = ("id", "course", "professor", "term", "year", "group_number", "units", "gender", "university" , "notes")
    list_filter = ("term", "year", "course", "professor" , "gender" , "group_number")
    search_fields = ("course__name", "professor__first_name", "professor__last_name")


class ScheduleAdminForm(forms.ModelForm):
    class Meta:
        model = Schedule
        fields = "__all__"

        widgets = {
            # Use HTML5 time picker
            "start_time": TimeInput(attrs={"type": "time"}),
            "end_time": TimeInput(attrs={"type": "time"}),
        }


# Admin configuration
@admin.register(Schedule)
class ScheduleAdmin(admin.ModelAdmin):
    form = ScheduleAdminForm

    list_display = (
        "course_offering",
        "weekday",
        "start_time",
        "end_time",
        "week_type",
    )


@admin.register(Enrollment)
class EnrollmentAdmin(admin.ModelAdmin):
    list_display = ("id", "student", "course_offering", "enrolled_at")
    list_filter = ("enrolled_at",)


@admin.register(Document)
class DocumentAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "course", "professor", "author", "uploaded_at")
    search_fields = ("title", "author" , "professor" , "course")


@admin.register(Rating)
class RatingAdmin(admin.ModelAdmin):
    list_display = ("id", "student", "professor", "course_offering", "score", "created_at")
    list_filter = ("score", "professor" , "student")


@admin.register(Notification)
class NotificationAdmin(admin.ModelAdmin):
    list_display = ("id", "user", "title" , "message" , "is_read", "created_at")
    list_filter = ("is_read",)
