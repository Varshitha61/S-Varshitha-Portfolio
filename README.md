<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# 🌟 Premium Interactive Developer Portfolio

This is a high-fidelity, interactive developer portfolio built with React 19, TypeScript, Vite, Tailwind CSS, and Framer Motion. It showcases the developer's academic path, technical skills, projects, and competitive programming stats using advanced 3D transitions and interactive animations.

---

## ✨ Features

- **Interactive 3D mechanical keycaps** for competitive programming profiles (LeetCode, CodeChef, Codeforces) rendering live ratings, problems solved, and classifications.
- **Dynamic Spotlight Cards** for technical skills detailing Programming, Frontend, Backend & APIs, Databases, and Tools.
- **Glassmorphism modal system** for fluid navigations between sections.
- **Framer Motion spring animations** and scroll-linked scale/opacity transitions.
- **Supabase-integrated contact system** to store messages.
- **Vibrant responsive design** optimized for mobile and desktop screens.

---

## 🛠️ Tech Stack

- **Framework**: React 19, Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS (via CDN)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Backend Services**: Supabase

---

## 🚀 Getting Started

Follow these steps to run the portfolio locally:

### 1. Prerequisites

Ensure you have **Node.js** installed on your machine.

### 2. Installation

Clone the repository and install the dependencies:
```bash
npm install
```

### 3. Setup Environment Variables

Create or open `.env.local` in the project root and add your Supabase configuration:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Run the Development Server

Start the Vite development server:
```bash
npm run dev
```
Open your browser and navigate to the local port displayed in the console (usually `http://localhost:5173`).

---

## 📦 Production Build

To build the project for production:
```bash
npm run build
```
The optimized bundle will be created inside the `dist` directory, ready to be deployed to Vercel, Netlify, or GitHub Pages.
