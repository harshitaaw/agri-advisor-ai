from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User


def index(request):
    return render(request, 'pages/index.html')


def features(request):
    return render(request, 'pages/features.html')


def diagnosis(request):
    return render(request, 'pages/diagnosis.html')


def schemes(request):
    return render(request, 'pages/schemes.html')


def assistant(request):
    return render(request, 'pages/assistant.html')


def privacy(request):
    return render(request, 'pages/privacy.html')


def dashboard(request):
    return render(request, 'pages/dashboard.html')


def login_page(request):
    if request.method == 'POST':
        ident = (request.POST.get('email') or '').strip()
        password = (request.POST.get('password') or '').strip()
        user = None
        # Try as username first
        user = authenticate(request, username=ident, password=password)
        if not user and '@' in ident:
            # Attempt lookup by email
            try:
                from django.contrib.auth.models import User
                u = User.objects.filter(email=ident).first()
                if u:
                    user = authenticate(request, username=u.username, password=password)
            except Exception:
                user = None
        if user:
            login(request, user)
            return redirect('dashboard')
        else:
            return render(request, 'registration/login.html', { 'error': 'Invalid credentials' })
    return render(request, 'registration/login.html')


def register_page(request):
    if request.method == 'POST':
        name = (request.POST.get('username') or '').strip()
        email = (request.POST.get('email') or '').strip()
        p1 = (request.POST.get('password1') or '').strip()
        p2 = (request.POST.get('password2') or '').strip()
        if name and p1 and p1 == p2:
            # Create Django user if not exists
            username_key = name
            if not User.objects.filter(username=username_key).exists():
                user = User.objects.create_user(username=username_key, email=email or '', password=p1)
                user.save()
        return redirect('login')
    return render(request, 'registration/register.html')


def logout_page(request):
    try:
        logout(request)
    finally:
        return redirect('login')
