# agri-advisor-ai
# 🌾 AgriAdvisor

AgriAdvisor is a web-based agricultural guidance platform designed to help farmers make smarter decisions.  
The application provides crop diagnosis, AI-powered assistance, and information about government agricultural schemes in a simple and multilingual interface.

This project focuses on accessibility and usability for rural users, especially Indian farmers.

---

# 🚀 Features

### 🌱 Crop Diagnosis
Farmers can upload images of crops to identify possible diseases and receive suggested remedies.

### 🤖 AI Farming Assistant
An interactive chatbot that allows farmers to ask questions related to agriculture in **Hindi or English**.

The assistant provides practical guidance such as:

- Crop care
- Disease treatment
- Fertilizer usage
- Farming techniques

### 🏛 Government Schemes Directory
Provides information about Indian agricultural schemes in **local languages**, helping farmers access available benefits.

### 🔐 User Authentication
Users can:

- Register
- Login
- Logout
- Access a personal dashboard

Authentication is implemented using Django's built-in user system.

### 🌐 Multilingual Support
The interface supports:

- English
- Hindi

Users can dynamically switch languages within the application.

### 📱 Mobile Friendly UI
The platform is designed to work well on mobile devices for easy access in rural environments.

---

# 🛠 Tech Stack

## Backend
- Python
- Django 5.2

## Frontend
- HTML
- CSS
- JavaScript (Vanilla)

## Database
- SQLite

## Other Tools
- Font Awesome (Icons)
- Unsplash Images
- External AI API integration (Perplexity)

---

# 📂 Project Structure

```
AgriAdvisor/
│
├── pages/                # Main Django app
│   ├── migrations/
│   ├── models.py
│   ├── views.py
│   └── apps.py
│
├── sitecore/             # Django project configuration
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
│   └── asgi.py
│
├── templates/            # HTML templates
│   └── pages/
│
├── static/               # CSS, JS, Images
│   ├── styles.css
│   ├── app.js
│   └── images
│
├── db.sqlite3            # Development database
├── manage.py
└── start.ps1             # Local setup script
```

---

# ⚙️ Installation & Setup

Clone the repository

```
git clone https://github.com/yourusername/agri-advisor-ai.git
```

Navigate to the project directory

```
cd agri-advisor-ai
```

Create virtual environment

```
python -m venv venv
```

Activate virtual environment

Windows
```
venv\Scripts\activate
```

Install dependencies

```
pip install django
```

Apply migrations

```
python manage.py migrate
```

Run the development server

```
python manage.py runserver
```

Open in browser

```
http://127.0.0.1:8000
```

---

# 🧠 How It Works

The project uses Django to serve web pages and manage user authentication.

Most interactive functionality such as:

- Chat assistant
- Language switching
- Image uploads
- UI interactions

are handled using **JavaScript on the frontend**.

The chatbot communicates with an external AI API to generate responses for farming-related queries.

---

# ⚠️ Limitations

- Crop diagnosis is currently a prototype and does not include a trained machine learning model.
- SQLite is used for development and is not suitable for large-scale production.
- API keys are stored locally and should be moved to environment variables for production.

---

# 🔮 Future Improvements

Possible enhancements include:

- AI-powered crop disease detection using machine learning
- More Indian regional languages
- Weather-based crop recommendations
- Farmer community discussion forum
- Government scheme eligibility checker
- Mobile application version

---

# 👨‍💻 Author

Developed by: **HARSHITA**

This project was created as a learning project to explore Django web development and build practical solutions for agriculture.

---

# 📜 License

This project is open-source and available under the MIT License.
