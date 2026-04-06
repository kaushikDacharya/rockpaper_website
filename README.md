# 🪨 Rock Paper Scissors — Full Stack Version
https://kaushikdacharya.github.io/rockpaper_website/

An upgraded version of my earlier Rock-Paper-Scissors project (originally built using Python + wxPython), now rebuilt as a **full-stack web application** using a modern frontend-backend architecture.

---

## 🚀 What's New

* 🌐 **Frontend (UI):** Built using HTML, CSS, and JavaScript
* ⚙️ **Backend (API):** Powered by Flask
* 🔗 **API Integration:** Seamless communication between frontend and backend using `fetch` and async/await
* ☁️ **Deployed Online:**

  * Frontend → GitHub Pages
  * Backend → Render

---

## 🧠 Core Logic (The Cool Part)

Instead of using traditional `if-else` conditions to determine the winner, this project uses a **mathematical approach**:

* Each move (rock, paper, scissor) is represented as a **unit vector**
* The result is computed using the **cross product of vectors**

This eliminates bulky condition checks and makes the logic:

* cleaner
* more elegant
* mathematically intuitive

---

## 💾 Persistent Score System

The score is stored using **localStorage**, which means:

* ✅ Score persists even after refreshing the page
* ✅ No backend database required
* ✅ Instant and efficient

---

## 🕹️ Features

* Interactive UI with buttons
* Real-time game results
* Score tracking
* Reset functionality
* Backend-powered result computation

---

## 🛠️ Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Flask (Python)
* **Deployment:**

  * GitHub Pages (Frontend)
  * Render (Backend)

---

## 📌 How It Works

1. User selects Rock / Paper / Scissor
2. JavaScript sends a POST request to Flask API
3. Backend computes result using vector cross product
4. Result is sent back and displayed
5. Score updates and persists using localStorage

---

## 🎯 Why This Project

This project demonstrates:

* Transition from desktop apps → web apps
* Understanding of APIs and client-server architecture
* Creative problem-solving using math instead of brute logic
* Real-world deployment workflow

---

## 🌍 Live Demo

Frontend: *(your GitHub Pages link here)*
Backend: *(your Render link here)*

---

## 💡 Future Improvements

* Animations and sound effects
* Leaderboard system
* Multiplayer support
* Pure frontend version (no backend latency)

---

## 👨‍💻 Author

Kaushik D Acharya
