from django.http import JsonResponse
from accounts.models import User
from core.models import University
from django.shortcuts import redirect
from django.contrib.auth import authenticate, login


# only create a user in sign-up step
def register_user(request):

    if request.method != "POST":
        return JsonResponse({"error": "Only POST allowed"}, status=405)

    email = request.POST.get("email")
    student_id = request.POST.get("student_id")
    major = request.POST.get("major")
    university_id = request.POST.get("university")
    role = "student"
    password = request.POST.get("password")
    password_confirmation = request.POST.get("password_confirmation")

    if not all([email, student_id, major, university_id, role, password, password_confirmation]):
        return JsonResponse({"error": "All fields are required"}, status=400)

    try:
        university = University.objects.get(id=university_id)
    except University.DoesNotExist:
        return JsonResponse({"error": "University not found"}, status=404)

    if User.objects.filter(email=email).exists():
        return JsonResponse({"error": "Email already exists"}, status=400)
    
    if password != password_confirmation :
        return JsonResponse({"error": "passwords are not same"}, status=400)

    user = User.objects.create_user(
        email=email,
        student_id=student_id,
        major=major,
        university=university,
        role=role,
        password=password
    )

    login(request, user)
    redirect('dashboard/')
    return JsonResponse({
        "message": "user created successfully",
        "user_id": user.id
    }, status=201)




def login(request):
    if request.method != "POST" :
        return JsonResponse({"error": "Only POST allowed"}, status=405)

    email = request.POST.get('email')
    password = request.POST.get('password')

    if not all([email, password]):
        return JsonResponse({"error": "All fields are required"}, status=400)
    
    user = authenticate(request, email=email, password=password)

    if user is None :
        return redirect('login/').with_errors({
                'email': 'ایمیل یا رمز عبور اشتباه است.'
        })   
    else:
        login(request, user)
        return redirect("dashboard/")
    
