🏘️ Real Estate Projects Scraper

A modern Next.js application that scrapes real-time real estate project listings from MagicBricks and displays them on interactive cards and a map. Built for responsiveness and performance using Tailwind CSS and dynamic routing.

🚀 Features
🔍 City-Based Scraping: Get real-time projects by city.

🗺️ Interactive Map: View project locations on a live map.

🖼️ Project Cards: Clean, responsive UI with details and redirect links.

⚡ Dynamic Routing: Each city has its own page.

🧭 Client & Server Components: Built with Next.js App Router.

💨 Tailwind CSS Styling: Fast and modern design.

⏳ Custom Loader: Smooth loading experience.

📸 Demo

🛠️ Tech Stack
Framework: Next.js 14

Scraper: Cheerio & Axios

Frontend: React (App Router), Tailwind CSS

Mapping: Leaflet.js (via react-leaflet)

🧪 Getting Started
Clone the repo:

bash
Copy
Edit
git clone https://github.com/your-username/real-estate-scraper.git
cd real-estate-scraper
Install dependencies:

bash
Copy
Edit
npm install
Set environment variable:

Create a .env.local file:

env
Copy
Edit
NEXT_PUBLIC_BASE_URL=http://localhost:3000
Run development server:

bash
Copy
Edit
npm run dev
📁 Folder Structure
swift
Copy
Edit
src/
├── app/
│   ├── city/[cityName]/page.js      // Dynamic city page
│   ├── loading.js                   // Custom loading screen
│   └── api/projects/route.js        // Scraper API
├── components/
│   ├── ProjectCard.js               // Card UI
│   └── Map.js                       // Interactive map
