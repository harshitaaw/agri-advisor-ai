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
- Pest management
- Weather advice
- Best practices for farming

### 📋 Government Schemes
Access to information about various government agricultural schemes, eligibility criteria, and application processes.

---

# 🛠️ Tech Stack

- **Backend**: Django (Python)
- **Frontend**: HTML, CSS, JavaScript
- **Database**: SQLite (for development)
- **AI Integration**: Perplexity API for chatbot functionality
- **Styling**: Custom CSS with responsive design
- **Icons**: Font Awesome

---

# 🚀 Getting Started

### Prerequisites
- Python 3.8+
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/harshitaaw/agri-advisor-ai.git
   cd agri-advisor-ai
   ```

2. **Create a virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run migrations**
   ```bash
   python manage.py migrate
   ```

5. **Start the development server**
   ```bash
   python manage.py runserver
   ```

6. **Open your browser**
   Navigate to `http://127.0.0.1:8000`

---

# 📁 Project Structure

```
agri-advisor-ai/
├── manage.py
├── sitecore/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
│   └── asgi.py
├── pages/
│   ├── __init__.py
│   ├── apps.py
│   ├── models.py
│   ├── views.py
│   └── migrations/
├── templates/
│   └── pages/
│       ├── index.html
│       ├── dashboard.html
│       ├── diagnosis.html
│       ├── features.html
│       ├── assistant.html
│       ├── schemes.html
│       ├── privacy.html
│       ├── login.html
│       └── register.html
├── static/
│   ├── styles.css
│   ├── app.js
│   ├── agri-config.js
│   └── public/
├── staticfiles/
└── db.sqlite3
```

---

# 🌐 Usage

1. **Home Page**: Overview of features and navigation
2. **Crop Diagnosis**: Upload crop images for disease detection
3. **AI Assistant**: Chat in Hindi or English for farming advice
4. **Government Schemes**: Browse and learn about available schemes
5. **User Authentication**: Register/Login for personalized experience

---

# 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

# 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

# 📞 Contact

For questions or support, please open an issue on GitHub.
