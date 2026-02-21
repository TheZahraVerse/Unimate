from django.db import models
from django.conf import settings

# =====================================================
# University Model
# =====================================================
class University(models.Model):
    """
    Represents a university.
    Note: Based on your requirement, city is NOT included.
    """

    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.name


# =====================================================
# Professor Model
# =====================================================
class Professor(models.Model):
    """
    Represents a professor.
    Each professor belongs to one university.
    Professors have first name, last name, and biography.
    """

    university = models.ForeignKey(
        University,
        on_delete=models.CASCADE,
        related_name="professors"
    )

    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)

    bio = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"


# =====================================================
# Course Model
# =====================================================
class Course(models.Model):
    """
    Represents a course (example: Data Structures).
    This is the base course, independent of professor or semester.
    """

    name = models.CharField(max_length=255)

    code = models.CharField(
        max_length=50,
        unique=True
    )

    university = models.ForeignKey(
        University,
        on_delete=models.CASCADE,
        related_name="courses"
    )

    def __str__(self):
        return f"{self.name} ({self.code})"


# =====================================================
# Course Offering Model
# =====================================================
class CourseOffering(models.Model):
    """
    Represents a specific instance of a course.

    Example:
    Data Structures
    Professor: Dr. X
    Term: 1
    Year: 2026
    Group: 01

    Includes:
    - units
    - group number
    - gender restriction
    - notes
    """

    GENDER_CHOICES = [
        ("male", "Male"),
        ("female", "Female"),
        ("mixed", "Mixed"),
    ]

    university = models.ForeignKey(
        University,
        on_delete=models.CASCADE,
        related_name="course_offerings"
    )

    course = models.ForeignKey(
        Course,
        on_delete=models.CASCADE,
        related_name="offerings"
    )

    professor = models.ForeignKey(
        Professor,
        on_delete=models.CASCADE,
        related_name="offerings"
    )

    term = models.IntegerField()

    year = models.IntegerField()

    group_number = models.CharField(max_length=10)

    units = models.PositiveIntegerField()

    gender = models.CharField(
        max_length=10,
        choices=GENDER_CHOICES,
        default="mixed"
    )

    notes = models.TextField(blank=True, null=True)

    class Meta:
        unique_together = ('course','professor','term','year','group_number')

    def __str__(self):
        return f"{self.course.name} - {self.professor} - {self.term} {self.year}"


# =====================================================
# Schedule Model
# =====================================================
class Schedule(models.Model):
    """
    Represents class schedule.

    """

    WEEKDAY_CHOICES = [
        ("saturday", "شنبه"),
        ("sunday", "یکشنبه"),
        ("monday", "دوشنبه"),
        ("tuesday", "سه‌شنبه"),
        ("wednesday", "چهارشنبه"),
        ("thursday", "پنجشنبه"),
    ]

    WEEK_TYPE_CHOICES = [
        ("odd", "هفته فرد"),
        ("even", "هفته زوج"),
        ("both", "هر هفته"),
    ]

    course_offering = models.ForeignKey(
        CourseOffering,
        on_delete=models.CASCADE,
        related_name="schedules"
    )

    weekday = models.CharField(
        max_length=20,
        choices=WEEKDAY_CHOICES
    )

    start_time = models.TimeField()

    end_time = models.TimeField()

    week_type = models.CharField(
        max_length=10,
        choices=WEEK_TYPE_CHOICES,
        default="both"
    )

    class Meta:
        unique_together = ('course_offering', 'weekday', 'week_type', 'start_time','end_time', )

    def __str__(self):
        return f"{self.get_weekday_display()} ({self.start_time}-{self.end_time})"


# =====================================================
# Enrollment Model
# =====================================================
class Enrollment(models.Model):
    """
    Represents a student enrolling in a course offering.

    Prevent duplicate enrollment using unique constraint.
    """

    student = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="enrollments"
    )

    course_offering = models.ForeignKey(
        CourseOffering,
        on_delete=models.CASCADE,
        related_name="enrollments"
    )

    enrolled_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('student', 'course_offering')

    def __str__(self):
        return f"{self.student} enrolled in {self.course_offering}"


# =====================================================
# Document Model
# =====================================================
class Document(models.Model):
    """
    Represents shared documents.

    """

    title = models.CharField(max_length=255)

    file = models.FileField(upload_to="documents/")

    course = models.ForeignKey(
        Course,
        on_delete=models.CASCADE,
        related_name="documents"
    )

    professor = models.ForeignKey(
        Professor,
        on_delete=models.CASCADE,
        related_name="documents"
    )

    author = models.CharField(max_length=255)

    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


# =====================================================
# Rating Model
# =====================================================
class Rating(models.Model):
    """
    Students rate professors.

    Constraint:
    Each student can rate a professor only ONCE per course offering.
    """

    student = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="ratings"
    )

    professor = models.ForeignKey(
        Professor,
        on_delete=models.CASCADE,
        related_name="ratings"
    )

    course_offering = models.ForeignKey(
        CourseOffering,
        on_delete=models.CASCADE,
        related_name="ratings"
    )

    score = models.IntegerField()

    comment = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('student', 'course_offering')

    def __str__(self):
        return f"{self.student} rated {self.professor}: {self.score}"


# =====================================================
# Notification Model
# =====================================================
class Notification(models.Model):
    """
    System notifications for users.
    """

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="notifications"
    )

    title = models.CharField(max_length=255)

    message = models.TextField()

    is_read = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Notification for {self.user}: {self.title}"
