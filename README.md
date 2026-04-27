Kindness & Compassionate LLC - Web Platform
A modern, responsive web application for a professional non-medical in-home care provider. The platform is designed to bridge the gap between high-quality care services and families in need, while also serving as a recruitment hub for compassionate caregivers.

📌 Project Overview
Kindness & Compassionate LLC provides personalized in-home care in Seattle and surrounding areas (Port Orchard, Bremerton, Silverdale, Poulsbo, and Bainbridge Island). This application serves as the digital face of the brand, emphasizing dignity, respect, and integrity.

Core Mission
"Because caring is not just what we do—it’s who we are."

🛠 Tech Stack
Framework: Next.js (React)

Styling: Tailwind CSS

Animations: Motion (formerly Framer Motion)

Icons: Lucide React

Typography: Serif headings for elegance; Geometric Sans-serif (Inter/System) for readability.

✨ Key Features
1. Dynamic Hero Section
Visual Impact: High-resolution imagery with a custom WaveDivider component for seamless section transitions.

Quick Actions: Direct access to booking consultations or viewing services.

2. Service Catalog
Comprehensive listing of non-medical care services, including:

Dementia & Parkinson’s Care

Activities of Daily Living (ADLs): Hygiene, Dressing, Toileting

Companion Care & Meal Preparation

Mobility & Transportation support

3. Career Portal
A dedicated "Now Hiring" section that outlines:

Impact & Requirements: Clear expectations for CNA/HCA certified professionals.

Benefits: Highlights competitive pay, flexible scheduling, and growth paths.

Application Form: An integrated, user-friendly form for resume submissions.

4. Interactive Contact Suite
Mobile-optimized "Click-to-Call" functionality.

Direct email integration.

Location-based focus on the Kitsap Peninsula and Seattle areas.

🚀 Getting Started
Prerequisites
Node.js 18.x or higher

npm or yarn

Installation
Clone the repository:

Bash
git clone https://github.com/your-username/kindness-compassionate-web.git
cd kindness-compassionate-web
Install dependencies:

Bash
npm install
Setup Constants:
Ensure your SERVICES constant is defined in @/src/constants with the following structure:

TypeScript
export const SERVICES = [
  {
    name: "Dementia Care",
    description: "...",
    image: "/assets/service-image.jpg"
  },
  // ...
];
Run the development server:

Bash
npm run dev
Open http://localhost:3000 to view the result.