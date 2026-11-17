# VELOUR & WEAVE - Complete Deployment Guide

This guide walks you through deploying the **Velour & Weave** luxury textile platform:
- **Frontend**: React + Vite deployed to **Cloudflare Pages**
- **Backend**: Node.js + Express.js API deployed to **Render**
- **Database**: **MongoDB Atlas** cloud cluster

---

## Architecture Overview

```
┌─────────────────────────────────┐       ┌─────────────────────────────────┐       ┌───────────────────────────────┐
│        Cloudflare Pages         │       │          Render Web API         │       │         MongoDB Atlas         │
│  React + Vite + Tailwind CSS    │ ----> │    Node.js + Express Server     │ ----> │  Collections:                 │
│  https://velour-weave.pages.dev │       │  https://api-velour.onrender... │       │  - textiles                   │
│                                 │       │                                 │       │  - consultations              │
│  Env:                           │       │  Env:                           │       │  - reviews                    │
│  VITE_API_URL=https://api...    │       │  MONGODB_URI=mongodb+srv://...  │       │  - swatchrequests             │
│                                 │       │  CLIENT_URL=https://velour...   │       │  - subscribers                │
└─────────────────────────────────┘       └─────────────────────────────────┘       └───────────────────────────────┘
```

---

## 1. MongoDB Atlas Setup

1. **Log in to MongoDB Atlas**:
   - Go to [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas) and log in or create an account.
2. **Create a Database Cluster**:
   - Click **Create Deployment** (choose the free **M0 Sandbox** tier in your preferred region).
3. **Configure Database Security**:
   - Under **Database Access**, create a database user (e.g. `velour_admin`) with a secure password. Select role **Read and write to any database**.
   - Under **Network Access**, click **Add IP Address** and select **Allow Access from Anywhere** (`0.0.0.0/0`) so Render instances can connect.
4. **Get Connection String**:
   - Go to **Database Deployments** -> click **Connect** -> choose **Drivers (Node.js)**.
   - Copy the URI, which looks like:
     ```
     mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/velour_weave?retryWrites=true&w=majority
     ```
   - Replace `<username>` and `<password>` with your database user credentials.

---

## 2. Backend Deployment on Render

1. **Log in to Render**:
   - Go to [https://render.com](https://render.com) and log in with GitHub.
2. **Create a New Web Service**:
   - Click **New +** -> **Web Service**.
   - Select your GitHub repository.
3. **Configure the Service Settings**:
   - **Name**: `velour-weave-api` (or your preferred name)
   - **Region**: Choose the region closest to your MongoDB Atlas cluster (e.g., Oregon, Frankfurt, Singapore).
   - **Root Directory**: `server`
   - **Environment**: `Node`
   - **Build Command**:
     ```bash
     npm install
     ```
   - **Start Command**:
     ```bash
     npm start
     ```
   - **Instance Type**: Free
4. **Configure Environment Variables**:
   Click **Environment** -> **Add Environment Variable**:
   | Key | Value |
   |---|---|
   | `NODE_ENV` | `production` |
   | `PORT` | `5000` |
   | `MONGODB_URI` | `mongodb+srv://<user>:<password>@cluster0.xxxxx.mongodb.net/velour_weave?retryWrites=true&w=majority` |
   | `CLIENT_URL` | `https://<your-cloudflare-pages-domain>.pages.dev` (or `*` temporarily) |
5. **Deploy**:
   - Click **Create Web Service**.
   - Once deployed, copy your backend URL (e.g., `https://velour-weave-api.onrender.com`).
   - Test health endpoint: `https://velour-weave-api.onrender.com/api/health` — it will return `{ "status": "ok", "service": "VELOUR & WEAVE API", "database": "connected" }`.

---

## 3. Frontend Deployment on Cloudflare Pages

1. **Log in to Cloudflare**:
   - Go to [https://dash.cloudflare.com/](https://dash.cloudflare.com/) and navigate to **Workers & Pages**.
2. **Create Application**:
   - Click **Create Application** -> **Pages** -> **Connect to Git**.
   - Select your GitHub repository.
3. **Configure Build Settings**:
   - **Project Name**: `velour-weave`
   - **Framework Preset**: `Vite`
   - **Root Directory**: `client`
   - **Build Command**:
     ```bash
     npm run build
     ```
   - **Build Output Directory**:
     ```bash
     dist
     ```
4. **Configure Environment Variables**:
   Expand **Environment variables** and add:
   | Variable name | Value |
   |---|---|
   | `VITE_API_URL` | `https://<your-render-backend-url>.onrender.com/api` |
5. **Deploy**:
   - Click **Save and Deploy**.
   - Cloudflare will build the Vite project and provide your live URL (e.g. `https://velour-weave.pages.dev`).
6. **SPA Routing Notice**:
   - The file `client/public/_redirects` containing `/* /index.html 200` is pre-configured to ensure all React Router subpaths (`/catalog`, `/about`, `/history`, `/testimonials`, `/book`, `/admin`) refresh smoothly without 404s.

---

## 4. Local Development

To run the application locally:

### 1. Start the Backend Server:
```bash
cd server
npm install
npm run dev
```
The server will start at `http://localhost:5000` with automatic MongoDB connection or in-memory fallback.

### 2. Start the Frontend Client:
```bash
cd client
npm install
npm run dev
```
The Vite development server will start at `http://localhost:5173`.

---

## 5. Seed Data & Verification

- On the first run, the backend automatically seeds the database with the full collection of luxury textiles, consultations, and client reviews matching the original Stitch design system.
- To re-seed at any time, run:
  ```bash
  cd server
  npm run seed
  ```
