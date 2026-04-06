# 🪨 Rock Paper Scissors — Full Stack Web App
https://kaushikdacharya.github.io/rockpaper_website/

A full-stack implementation of the classic Rock-Paper-Scissors game, redesigned from an earlier desktop version (Python + wxPython) into a **modern web application** using a client-server architecture.

---

## 🚀 Overview

This project demonstrates the transition from a traditional GUI-based application to a **web-based system with API-driven communication**. The frontend interacts with a Flask backend via HTTP requests, showcasing real-world full-stack integration.

---

## 🧠 Key Highlights

### 🔹 Mathematical Game Logic (Cross Product Approach)

Instead of relying on conventional `if-else` chains, the game logic is implemented using:

* **Unit vector representations** of moves
* **Vector cross product** to determine outcomes

This approach:

* Eliminates verbose conditional logic
* Provides a clean and scalable solution
* Demonstrates applied mathematical thinking in programming

---

### 🔹 Persistent State (No Data Loss on Refresh)

* Score is stored using **localStorage**
* Ensures:

  * State persistence across page reloads
  * Zero backend storage dependency
  * Instant client-side updates

---

### 🔹 Full Stack Integration

* Frontend communicates with backend via **REST API (POST requests)**
* Uses modern JavaScript (`fetch`, `async/await`)
* Demonstrates clear separation of concerns:

  * UI → JavaScript
  * Logic → Flask API

---

## 🕹️ Features

* Interactive game interface
* Real-time result computation via API
* Persistent score tracking
* Reset functionality
* Clean and responsive UI

---

## 🛠️ Tech Stack

| Layer      | Technology                                |
| ---------- | ----------------------------------------- |
| Frontend   | HTML, CSS, JavaScript                     |
| Backend    | Flask (Python)                            |
| API        | REST (JSON over HTTP)                     |
| Deployment | GitHub Pages (Frontend), Render (Backend) |

---

## ⚙️ How It Works

1. User selects a move (Rock/Paper/Scissor)
2. Frontend sends a POST request to the Flask API
3. Backend computes result using vector cross product
4. Response is returned as JSON
5. UI updates and score is persisted locally

---

## 🌍 Live Demo

* **Frontend:** *(add your GitHub Pages URL here)*
* **Backend API:** *(add your Render URL here)*

---

## 📈 Learning Outcomes

* API design and consumption
* Frontend-backend integration
* Deployment of full-stack applications
* Replacing brute-force logic with mathematical models

---

## 🔮 Future Enhancements

* Animations and improved UX
* Multiplayer support
* Leaderboard with database integration
* Backend optimization or migration to serverless

---

## 👨‍💻 Author

**Kaushik D Acharya**
