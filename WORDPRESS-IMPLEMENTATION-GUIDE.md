# WordPress Implementation Guide: Accuvision LASIK Landing Page

This guide explains how to import, replicate, or customize the new high-converting landing page in **WordPress** (using **Elementor**, **Gutenberg / Spectra / Kadence**, or as a **Custom Page Template**).

---

## 🚀 Option 1: Direct Custom Page Template (Fastest & 100% Pixel Perfect)

If your WordPress theme supports custom page templates or child themes:

1. Copy `landing-page.html` into your active theme / child theme folder:
   ```
   wp-content/themes/your-theme/template-lasik-landing.php
   ```
2. Add the WordPress template header at the very top of the file:
   ```php
   <?php
   /*
    * Template Name: Accuvision LASIK Landing Page
    */
   ?>
   ```
3. Replace relative asset links (`assets/images/...`) with:
   ```php
   <?php echo get_stylesheet_directory_uri(); ?>/assets/images/...
   ```
4. Create a new page in **WordPress > Pages > Add New**, set Page Template to **Accuvision LASIK Landing Page**, and hit **Publish**.

---

## 🎨 Option 2: Elementor / Elementor Pro Recreation

The landing page structure is designed to map 1:1 with Elementor Pro container widgets:

| Landing Page Section | Elementor Pro Widget / Setting |
| :--- | :--- |
| **Sticky Header** | Theme Builder > Header (`Sticky: Top`, `Backdrop Filter: Blur(16px)`) |
| **Hero + Lead Form** | 2-Column Container: Left = Headings + CTA buttons, Right = Form Widget |
| **Lead Form** | Elementor Pro **Form** widget or **WPForms** / **Gravity Forms** |
| **Proof Strip** | 4-Column Container with **Icon Box** / **Image Box** widgets |
| **Stats Highlight** | 4-Column Container with **Counter** widgets (`data-count` animation) |
| **Dr. Hammonds Bio** | 2-Column Container: Left = Image Box with floating badge, Right = Icon List |
| **Consultation Steps** | 3-Column Container with Card Containers & Number Badges |
| **WaveLight Tech** | 2-Column Dark Container with **Tags / Chips** and **Feature Boxes** |
| **Google Reviews** | 3-Column Container or **Testimonial Carousel** widget |
| **FAQ Accordion** | **Accordion** or **Toggle** widget |
| **Location & Map** | 2-Column Container: Left = Address details, Right = **Google Maps** widget |
| **Final CTA** | Full-width Dark Container with Dual Action Buttons |
| **Mobile Float Bar** | Floating Button container set to show only on Mobile (`Responsive: Hide on Desktop/Tablet`) |

---

## ⚙️ Design Tokens & Global Styles (For WordPress Customizer / Elementor Site Settings)

Add these CSS variables to **WordPress > Appearance > Customize > Additional CSS** or **Elementor Site Settings > Custom CSS**:

```css
:root {
  --navy-950: #04081E;
  --navy-900: #081135;
  --primary: #2952E3;
  --primary-hover: #1b3ec2;
  --cyan: #00D5F7;
  --gold: #FFB800;
  --ink: #0A1128;
  --muted: #546285;
  --paper: #F6F8FD;
  --border: #DFE5F5;
  --font-heading: 'Outfit', sans-serif;
  --font-body: 'Plus Jakarta Sans', sans-serif;
}
```

---

## 📋 Recommended WordPress Plugins for Highest Conversion:
* **Forms**: WPForms, Fluent Forms, or Gravity Forms (pre-configured to match the 4-field quick consult layout).
* **Page Builder**: Elementor Pro or Kadence / Spectra Blocks.
* **Speed / Caching**: LiteSpeed Cache or WP Rocket (for instant sub-second mobile loading).
* **Analytics**: Google Tag Manager / Meta Pixel for conversion tracking.
