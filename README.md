<div align="center">
  <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&h=300&auto=format&fit=crop" width="100%" alt="Job Portal Banner" style="border-radius: 15px;">
  <br />
  <br />
  <h1>🚀 Next-Gen Job Portal</h1>
  <p>A modern, full-stack platform connecting top talent with amazing opportunities.</p>
  
  [![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=for-the-badge)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white&style=for-the-badge)](https://vitejs.dev/)
  [![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-38B2AC?logo=tailwindcss&logoColor=white&style=for-the-badge)](https://tailwindcss.com/)
  [![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white&style=for-the-badge)](https://nodejs.org/)
  [![Express.js](https://img.shields.io/badge/-Express.js-000000?logo=express&logoColor=white&style=for-the-badge)](https://expressjs.com/)
  [![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white&style=for-the-badge)](https://www.mongodb.com/)
</div>

<hr/>

## 🎯 Overview

The **Next-Gen Job Portal** is a highly dynamic, production-ready MERN stack web application tailored to simplify and optimize the recruitment process. It features distinct role-based flows (Employers and Job Seekers) powered by lightning-fast search, robust state management, secure file uploads, and breathtaking UI experiences designed with Framer Motion, Radix Primitives, and Tailwind CSS.

## ✨ Key Features

### 🧑‍💻 For Job Seekers
- 🔍 **Advanced Search:** Filter roles intuitively by location, category, and precise salary ranges.
- 📄 **Frictionless Application:** Seamless one-click applications with PDF resume parsing and secure uploads via **Cloudinary**.
- 👤 **Dynamic Profiling:** Build a rich personal portfolio, add core skills, and track live application statuses.
- 🔖 **Save for Later:** Bookmark intriguing opportunities to revisit them anytime.

### 🏢 For Employers (Recruiters)
- 🚀 **Effortless Job Posting:** Create, edit, and publish job listings with granular detailed criteria.
- 📊 **Robust Applicant Tracking (ATS):** A single pane of glass to view candidates and seamlessly update evaluation stages (e.g., Pending, Interviewing, Accepted, Rejected).
- 🏭 **Company Dashboards:** Register company details, logos, websites, and present your brand dynamically to thousands of job seekers.

### ⚙️ Under The Hood
- 🔐 **Bulletproof Security:** JWT-based secure authentication flow baked alongside `bcrypt` password encryption.
- 🎨 **Pixel-Perfect Aesthetics:** Completely responsive architecture leveraging customized Radix UI elements with highly fluid page transitions via Framer Motion.
- 🔔 **Instant Feedback:** Stunning, unobtrusive real-time toast notifications guiding users every step of the way.

---

## 🛠️ Tech Stack & Tooling

### ⚛️ Frontend Architecture
- **Framework:** React 18 powered by Vite (for hyper-fast HMR)
- **Design System:** Tailwind CSS, custom configuration, automated class merging (`clsx`, `tailwind-merge`)
- **Components:** Radix UI Primitives (Select, Avatar, Dialog, Popover), Embla Carousel
- **Animations:** Framer Motion, Tailwind CSS Animate
- **State Symphony:** Redux Toolkit & `react-redux` synchronized seamlessly with `redux-persist`
- **Network Requests:** Axios with pre-configured interceptors

### 🟢 Backend Architecture
- **Core Engine:** Node.js, Express.js (Restful API compliance)
- **Database & ODMs:** MongoDB & Mongoose optimized queries
- **Auth & Session:** JSON Web Tokens (JWT), `cookie-parser`
- **Media Pipeline:** Multer (Memory Storage), DataURI, integrated directly to Cloudinary CND.

---

## 📂 System Architecture

```text
Job-Portal/
├── backend/                  # Monolithic Express API Core
│   ├── controllers/          # Business logic handlers
│   ├── middlewares/          # Role checkers, Auth gates, Multer configurations
│   ├── models/               # Mongoose strict schemas
│   ├── routes/               # API endpoint orchestration
│   ├── utils/                # DB Connectors, Cloudinary initializers
│   └── index.js              # Environment setup & application mounting
└── frontend/                 # High-performance Vite Client
    ├── public/               # Static assets
    ├── src/
    │   ├── components/       # Component-driven reusable blocks (Buttons, Navs, Modals)
    │   ├── redux/            # Slices, Store configuration, Persist Configs
    │   └── ...               # Master Layouts, Pages, Contexts
    ├── tailwind.config.js    # Design token definitions
    └── package.json          # Workspace dependency trees
```

---

## 🚀 Getting Started

Launch your own deployment right away! Follow these sequential steps.

### 1. Prerequisites
Ensure you have the following installed locally:
- **Node.js** (LTS version v18+ recommended)
- **MongoDB** (Local instance or a free MongoDB Atlas URI)
- **Cloudinary Account** (Required for images and resumes to work properly)

### 2. Grab the Code
```bash
git clone https://github.com/khushipriyadarshni/Job-Portal
cd Job-Portal
```

### 3. Spin up the Backend Server

Navigate into the backend ecosystem and inject the dependencies:
```bash
cd backend
npm install
```

**🔐 Environment Injection:**
Create a `.env` file at the root of the `/backend` directory:
```env
PORT=8000
MONGO_URI=<your-mongodb-atlas-or-local-uri>
JWT_SECRET=<a-very-strong-cryptographic-secret>

# Media CDN Config
CLOUD_NAME=<cloudinary_cloud_name>
API_KEY=<cloudinary_api_key>
API_SECRET=<cloudinary_api_secret>
```

**🔥 Ignite the API:**
```bash
npm run dev
```
*(You should see "Server running at port 8000" and "Connected to MongoDB" messages)*

### 4. Boot the Frontend Client

Spawn a new terminal process and navigate into the UI application:
```bash
cd frontend
npm install
```

**⚡ Start the Vite Dev Server:**
```bash
npm run dev
```
*(Witness the blazing fast boot up on `http://localhost:5173`)*

---

## 🤝 Contribution Guidelines
This project thrives on community feedback. If you have an idea that maps to our vision, here's how to push:

1. **Fork the Project**
2. **Checkout a Feature Branch** (`git checkout -b feature/EpicEnhancement`)
3. **Commit Your Code** (`git commit -m 'feat: Add an EpicEnhancement'`)
4. **Push Upstream** (`git push origin feature/EpicEnhancement`)
5. **Open a PR**

## 📜 Legal & Licensing
Distributed and strictly governed under the **ISC License**. Reference the enclosed `package.json` for technical details.

<hr/>

<div align="center">
  <p>Engineered with ❤️ for the Dev Community.</p>
</div>
