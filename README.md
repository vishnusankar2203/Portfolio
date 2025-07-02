# Vishnu's Portfolio

A modern, responsive, and customizable developer portfolio built with React, Vite, and Tailwind CSS. This project is always in dark mode for a sleek, professional look.

---

## 🚀 Features

- **Beautiful UI:** Clean, modern design with smooth animations and permanent dark mode.
- **Fully Responsive:** Looks great on all devices.
- **Easy Customization:** Modular components and Tailwind utility classes.
- **Project & Skills Showcase:** Highlight your work and tech stack.
- **Contact Section:** Call-to-action for collaboration (shows a toast notification).

---

## 🛠️ Tech Stack

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Lucide React Icons](https://lucide.dev/)
- [Radix UI Toast](https://www.radix-ui.com/docs/primitives/components/toast)
- [React Router v7](https://reactrouter.com/)

---

## 📦 Project Structure

```
Vishnu portfolio/
├── public/
│   └── projects/           # Project images
├── src/
│   ├── assets/             # Static assets (e.g., SVGs)
│   ├── components/         # All UI components
│   │   ├── ui/             # UI primitives (toast, toaster)
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   ├── pages/              # Page components (Home, NotFound)
│   ├── App.jsx             # Main app entry
│   ├── main.jsx            # ReactDOM render
│   └── index.css           # Tailwind and global styles
├── index.html              # App entry HTML
├── package.json            # Project metadata & scripts
└── README.md               # This file
```

---

## 🖥️ Getting Started

### 1. **Clone the repository**
```sh
git clone https://github.com/vishnusankar2203/Portfolio.git
cd "Vishnu portfolio"
```

### 2. **Install dependencies**
```sh
npm install
```

### 3. **Run the development server**
```sh
npm run dev
```
- Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. **Build for production**
```sh
npm run build
```

### 5. **Preview production build**
```sh
npm run preview
```

---

## 🧩 Main Components

- **Navbar:** Responsive navigation bar.
- **HeroSection:** Eye-catching intro with your name and tagline.
- **AboutSection:** Bio, experience, and service highlights (AI/ML, Full Stack, System Design).
- **SkillsSection:** Showcase your tech stack.
- **ProjectsSection:** Display your best projects with images and links.
- **ContactSection:** Call-to-action for collaboration (shows a toast, can be extended to send emails).
- **Footer:** Social links and copyright.
- **StarBackground:** Animated background effect.
- **UI/Toast:** Custom toast notifications.

---

## ✏️ Customization

- **Update your info:** Edit the content in `src/components/HeroSection.jsx`, `AboutSection.jsx`, `SkillsSection.jsx`, `ProjectsSection.jsx`, and `ContactSection.jsx`.
- **Add projects:** Place images in `public/projects/` and update the projects array in `ProjectsSection.jsx`.
- **Change theme colors:** Edit `index.css` and Tailwind config if needed.
- **Add/remove sections:** Modify `src/pages/Home.jsx` to include or remove sections.

---

## 📬 Contact Form

If you want to enable real email sending in the future, you can integrate with a service like EmailJS, Formspree, or a custom backend.

---

## 📝 Linting & Code Quality

- Run `npm run lint` to check for code style and errors.
- Uses ESLint with React and Tailwind plugins.

---

## 🛠️ Deployment

- You can deploy the production build to Vercel, Netlify, GitHub Pages, or any static hosting provider.
- The output will be in the `dist/` folder after running `npm run build`.

---

## 🙏 Credits

- [Lucide Icons](https://lucide.dev/)
- [Radix UI](https://www.radix-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

---


