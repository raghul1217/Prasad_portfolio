# 🏗️ MASTER PROMPT — Prasad N | Manufacturing Engineering Portfolio Website

---

## 📌 PROJECT OVERVIEW

Build a complete, production-ready **portfolio website** for **Prasad N**, a Manufacturing Engineering & Operations professional with **16 years of experience** spanning R&D product design, tool design, global project execution, Lean manufacturing, and SPM development.

The site must feel polished, professional, and trustworthy — suited for senior-level engineering recruiters and global clients.

| Detail | Value |
|---|---|
| **Tech Stack** | React + Tailwind CSS |
| **Animations** | Framer Motion |
| **Theme** | Light mode — clean, airy, premium |
| **Fonts** | Syne (headings) + DM Sans (body) — Google Fonts |

---

## 🎨 DESIGN DIRECTION — "Blueprint Precision"

The visual language should feel like a **premium engineering consultancy** — structured, spacious, confident. Think blueprint grid lines, precision mechanical motifs, and a rich jewel-toned accent palette on a warm clean base.

### Color Palette

| Role | Color | Hex |
|---|---|---|
| Page Background | Warm Off-White | `#F7F6F2` |
| Card / Surface | Pure White | `#FFFFFF` |
| Primary Text | Deep Charcoal | `#1A1A2E` |
| Secondary Text | Slate Gray | `#4A4A6A` |
| **Primary Accent** | **Indigo Blue** | **`#3730A3`** |
| **Secondary Accent** | **Teal / Cyan** | **`#0D9488`** |
| **Highlight / Award** | **Warm Gold** | **`#B45309`** |
| Tag Background | Soft Indigo Tint | `#EEF2FF` |
| Tag Text | Rich Indigo | `#3730A3` |
| Border / Divider | Warm Gray | `#E4E2DC` |
| Section Alt BG | Soft Cream | `#F0EEE9` |

> **Color Philosophy:** Deep indigo as the commanding primary, teal as the energetic secondary, gold strictly for prestige moments (awards, certifications). Avoid flat grays — lean warm throughout.

### Typography
- **Headings / Display:** `Syne` — bold, geometric, distinctive
- **Body / UI:** `DM Sans` — clean, modern, highly readable
- Import both from Google Fonts in `index.html`

### Visual Details
- Subtle **dot-grid SVG pattern** on hero background
- Thin **engineering-line style** horizontal rules between sections
- **Bracket corner accents** `[ ]` on all section headings
- Blueprint-inspired **1px card borders** in warm gray
- Indigo-to-teal **gradient on CTA buttons**
- Teal **left-border accent** (3px) on hovered experience cards

---

## 🗂️ SITE STRUCTURE & FULL CONTENT

---

### 1. 🔝 NAVBAR

- **Left:** Monogram logo `PN` — Syne bold, indigo, inside geometric bracket `[PN]`
- **Right nav links:** About · Experience · Skills · Education · Achievements · Contact
- Sticky on scroll — `backdrop-blur-sm` frosted white + subtle `border-b`
- Smooth scroll to sections on link click
- Active section highlighted in indigo with underline indicator
- Mobile: Hamburger menu with animated open/close drawer

---

### 2. 🦸 HERO SECTION

Full viewport height. Centered layout with generous padding.

**Content:**
- **Name:** `Prasad N` — Syne, display size (`text-7xl`), deep charcoal
- **Title:** `Manufacturing Engineering & Operations`
- **Animated rotating subtitle** (typewriter or crossfade loop, teal color):
  - `"Tool Design & R&D Product Development"`
  - `"Lean Manufacturing & Kaizen"`
  - `"Global Project Execution"`
  - `"SPM & Fixture Engineering"`
- **Bio:** *"16 years of precision engineering across aerospace, automotive, defense, and heavy fabrication — from concept to production floor."*
- **CTA Buttons:**
  - Primary: `Download CV` — indigo-to-teal gradient fill, white text
  - Secondary: `Get in Touch` — outline indigo, hover fills
- **Location badge:** `📍 Mysuru, Karnataka, India` — small pill, warm gray bg

**Background:** `#F7F6F2` with subtle dot-grid SVG overlay at 8% opacity

**Entrance animation:** Staggered `fadeInUp` — 0.15s delay per element (name → title → subtitle → bio → CTAs → badge)

---

### 3. 👤 ABOUT SECTION

Section heading: `[ About Me ]`
Background: `#F0EEE9` (soft cream alt section)

Two-column layout on desktop:

**Left — Summary:**
> *"I bring 16 years of hands-on experience across tool room, machine shop, sheetmetal, and heavy fabrication environments. My core strengths lie in R&D product design, jig & fixture development, special purpose machine (SPM) design, and manufacturing process improvement. I work with a sharp focus on cost reduction, efficiency, and delivering against management objectives — from greenfield project setup to global client deliveries."*

**Right — 4 Animated Stat Cards** (count-up on scroll):

| Stat | Label |
|---|---|
| `16+` | Years of Experience |
| `15+` | Projects Led (₹15 Cr value) |
| `10+` | Global Clients |
| `🏆` | ACMA Award Winner 2014 |

