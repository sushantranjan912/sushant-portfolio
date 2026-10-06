# Sushant Ranjan — Personal Developer Portfolio

> **High-Performance, Recruiter-Focused Personal Portfolio Website**  
> Built with pure **HTML5**, **CSS3**, and **Vanilla JavaScript** (Zero Frameworks, Zero Dependencies). Ready for instant one-click deployment on **Vercel** or **GitHub Pages**.

---

## 👨‍💻 Portfolio Overview

This personal developer portfolio is custom-engineered for **Sushant Ranjan**, a Computer Science & Engineering student at Lovely Professional University, competitive programmer, and full-stack software developer. 

Designed specifically for technical recruiters, engineering hiring managers, internship applications, and SDE opportunities, this site emphasizes:
- **Clean Engineering & Systems Architecture**
- **Data Structures & Algorithms (750+ algorithmic solutions solved)**
- **Real-World Full-Stack Product Delivery**
- **Speed, Responsiveness, & Web Accessibility (WCAG 2.1 AA compliant)**

---

## ⚡ Live Demos & Links

- **Portfolio Repository:** [https://github.com/sushantranjan912](https://github.com/sushantranjan912)
- **LinkedIn Profile:** [https://www.linkedin.com/in/sushantranjan912/](https://www.linkedin.com/in/sushantranjan912/)
- **Featured Project (JanSetu Live):** [https://jansetu-h177.onrender.com/](https://jansetu-h177.onrender.com/)
- **JanSetu GitHub:** [https://github.com/sushantranjan912/JanSetu](https://github.com/sushantranjan912/JanSetu)
- **Competitive Profiles:**
  - **LeetCode:** [https://leetcode.com/u/sushant_0912/](https://leetcode.com/u/sushant_0912/) (500+ Solved, Rating: 1440)
  - **CodeChef:** [https://www.codechef.com/users/sushant_0912](https://www.codechef.com/users/sushant_0912) (250+ Solved, 2-Star &bull; 1401 Rating)
  - **Codeforces:** [https://codeforces.com/profile/sushantranjan219](https://codeforces.com/profile/sushantranjan219) (Rating: 930)
- **Direct Email:** [mailto:sushantranjan129@gmail.com](mailto:sushantranjan129@gmail.com)

---

## 🛠️ Tech Stack

- **Core Structure:** Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- **Visual Styling:** Modern Vanilla CSS3
  - Custom CSS Design Tokens & CSS Variables
  - Glassmorphism & Micro-Glow effects
  - Responsive layouts using CSS Grid and Flexbox
  - Dark SaaS aesthetic (Deep Black `#050505`, Near-Black `#08090D`, Navy `#0D1117`, Electric Blue `#38bdf8` &rarr; Violet `#8b5cf6`)
  - Zero heavy CSS libraries (No Tailwind, No Bootstrap)
- **Interactivity & Logic:** Vanilla JavaScript (ES6+)
  - IntersectionObserver for scroll-reveal animations and active section tracking
  - Animated number counters with cubic easing
  - Real-time rotating phrases / typewriter hero effect
  - Interactive background ambient mesh canvas with particle connections
  - Clipboard API integration with animated toast notifications
  - Accessible mobile drawer navigation with ESC/backdrop dismissal
- **Document Assets:** Downloadable, verified PDF resume (`assets/resume/Sushant_Ranjan_Resume.pdf`)

---

## 📁 Project Structure

```text
portfolio/
├── index.html                           # Main entry point & semantic markup
├── style.css                            # Complete design system & responsive styling
├── script.js                            # Pure Vanilla JS engine & animations
├── favicon.svg                          # Modern glowing developer SVG icon
├── favicon.ico                          # Standard favicon fallback
├── README.md                            # Comprehensive project documentation
└── assets/
    ├── images/
    │   ├── jansetu-preview.jpg          # JanSetu civic platform screenshot mockup
    │   └── training-management-preview.jpg # PTMS dashboard screenshot mockup
    ├── icons/                           # Vector assets
    └── resume/
        ├── Sushant_Ranjan_Resume.pdf    # Downloadable, ATS-optimized PDF resume
        └── resume_template.html         # Resume printable HTML template
```

---

## 🚀 Projects Included

### 1. JanSetu — Connecting Problems, People & Possibilities *(Featured Project)*
- **Tag:** `Full-Stack · AI · Civic Innovation`
- **Description:** A civic innovation platform connecting citizens, administration, universities, and industries to collaboratively address real-world societal challenges.
- **Architectural Highlights:**
  - Citizen problem reporting and tracking
  - Admin validation and workflow assignment
  - University solution proposals system
  - Industry collaboration modules
  - Role-based access control (RBAC) & secure JWT authentication
  - AI-based industry matching (Python & Scikit-learn)
  - MongoDB-based scalable data management
- **Tech Stack:** React.js, JavaScript, Node.js, Express.js, MongoDB, JWT, Python, Scikit-learn, REST APIs
- **Live Demo:** [https://jansetu-h177.onrender.com/](https://jansetu-h177.onrender.com/)
- **Repository:** [https://github.com/sushantranjan912/JanSetu](https://github.com/sushantranjan912/JanSetu)

### 2. Personal Training Management System
- **Tag:** `Full-Stack · REST API · Authentication`
- **Description:** A full-stack training management platform with dedicated Admin and Employee dashboards designed to streamline skill-building programs and progress accountability.
- **Architectural Highlights:**
  - Admin & Employee dashboards
  - JWT authentication & role-based access control
  - Course management & enrollment tracking
  - Feedback collection & analytics dashboards
  - Automated completion certificate issuance
- **Tech Stack:** Node.js, Express.js, MongoDB, JWT, REST APIs
- **Repository:** [https://github.com/sushantranjan912](https://github.com/sushantranjan912)

---

## 🏆 Key Achievements & Benchmarks

- **Flipkart GRiD 8.0:** Semifinalist in India's flagship engineering competition.
- **LeetCode:** 500+ Problems solved across Data Structures & Algorithms | Contest Rating: 1440.
- **CodeChef:** 250+ Problems solved | 2-Star Coder (Rating: 1401).
- **Codeforces:** Contest Rating: 930.
- **Academics:** B.Tech in CSE at Lovely Professional University &bull; **CGPA: 8.78 / 10**.

---

## 💻 Local Setup & Development

Because this project is built entirely on native web standards, it requires **zero installation of heavy node modules or build steps**:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sushantranjan912/portfolio.git
   cd portfolio
   ```

2. **Run locally using any static web server:**
   - **Using Python:**
     ```bash
     python -m http.server 3000
     ```
   - **Using Node `npx serve`:**
     ```bash
     npx -y serve .
     ```
   - **Using VS Code Live Server extension:**
     Right-click `index.html` and select **"Open with Live Server"**.

3. **Open in your browser:**  
   Navigate to `http://localhost:3000` (or the port specified by your runner).

---

## 🌐 Deployment to Vercel

This site is pre-configured for zero-configuration, instant deployment on **Vercel**:

1. Push this directory to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Sushant Ranjan developer portfolio"
   git branch -M main
   git remote add origin https://github.com/sushantranjan912/portfolio.git
   git push -u origin main
   ```
2. Log into [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your `portfolio` repository.
4. Leave all build settings at default (`Framework Preset: Other`, `Build Command: None`, `Output Directory: None`).
5. Click **Deploy**. Your portfolio will be live in seconds with global CDN caching and automatic HTTPS!

---

## 👤 Author

**Sushant Ranjan**  
- **Email:** [sushantranjan129@gmail.com](mailto:sushantranjan129@gmail.com)  
- **GitHub:** [@sushantranjan912](https://github.com/sushantranjan912)  
- **LinkedIn:** [sushantranjan912](https://www.linkedin.com/in/sushantranjan912/)  

&copy; 2026 Sushant Ranjan. Built with HTML, CSS & JavaScript.
