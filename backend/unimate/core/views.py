from inertia import render

# Create your views here.

def landing_test(request):
    return render(
        request,
        'landing/LandingPage',
        props={
            'message': 'this message is from Django landing test view!'
        }
    )