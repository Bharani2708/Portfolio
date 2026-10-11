# ⚡ Premium Futuristic 3D Developer Portfolio

An award-winning caliber personal developer portfolio engineered with the **MERN Stack**, **Three.js / React Three Fiber**, **Tailwind CSS v4**, and **Framer Motion**.

Designed with an obsidian cyber dark mode aesthetic, precision glassmorphism, responsive 3D quantum core visuals, and an enterprise-grade Express REST API.

---

## 🚀 Quick Start Guide

### 1. Prerequisites
* **Node.js** v18+ installed on your workstation.
* **npm** or **yarn**.

### 2. Install Dependencies
Run the install command in both `client` and `server`:
```bash
# Install frontend packages
cd client
npm install

# Install backend packages
cd ../server
npm install
```

### 3. Running in Development Mode
You can run both client and server from the root directory:

* **Frontend (Vite dev server on `http://localhost:5173`):**
  ```bash
  npm run client
  ```
* **Backend (Express API on `http://localhost:5000`):**
  ```bash
  npm run server
  ```

---

## 🛠️ Tech Stack & Architecture

### Frontend (`/client`)
* **Framework:** React 19 + Vite
* **3D Graphics:** Three.js, `@react-three/fiber`, `@react-three/drei`
* **Styling:** Tailwind CSS v4 + Custom Cyberpunk Tokens
* **Animations:** Framer Motion (smooth entrance, layout springs, active navigation indicator)
* **Icons:** Lucide React + Custom Precision SVG Brand Badges
* **Networking:** Axios API Client with graceful local fallback mode

### Backend (`/server`)
* **Runtime:** Node.js + Express.js
* **Database:** MongoDB Atlas via Mongoose ODM (with in-memory fallback if unconfigured)
* **Security:** Helmet, CORS whitelisting, Express Rate Limiter
* **Notifications:** Nodemailer (SMTP email delivery)
* **Architecture:** Modular MVC (`config`, `controllers`, `models`, `routes`, `middleware`)

---

## ⚙️ Configuration & Environment Variables

### Backend (`server/.env`)
Create `server/.env` based on `server/.env.example`:

```env
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173

# MongoDB Atlas (Optional - runs in fallback mode if blank)
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/portfolio?retryWrites=true&w=majority

# Nodemailer Email Delivery (Optional)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
EMAIL_TO=your_email@gmail.com
```

### Frontend (`client/.env`)
Optional custom backend endpoint (defaults to `/api` proxy in Vite dev mode):
```env
VITE_API_URL=http://localhost:5000/api
```

---

## 📡 REST API Specification

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | System diagnostics & MongoDB connection status |
| `GET` | `/api/projects` | Query published projects (supports `?category=` and `?featured=true`) |
| `GET` | `/api/projects/:slug` | Retrieve single project case study by slug |
| `GET` | `/api/experience` | Fetch professional milestones & internships |
| `GET` | `/api/education` | Fetch academic credentials and coursework |
| `POST` | `/api/contact` | Rate-limited, validated contact submission + email dispatch |

---

## 🎨 How to Customize Your Portfolio Data

To update all personal information, bio, skills, projects, and contact links:
1. Open [`client/src/data/portfolioData.js`](client/src/data/portfolioData.js).
2. Modify the properties (`personal`, `about`, `skills`, `projects`, `experience`, `education`, `certifications`).
3. Changes will hot-reload instantly across the entire website!

---

## 🌐 Production Deployment Guide

### Deploying the Frontend (Vercel / Netlify)
1. Push this repository to GitHub.
2. In **Vercel** or **Netlify**, import the repository.
3. Configure the build settings:
   * **Root Directory:** `client`
   * **Build Command:** `npm run build`
   * **Output Directory:** `dist`
4. Set Environment Variable:
   * `VITE_API_URL`: Your deployed backend URL (e.g. `https://your-backend.onrender.com/api`).

### Deploying the Backend (Render / Railway)
1. In **Render** or **Railway**, create a new Web Service.
2. Configure settings:
   * **Root Directory:** `server`
   * **Build Command:** `npm install`
   * **Start Command:** `npm start`
3. Add Environment Variables:
   * `NODE_ENV`: `production`
   * `CLIENT_URL`: Your deployed frontend URL (e.g. `https://your-portfolio.vercel.app`)
   * `MONGODB_URI`: Your MongoDB Atlas connection string
   * `EMAIL_USER` / `EMAIL_PASS` / `EMAIL_TO`: Your email credentials

