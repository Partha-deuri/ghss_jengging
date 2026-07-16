# GHSS Jengging - Official Website & Admin Portal

[View live page](https://ghssjengging.com) | [Alternate link](https://school-website2-0l1u.onrender.com)

---

## 🏫 Overview
This project is the official full-stack web application for Government Higher Secondary School (GHSS) Jengging. It features a public-facing website for students and parents, alongside a fully secured, authenticated Admin Dashboard for school administrators to seamlessly manage announcements, facilities, and CBSE mandatory public disclosures.

## 🛠️ Tech Stack
* **Frontend:** React.js, Tailwind CSS, Vite
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **Authentication:** JSON Web Tokens (JWT)
* **File Storage:** Cloudinary (Configured for Images & PDFs)
* **Deployment:** Render (Backend), Hostinger (Custom Domain & DNS)

## ✨ Key Features
* **Robust Security:** JWT-based authentication with strict frontend clock-checking and backend cryptographic signature verification (via a dedicated `POST /auth/verify` route) to prevent unauthorized access.
* **Cloudinary File Management:** Direct uploading of images and PDF documents from the admin panel to cloud storage, integrated directly with MongoDB.
* **Dynamic Content Management:** Form-driven management of school facilities, public announcements, and CBSE Mandatory Disclosures (including UDISE codes, safety certificates, and board results).
* **Automated Keep-Alive:** Configured with a background cron job (timezone-aware for IST) pinging a lightweight `/api/ping` route to prevent the Render free-tier backend from sleeping during school hours.
* **CORS & Domain Whitelisting:** Strictly configured Cross-Origin Resource Sharing (CORS) to only accept requests from the official local and production domains.

## 🚀 Local Development Setup

### Prerequisites
* Node.js installed
* MongoDB Atlas cluster (or local MongoDB instance)
* Cloudinary account

### 1. Clone the Repository
```bash
git clone <your-repository-url>
```

### 2. Backend Setup
Navigate to the backend directory and install dependencies:
```bash
cd backend
npm install
```

Create a `.env` file in the root of the `backend` directory with the following variables:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_jwt_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Start the backend server:
```bash
npm run dev
```

### 3. Frontend Setup
Navigate to the frontend directory and install dependencies:
```bash
cd frontend
npm install
```

Create a `.env` file in the root of the `frontend` directory:
```env
VITE_BASE_URL=http://localhost:5000/api
```

Start the React development server:
```bash
npm run dev
```

## 🌐 Deployment Notes
* **Environment Variables:** When deploying the backend to Render, ensure all variables from the local `.env` file are added to the Render Environment settings.
* **CORS:** If adding new subdomains in the future, update the `corsOptions` array in `server.js`.
* **Cloudinary PDFs:** By default, Cloudinary blocks PDF delivery. Ensure "Allow delivery of PDF and ZIP files" is checked in the Cloudinary Security Settings.

## 📂 Project Structure (High-Level)
```text
├── backend/
│   ├── models/            # Mongoose schemas (Disclosure, Announcement, etc.)
│   ├── routes/            # Express API routes
│   ├── cloudinaryConfig.js# Cloudinary & Multer configuration
│   └── server.js          # Entry point & Express setup
├── frontend/
│   ├── src/
│   │   ├── components/    # Reusable React components
│   │   ├── pages/         # Page layouts (Admin Dashboard, Public pages)
│   │   ├── services/      # API helper functions (api.js)
│   │   └── App.jsx        # Routing configuration (Protected Routes)
```

---