- Stat cards: white bg, 1px warm border, soft shadow
- Gold accent border-top on the trophy card
- Count-up animation triggers when section enters viewport

---

### 4. 💼 WORK EXPERIENCE SECTION

Section heading: `[ Work Experience ]`

**Layout:** Vertical timeline with centered connector line (desktop) / left-aligned (mobile). Cards animate in from alternating left/right on scroll.

---

#### 🔵 Entry 1 — Sevenloop Technology Pvt Ltd
- **Badge:** `Current Role` (teal pill)
- **Role:** Technical Manager — Precision Parts & Products Industrialization
- **Duration:** Nov 2025 – Present
- **Location:** Bengaluru, Karnataka
- **About:** AI-driven engineering company manufacturing precision parts locally and globally

**Responsibilities:**
- Project execution from concept to part approval and regular production
- Supplier identification and sourcing across India (Rajkot, Pune, Kolhapur, Bengaluru, Coimbatore)
- Part validation for casting, machining, and coating — export & domestic
- RFQ-stage feasibility studies to determine manufacturing process and meet QCD targets
- PO review, supplier feasibility, technical feedback to BD team
- Coordination with design and quality teams for QC documentation

---

#### 🔵 Entry 2 — Veerya Attachments Pvt Ltd
- **Role:** Assistant Manager — R&D
- **Duration:** Oct 2024
- **Location:** Malur, Karnataka
- **About:** Mechanical attachments & equipment — Crushers, Grapples, Couplers, Hydraulic Cylinders

**Responsibilities:**
- Led and managed R&D Product Design & Tool Design team across 4 sections
- New product development with CFT team — quality, fabrication, machine shop
- CAD completion, customer approval drawings, manufacturing drawing release, ECR management
- Designed jigs & fixtures for HMC, VMC, CNC, Welding, Cylinder line processes
- Hydraulic cylinder design and inhouse development; SPM design including test rigs
- Welding positioner design and development inhouse with bought-out components (motors, gear pinions, bearings)
- Led 15+ projects totaling ₹15 Cr across global regions
- HMC & VMC productivity improvement via fixture optimization and tooling upgrades; KAIZEN training for operators
- Greenfield project involvement; full PPAP documentation

---

#### 🔵 Entry 3 — Clark Fixture Technologies (India) Pvt. Ltd
- **Role:** Design Engineer — Global Projects
- **Duration:** Oct 2015 – Sep 2024 *(9 years)*
- **Location:** Mysuru, Karnataka
- **About:** Global tooling technology company — Aerospace, Medical, Automotive, Defense, Low Earth Orbit & Deep Space

**Client Badge Strip** (small text pills — indigo/teal alternating):
`Boeing` · `GE Aviation` · `Gulfstream` · `Pratt & Whitney` · `Lockheed Martin` · `Rolls Royce` · `ULA` · `NASA` · `BMW` · `GM` · `Toyota` · `Volvo` · `Ford` · `Stryker` · `Saint-Gobain`

**Design Responsibilities:**
- Automated Robotic Cell Fixture design — integrated proximity sensors and PLC for post-bend part validation
- Orbital weld fixture design enabling tube assembly and end-feature welding at production scale
- CAD/CAM tooling design per customer specs, reviewed/signed off, delivered via secure portal

**Manufacturing Responsibilities:**
- CAD/CAM Virtual Manufacturing — NC files to shop server, material plots, machining drawings
- NC code generation for FANUC, ONSURD, and MAZAK machines
- One-piece CNC fixture machining — eliminates cumulative tolerance stack-up

---

#### 🔵 Entry 4 — WABCO-TVS (India) Ltd. (ZF India)
- **Role:** Senior Engineer — Manufacturing Engineering
- **Duration:** Nov 2010 – Sep 2015 *(5 years)*
- **Location:** Chennai, Tamil Nadu
- **About:** Leading manufacturer of braking systems, Compressors, ABS, and Actuators

**Responsibilities:**
- Manufacturing System Design (MSD), assembly and production process design
- Production line commissioning with LCA, PLC, and Maintenance teams
- Inhouse assembly line design and development
- Jigs & fixtures design and redesign for efficiency, cost, and quality improvement
- Automated fixture/jig modifications to reduce inventory and spare parts
- Bottleneck elimination in machining and assembly cells via automation
- Documentation: process flow charts, status cards, checklists, PPAP, FMEA

---

#### 🔵 Entry 5 — NTTF Industries Pvt. Ltd
- **Role:** Graduate Engineer Trainee
- **Duration:** Aug 2007 – Jul 2008
- **Location:** Bangalore, Karnataka
- **About:** Industrial training center and production company

**Responsibilities:**
- Production planning and supervision in press shop operations
- Tool room engineering — die maintenance for press tools and plastic moulds
- Lean operations and SMED tryout

---

### 5. 🛠️ SKILLS SECTION

Section heading: `[ Skills & Expertise ]`
Background: `#F0EEE9`

Grouped skill tag pills — staggered pop-in animation on scroll. Each group has a bold category label.

