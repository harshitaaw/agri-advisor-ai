# AgriAdvisor (Django)

Simple Django site serving a static landing page with basic JS interactions.

## Quick start

```powershell
python -m venv .venv
& .\.venv\Scripts\python -m pip install --upgrade pip
& .\.venv\Scripts\pip install django
& .\.venv\Scripts\python manage.py migrate
& .\.venv\Scripts\python manage.py runserver 127.0.0.1:8000
```

Open http://127.0.0.1:8000

## Project structure

- templates/pages/index.html
- static/styles.css, static/app.js, static/public/*
- sitecore/settings.py: STATICFILES_DIRS, TEMPLATES configured
- sitecore/urls.py -> `index` view
- pages/views.py -> renders template

## Notes

- For production, configure `ALLOWED_HOSTS`, static collection, and a WSGI server.
