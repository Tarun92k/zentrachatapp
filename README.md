# zentrachatapp

Here’s how I approached and implemented the project step by step,
1. Initial Project Setup 
1.1. Create a GitHub Repository
Go to GitHub and create a new repository.
Clone the repository to your local machine:
1.2. Set Up Backend (Django)
Create Backend Directory:
Set Up Django Project:

created virtual environment
python -m venv env
pip install django djangorestframework django-cors-headers djangorestframework-simplejwt
django-admin startproject backend .
Commit Initial Setup:
git add .
git commit -m "Initial Django project setup"
1.3. Set Up Frontend (React)

Create Frontend Directory:
mkdir frontend
cd frontend
Initialize Frontend Project:

npx create-react-app frontend
Create users app:

Set up JWT Authentication:

Added rest_framework, users, and corsheaders to INSTALLED_APPS.
Configured JWT and CORS in settings.py.
Create Serializers and Views for registration and login in users app.

Created URLs in users/urls.py and include them in backend/urls.py.


"Implemented user authentication with JWT"

Created Serializers and Views for sending and receiving interests.

Set Up URLs for the interests app and include them in backend/urls.py.


Extend Interest model to include a chat relationship:

Created Serializers and Views for chat messages.

Tested the Chat Functionality to ensure real-time messaging works.

Create Login and Registration Components:

Store JWT Token in local storage and handle authentication state.

Create a Chat Component:

For React: Create Chat.js.



Wrote Basic Tests for critical components.


If you encounter any issues with package installations, ensure all prerequisites are installed correctly.
Make sure to activate the virtual environment before running backend commands. 
This README.md structure covers all the key aspects of the project, including setup instructions, design choices, and testing.