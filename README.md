# Accuvision LASIK — Website Recreation

This project is a high-fidelity static recreation of the **Accuvision LASIK** website ([https://accuvisionlasik.com/](https://accuvisionlasik.com/)), reconstructed using **HTML5**, **CSS3**, and **Vanilla JavaScript** without external frameworks, libraries, or build steps.

All original branding, copy, doctor biographies, authentic assets (logos, certifications, photography), layout structures, responsive behaviors, and interactive features have been faithfully preserved.

---

## Project Structure

```
httpsaccuvisionlasik/
├── index.html                      # Homepage with Hero, 4-Pillar Features, Alcon Suite, Partners & Stats
├── why-lasik.html                  # Why LASIK, 6 Facts About LASIK, LASIK vs PRK Comparison
├── are-you-a-lasik-candidate.html  # Interactive 5-Step Self-Assessment Candidacy Quiz
├── patient-experience.html         # Complete 4-Phase Step-by-Step Patient Process & Recovery
├── lasik-pricing.html              # Transparent Pricing, CareCredit 0% Financing & HSA/FSA Options
├── lasik-faq.html                  # Comprehensive Interactive Accordion FAQ
├── reviews.html                    # 193+ Verified Patient Google & Trustindex Reviews
├── schedule-consultation.html      # Free Consultation Booking & Evaluation Request Form
├── about-us.html                   # About Accuvision, 20+ Years History, Co-Management & Team Overview
├── dr-william-h-hammonds.html      # Dr. Hammonds Bio, Top Doctor Awards, Panthers/Hornets Provider
├── dr-mary-j-rauch.html            # Dr. Rauch Bio, Clinical Director, Education & Honors
├── contact-us.html                 # Contact Details, Inquiry Form, Interactive Map & Directions
├── hipaa-compliance.html           # Notice of Health Information Privacy Practices
├── privacy-policy.html             # Website Privacy Policy
├── css/
│   └── style.css                   # Responsive CSS3 Design System with Original Optico/Elementor Tokens
├── js/
│   └── main.js                     # Vanilla JavaScript (Navigation, Sticky Header, Quiz, FAQ, A11y, Forms)
├── assets/
│   └── images/                     # Authentic Logos, Partner Emblems, Doctor Portraits, Suite Photos
└── README.md                       # Project Documentation
```

---

## Technology Stack

- **HTML5**: Semantic tags (`header`, `nav`, `main`, `section`, `article`, `footer`), accessibility attributes, and Open Graph metadata.
- **CSS3**: Custom design tokens, Flexbox & Grid layouts, CSS media queries for desktop, tablet, and mobile screens.
- **Vanilla JavaScript**:
  - Sticky header navigation with smooth elevation on scroll.
  - Mobile slide-out drawer menu with animated dropdown triggers.
  - Interactive 5-question LASIK candidacy quiz with real-time scoring.
  - Animated stat counters for surgical milestone numbers.
  - Accordion FAQ expansion with accessible toggle states.
  - Real-time client-side form validation for consultation booking and contact requests.
  - Accessibility toolbar (Font sizing, Grayscale, High Contrast, Underline Links, Readable Font, Reset).

---

## How to Run Locally

You can run this website locally using any standard web browser:

### Option 1: Direct File Opening
Double-click `index.html` or drag it into any modern web browser (Chrome, Edge, Firefox, Safari).

### Option 2: Simple Local Web Server (Recommended)
Using Python:
```bash
python -m http.server 8000
```
Then navigate to: `http://localhost:8000`

Using Node (if available):
```bash
npx -y serve .
```

---

## Key Pages & Verified Content

1. **Homepage (`index.html`)**:
   - Hero banner with original photography and CTAs
   - 4-Feature Action Cards ("Why LASIK?", "Is LASIK Right For You?", "Meet Our Doctors", "Free Consultation")
   - Alcon Wavelight Refractive Laser Suite spotlight
   - Carolina Panthers & Charlotte Hornets official provider banner
   - "Why Choose Accuvision LASIK?" benefits and warranty highlights
   - Verified 4.9/5 Trustindex & Google patient reviews
   - Animated statistics: 20 Years Experience, 30,000+ Procedures, 99.9% Success Rate, 15-Minute Procedure

2. **LASIK Candidacy Quiz (`are-you-a-lasik-candidate.html`)**:
   - Interactive 5-step assessment evaluating age, vision issues, prescription stability, pregnancy status, and ocular health.
   - Dynamic clinical outcome feedback with direct scheduling CTA.

3. **LASIK vs PRK Comparison (`why-lasik.html`)**:
   - 6 Facts About LASIK Surgery
   - Detailed side-by-side comparison between LASIK and PRK procedures.

4. **Transparent Pricing (`lasik-pricing.html`)**:
   - Zero down payment policy, transparent pricing with no hidden fees or taxes.
   - CareCredit 0% interest plans up to 18 months, extended 48-month options, HSA/FSA eligibility.

5. **Doctor Biographies (`dr-william-h-hammonds.html` & `dr-mary-j-rauch.html`)**:
   - Dr. William H. Hammonds: Notre Dame, Medical College of Georgia, Bascom Palmer Fellowship (#1 eye hospital), 2021–2024 Charlotte Top Doctor Awards.
   - Dr. Mary J. Rauch: Summa Cum Laude, Northeastern State University, TLC Laser Eye Centers Clinical Director (1998–2020).

---

## Quality Assurance & Testing

- **Cross-browser Compatibility**: Tested across modern desktop and mobile browsers.
- **Responsiveness**: Fluid layout with responsive breakpoints for viewports from 320px to 1920px+.
- **Zero Console Errors**: Clean vanilla JavaScript without external dependency overhead.
- **Accessibility**: Includes high-contrast modes, legible typographic scaling, keyboard-focusable links, and semantic landmark hierarchy.
