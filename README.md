# UrbanGlide #
Live Demo

https://urbanglide.render.app 

## Project Overview ##

UrbanGlide is a responsive, full-stack e-commerce platform for the skating community.
It blends street culture and modern web design, allowing users to explore, purchase, and connect around skating gear.
The app includes full authentication (signup, login, email verification), smooth UI transitions, and optimized performance for all devices.

## Brand Identity ##
 ### Color System ###
Purpose	Color	Hex	Rationale
Primary (Background/UI Base)	Dark Teal	#013A38	Represents balance, control, and flow—core themes of skating.
Secondary (Buttons, Highlights)	Navy Blue	#011F3A	Provides contrast and adds depth to CTAs.
Accent	Vibrant Green	#286F6C	Adds energy and visual rhythm—echoes the active skating lifestyle.
Neutral Dark	Slate Gray	#23262F	Used for text and secondary details for readability.
White	#FFFFFF	Maintains contrast and visual clarity.	
#### Typography ####

Font Family: Saira

Headings: Bold weights (700–900) — clean and impactful for energy and motion.

Body: Regular to Medium (400–500) — simple, modern readability across devices.

### Design Decisions ###
#### Layout Adherence ####

Frame size followed 402×847px (iPhone 16 Pro) for mobile-first design.

Desktop grid based on max width 1240px, consistent with responsive scaling.

Spacing and hierarchy derived directly from the provided LG (desktop) design and scaled down precisely for MD and SM breakpoints using Tailwind’s responsive utilities.

## Creative Departures ##

Reimagined hero section with motivational copy and richer storytelling to align with brand emotion.

Designed a testimonials carousel using Framer Motion for personality and authenticity.

Introduced a newsletter CTA and dynamic product cards for engagement.

MD breakpoint interpreted creatively to maintain design flow without overcrowding content.

## Component Architecture ##

UrbanGlide follows a modular component structure:

urbanglide/<br>
│<br>
├── frontend/               # React + Vite + Tailwind (client)<br>
│   ├── public/<br>
│   ├── src/<br>
│   │   ├── assets/         # Images (optimized, WebP/JPEG)<br>
│   │   ├── components/<br>
│   │   ├── pages/<br>
│   │   ├── store/          # Zustand<br>
│   │   ├── utils/<br>
│   │   ├── App.jsx<br>
│   │   └── main.jsx<br>
│   ├── package.json<br>
│   └── vite.config.js<br>
│<br>
├── backend/                # Node + Express + MongoDB server<br>
│   ├── models/<br>
│   │   └── User.js<br>
│   ├── routes/<br>
│   │   └── authRoutes.js<br>
│   ├── utils/<br>
│   │   └── email.js        # Nodemailer config & sendEmail()<br>
│   ├── middleware/<br>
│   ├── server.js           # Main server entry point<br>
│   ├── .env                # environment variables<br>
|   ├──packagelock.json<br>
│   └── package.json<br>
│<br>
├── README.md<br>
└── .gitignore<br>
<br>


Principles:

Components are atomic and reusable.

Layouts maintain semantic structure and accessibility.

State management centralized via Zustand.

## Performance Optimizations ##

* Lazy Loading for images and routes
* React.memo used on performance-heavy components (Cards, Pagination)
* Semantic HTML for accessibility and SEO
* Keyboard navigation supported
* Image optimization: All images converted to WebP / compressed JPEG (≥800x600 for cards, ≥1920x1080 for hero)

## Image Credits ##

All images sourced from Pexels, wikimedia commons and Unsplash for non-commercial use.

Skateboarding imagery by Pexels

Urban and community scenes by Wikimedia Commons


## Technologies Used ##

React 18+

Vite

Tailwind CSS 3+

Framer Motion

Zustand (state management)

Express.js + Node.js

MongoDB + Mongoose

JWT Authentication

Nodemailer (email verification)

Vercel / Render (deployment)

## Challenges & Solutions ##

Email Verification Flow

Challenge: Implementing a secure verification system.

Solution: Generated 6-digit codes with expiry using Node.js + crypto and delivered via Nodemailer.

Responsive Layout Scaling

Challenge: Maintaining consistent typography and spacing across SM, MD, and LG.

Solution: Used Tailwind’s custom breakpoints and container max-width for uniform visual rhythm.

Performance Optimization

Challenge: Slow image loads reducing Lighthouse scores.

Solution: Converted large images to WebP and implemented lazy loading.

## Future Improvements ##

* Stripe checkout

* User dashboards

* Product reviews

* Cart persistence

* Admin panel
