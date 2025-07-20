# Full-Stack Egg Production Dashboard

A modern, full-stack web application for managing and visualizing poultry farm egg production data. This project features a React frontend that dynamically fetches data from a Python (Flask) backend API.

This project was evolved from an original static HTML/CSS concept into a complete client-server application to demonstrate modern web development practices.

---

### 🔴 Live Demo

* **Frontend (React on GitHub Pages):** [https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/](https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/)
* **Backend API (Flask on Render):** [https://your-api-name.onrender.com/api/eggs](https://your-api-name.onrender.com/api/eggs)

---

### 📸 Screenshot

*Replace this with a screenshot of your finished, working dashboard!*

![Dashboard Screenshot](frontend/public/images/dashboard-screenshot.png)

---

### ✨ Key Features

* **Full-Stack Architecture:** Decoupled frontend and backend for scalability and maintainability.
* **Dynamic Data:** All dashboard statistics and table data are fetched live from the backend API.
* **Component-Based UI:** Built with React, featuring reusable components for the dashboard stats and data table.
* **REST API:** A simple and effective REST API built with Python and Flask to serve production data in JSON format.
* **CI/CD Deployment:** The backend is automatically deployed on Render and the frontend on GitHub Pages with every push to the `main` branch.

---

### 🛠️ Technology Stack

| Frontend          | Backend            | Deployment        |
| ----------------- | ------------------ | ----------------- |
| React             | Python 3           | Render            |
| JavaScript (ES6+) | Flask              | GitHub Pages      |
| HTML5 / CSS3      | Gunicorn           | Git               |
| `fetch` API       |                    |                   |

---

### 🏗️ Architecture Overview

This application uses a client-server model:

1.  **Frontend (Client):** A Single-Page Application (SPA) built with React. It is responsible for rendering the user interface and fetching data from the API when the page loads. It is hosted statically on GitHub Pages.
2.  **Backend (Server):** A lightweight web server built with Flask. Its sole purpose is to expose a `/api/eggs` REST endpoint that returns the latest production data as a JSON object. It is hosted on Render.

---

### 🚀 How to Run Locally

To run this project on your local machine, you will need two terminals running simultaneously.

**1. Clone the repository:**
```bash
git clone [https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git)
cd YOUR_REPO_NAME
```

**2. Run the Backend Server:**
```bash
# Navigate to the backend directory
cd backend

# Install dependencies
pip install -r requirements.txt

# Run the Flask server
python app.py
```
*(The backend will be running on `http://127.0.0.1:5000`)*

**3. Run the Frontend Application (in a new terminal):**
```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Run the React development server
npm start
```
*(The frontend will open automatically at `http://localhost:3000`)*

> **Note:** For local testing, ensure the `fetch` URL in `frontend/src/App.js` points to `http://127.0.0.1:5000/api/eggs`.
