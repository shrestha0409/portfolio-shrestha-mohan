# Shrestha Mohan — Developer Portfolio

A premium, modern developer portfolio built with React + Vite, Tailwind CSS, Framer Motion, and Three.js.

## ✨ Features

- 🎨 Dark futuristic theme with glassmorphism effects
- 🔮 3D animated icosahedron (Three.js / React Three Fiber)
- ⌨️ Typewriter animation for roles
- 🌐 Animated particle background
- 🖱️ Custom cursor with follower
- 📊 Scroll progress bar
- ⚡ Loading screen
- 🌙 Dark/Light mode toggle
- 📱 Fully responsive (mobile-first)
- 🎞️ Framer Motion scroll-reveal animations
- 📬 EmailJS contact form ready

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## 🔧 Configuration

### 1. Personal Links
Update all placeholder URLs in:
- `src/components/Hero.jsx` — GitHub, LinkedIn, Email
- `src/components/Contact.jsx` — Social links
- `src/components/Footer.jsx` — Social links
- `src/components/GitHub.jsx` — `username` variable

### 2. Resume
Place your resume PDF at `public/resume.pdf`

### 3. EmailJS (Contact Form)
Install and configure:
```bash
npm install @emailjs/browser
```
Then in `src/components/Contact.jsx`, replace the simulated send with:
```js
import emailjs from '@emailjs/browser';
await emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form, "YOUR_PUBLIC_KEY");
```

### 4. GitHub Username
In `src/components/GitHub.jsx`, update:
```js
const username = "YOUR_GITHUB_USERNAME";
```

## 🌐 Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or push to GitHub and import at vercel.com
```

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf          ← Add your resume here
├── src/
│   ├── components/
│   │   ├── Cursor.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── Loader.jsx
│   │   ├── Navbar.jsx
│   │   ├── Particles.jsx
│   │   ├── TypingText.jsx
│   │   ├── Hero3D.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Certifications.jsx
│   │   ├── GitHub.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vercel.json
└── README.md
```

## 🛠️ Tech Stack

- **React 18** + **Vite**
- **Tailwind CSS 3**
- **Framer Motion**
- **Three.js** + **@react-three/fiber** + **@react-three/drei**
- **React Icons**