| Category | Skills |
|---|---|
| **CAD / CAM Tools** | PTC Creo · Pro-E · SolidWorks · Autodesk Inventor · AutoCAD · Vault |
| **Manufacturing** | HMC · VMC · CNC · DFM · Welding · Reverse Engineering · Process Design · SPM Design · Fixture Design · Tool Room |
| **Methodologies** | Lean Manufacturing · Kaizen · Kanban · SMED · PPAP · FMEA · Quality Assurance |
| **Software** | ERP Software · MS Excel · MS Office · PowerPoint · Business Development |
| **Certification** | ✅ IMTA Certified Gauge Designer |

**Tag style:** Indigo tint background `#EEF2FF`, indigo text `#3730A3`, rounded-full pill, medium weight

---

### 6. 🎓 EDUCATION SECTION

Section heading: `[ Education ]`

Clean card layout — 2 columns desktop, 1 column mobile. Cards animate from bottom on scroll.

| Degree | Institution | Location | Year |
|---|---|---|---|
| M.E. in Tool Engineering | NTTF | Bangalore | 2008 – 2010 |
| B.E. in Mechanical Engineering | BDT College | Davangere | 2005 – 2007 |
| Diploma in Mechanical Engineering | Govt. Polytechnic | Raichur | 2001 – 2004 |
| Class X | KPCL | Raichur | 2000 – 2001 |

Card design: institution name bold (indigo), degree in secondary text, year as a teal pill badge top-right.

---

### 7. 🏆 ACHIEVEMENTS SECTION

Section heading: `[ Key Achievements ]`

**Main Achievement Card** — wide, centered, gold left-border (4px), warm cream background `#FFFBF0`:

> 🏆 **ACMA Prestigious Award — First Place, 2014**
> *Automotive Component Manufacturers Association of India*
> *Category: Productivity Improvement*

**Secondary Achievement Row** — 3 smaller cards below:

| Icon | Achievement |
|---|---|
| 🔩 | 9 Years at Clark Fixture — Global Aerospace & Defense tooling |
| 🌍 | Supplier network established across 5+ Indian manufacturing hubs |
| 📐 | IMTA Certified Gauge Designer |

---

### 8. 📬 CONTACT SECTION

Section heading: `[ Get in Touch ]`
Background: `#F0EEE9`

Two-column layout:

**Left — Contact Details:**
- 📞 +91 9448736591
- ✉️ prasadshetty60@gmail.com
- 🔗 [linkedin.com/in/prasad-n-787a7b121](https://www.linkedin.com/in/prasad-n-787a7b121)
- 📍 Mysuru, Karnataka, India

**Right — Contact Form:**
- Fields: `Name` · `Email` · `Message (textarea)`
- Submit button: indigo-to-teal gradient, full width, hover lift + scale effect

---

### 9. 🔻 FOOTER

Minimal single row:
- Left: `© 2025 Prasad N`
- Center: *"Engineering Precision. Delivering Results."* — italic, secondary text
- Right: LinkedIn icon link (indigo, hover teal)

---

## ✨ ANIMATIONS SPEC (Framer Motion)

| Element | Animation |
|---|---|
| **Hero** | Staggered `fadeInUp` — 0.15s delay per element |
| **All Sections** | `useInView` scroll trigger — `y: 40 → 0`, `opacity: 0 → 1` |
| **Timeline Cards** | Alternate slide-in from left/right (desktop) |
| **Skill Tags** | Staggered `scale: 0.8 → 1` pop-in, 0.05s between tags |
| **Stat Cards** | Count-up number animation on viewport entry |
| **Card Hover** | `y: -4` lift + shadow increase + teal left-border glow |
| **Navbar** | Fade-in on load; frosted bg after 80px scroll |
| **CTA Buttons** | `scale: 1.03` on hover, `200ms ease` |
| **Section Headings** | Underline draws left-to-right on scroll entry |

---

## 📐 RESPONSIVE BEHAVIOR

- Mobile-first Tailwind breakpoints (`sm`, `md`, `lg`)
- Hamburger menu on mobile — animated slide-down drawer
- Timeline: alternating left/right desktop → left-aligned single column mobile
- Skills grid: 2 cols mobile → 3–4 cols desktop
- Education: 1 col mobile → 2 col desktop
- Stats: 2×2 grid mobile → 4-in-a-row desktop

---

## ⚙️ TECHNICAL REQUIREMENTS

```
- Google Fonts: Syne + DM Sans — import in index.html
- CV download: <a href="/prasad-cv.pdf"> placeholder
- Smooth scroll: scroll-behavior: smooth on html element
- All section IDs match navbar anchor links
- useInView from Framer Motion for all scroll-triggered animations
- No external UI component libraries — Tailwind + Framer Motion only
- Semantic HTML throughout for accessibility
- All color values as Tailwind custom config or inline hex
```

---

## 🎯 SECTION ID REFERENCE

```
#about
#experience
#skills
#education
#achievements
#contact
```

---

*Master prompt generated for Antigravity development. All content sourced from client CV.*
