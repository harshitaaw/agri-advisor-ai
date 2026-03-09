"""
URL configuration for sitecore project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from pages import views as pages
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', pages.dashboard, name='home'),
    path('features/', pages.features, name='features'),
    path('diagnosis/', pages.diagnosis, name='diagnosis'),
    path('schemes/', pages.schemes, name='schemes'),
    path('assistant/', pages.assistant, name='assistant'),
    path('privacy/', pages.privacy, name='privacy'),
    path('dashboard/', pages.dashboard, name='dashboard'),
    path('login/', pages.login_page, name='login'),
    path('logout/', pages.logout_page, name='logout'),
    path('register/', pages.register_page, name='register'),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
