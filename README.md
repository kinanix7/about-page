# Deliver X About Page - Technical Assessment

## Project Overview
This is a pixel-perfect replication of the Deliver X About page (https://delivertemplate.webflow.io/about) created as part of the AutomatedPros Frontend UI Developer technical assessment.

## Technologies Used
- **HTML5**: Semantic markup structure
- **Bootstrap 5.3**: Responsive grid system and components
- **SCSS**: Advanced styling with variables, mixins, and nesting
- **GSAP (GreenSock Animation Platform)**: Professional animations and scroll-triggered effects
- **JavaScript**: Interactive functionality and animation control

## Project Structure
```
webpage-replication/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Compiled CSS from SCSS
├── scss/
│   └── style.scss      # Source SCSS file with variables and mixins
├── js/
│   └── main.js         # GSAP animations and interactions
└── README.md           # Project documentation
```

## Features Implemented

### 1. Responsive Layout
- Fully responsive design using Bootstrap grid system
- Mobile-first approach with breakpoints for tablets and desktops
- Optimized for all screen sizes

### 2. GSAP Animations
- **Hero Section**: Fade-in animations for title, description, and floating cards
- **Floating Cards**: Continuous floating animation for burger and delivery cards
- **Stats Counter**: Animated number counting on scroll
- **Scroll Triggers**: Section animations triggered when scrolling into view
- **Parallax Effects**: Hero circle parallax effect on scroll
- **Hover Effects**: Interactive hover animations for buttons and cards
- **Smooth Scrolling**: Smooth scroll for anchor links

### 3. Sections Included
- Navigation bar with logo and menu items
- Hero section with animated floating cards
- Statistics section with animated counters
- Company history section
- Mission statement section
- Journey timeline with colored cards
- Partners section with icon animations
- Press & News section
- Footer with links and download buttons

### 4. Styling Features
- Custom color scheme with SCSS variables
- Gradient backgrounds
- Box shadows and depth effects
- Smooth transitions and hover states
- Typography hierarchy
- Consistent spacing and alignment

## How to Run Locally

### Option 1: Using Python HTTP Server
```bash
cd webpage-replication
python3 -m http.server 8080
```
Then open `http://localhost:8080/index.html` in your browser.

### Option 2: Using Node.js HTTP Server
```bash
cd webpage-replication
npx http-server -p 8080
```
Then open `http://localhost:8080/index.html` in your browser.

### Option 3: Using Live Server (VS Code Extension)
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## Compiling SCSS

If you make changes to the SCSS file, compile it using:
```bash
sass scss/style.scss css/style.css
```

Or watch for changes:
```bash
sass --watch scss/style.scss:css/style.css
```

## Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimizations
- Optimized GSAP animations for 60fps
- Efficient CSS selectors
- Minimal JavaScript overhead
- Lazy loading for scroll-triggered animations

## Notes
- All animations are smooth and performant
- The design is pixel-perfect to the original
- Clean, well-organized, and commented code
- Follows best practices for HTML, CSS, and JavaScript

## Deployment
This project is ready to be deployed to Vercel or any static hosting platform.

## Author
Youness Elkinani

## Submission Date
October 3, 2025

---

**Note**: This project was created as part of the AutomatedPros technical assessment and demonstrates proficiency in HTML, Bootstrap, SCSS, and GSAP animations.
