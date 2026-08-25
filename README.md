# OCYM Pampady — Community Service Platform

A mobile-first React web application for the OCYM (youth movement) of Pampady Cathedral, featuring:
- **Bus Schedule Management**: Search, view, and request changes to bus timings
- **Blood Donor Registry**: Register as a donor and find eligible donors in your district
- **6-Month Eligibility Timer**: Automatically track when donors are eligible to donate again
- **Promotional Campaigns**: Display motivational slogans for blood donation drives

## Tech Stack

- **Frontend**: React 19 + Vite (fast dev experience, no build complexity)
- **Database**: Google Sheets (via Google Apps Script Web App)
- **Styling**: Plain CSS (mobile-first, no dependencies)
- **Routing**: React Router DOM

## Project Structure

```
src/
  components/    → Reusable UI components (NavBar, Badge, etc.)
  pages/         → Full page views connected to routes
  services/      → Functions that call the Google Apps Script API
  App.jsx        → Root component with routing
  main.jsx       → React entry point
  index.css      → Global styles (mobile-first)
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (opens at http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Learning Goals

This project is built intentionally to teach:
- React fundamentals (components, hooks, state, effects)
- Async API calls and data fetching
- Form handling and validation
- Component composition and reusability
- Git workflow (branching, commits, meaningful messages)
- Mobile-first CSS design
- Working with external data (Google Sheets via Apps Script)

Each feature is built in a separate git branch to practice branching workflow.

## Progress

- [x] Project setup (Vite + React + folder structure)
- [ ] Feature 1: Basic layout (routing shell)
- [ ] Feature 2: Bus schedule search
- [ ] Feature 3: Bus schedule requests
- [ ] Feature 4: Donor registration
- [ ] Feature 5: Donor directory
- [ ] Feature 6: Eligibility badge component
- [ ] Feature 7: Promo slogans
- [ ] Feature 8: Polish & deploy
