# Portfolio Website - Tanish Yadav

A modern, responsive portfolio website showcasing my skills as a **Full Stack Developer & UI/UX Designer**. Built with **React.js** and styled using **Tailwind CSS**. The website includes dynamic sections such as Hero, Services, Contact, and Social links.

---

## 🚀 Features

- **Hero Section**
  - Interactive hero section with profile image.
  - Smooth scroll navigation to sections.
  - Animated buttons with hover effects.
  - Responsive layout (image above text on mobile).

- **Services Section**
  - Cards showcasing skills/services.
  - Responsive grid: 1 column (mobile), 2 columns (tablet), 3 columns (desktop).
  - Hover effects with shadows and subtle animation.
  - Supports dark/light mode.

- **Contact Section**
  - Contact form integrated with email sending (via backend or WhatsApp link).
  - Floating WhatsApp button for direct messaging.
  - Social media links (LinkedIn, GitHub) with interactive hover effects.

- **Responsive & Mobile-First**
  - Fully responsive across all devices.
  - Optimized typography, spacing, and layout for desktop, tablet, and mobile.

- **Dark Mode Support**
  - Seamless dark/light mode experience using Tailwind dark utilities.

- **Animations**
  - Smooth fade-in and hover animations using `useIntersectionObserver` hook.
  - Interactive buttons and service cards.

---

## 🛠 Tech Stack

- **Frontend:** React.js  
- **Styling:** Tailwind CSS  
- **Icons:** React Icons (FaLinkedin, FaGithub, FaWhatsapp, etc.)  
- **Animations:** Custom intersection observer hook (`useIntersectionObserver`)  
- **Optional Backend:** Node.js + Express + Nodemailer (for email functionality)

---

## 📂 Folder Structure

my-portfolio/
│
├── public/
│ └── index.html
│
├── src/
│ ├── assets/ # Images, icons, and other assets
│ ├── components/ # React components (Hero, Services, Contact, etc.)
│ ├── hooks/ # Custom hooks (useIntersectionObserver)
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css # Tailwind CSS imports
│
├── package.json
└── README.md


