$ErrorActionPreference = 'Stop'
$here = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $here
if (-not (Test-Path .\.venv\Scripts\python.exe)) {
  python -m venv .venv
  & .\.venv\Scripts\python -m pip install --upgrade pip
  & .\.venv\Scripts\pip install django
}
& .\.venv\Scripts\python manage.py migrate
& .\.venv\Scripts\python manage.py runserver 127.0.0.1:8000

