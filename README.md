# React Portfolio

This is week 9 project for the React module in the Step8up Fullstack developer bootcamp. This project is a portfolio site built with React, Vite, and React Router, showcasing the eight weekly challenges I built earlier in the course, as well as a skills page and a contact form.

Live link: https://reactportfolio-4qem.onrender.com/

## Pages

- **Home** – intro with links to social media and portfolio / contact page
- **About** – everything I've picked up so far, with filters by category (dev / design / research)
- **Projects** – the full run of all 9 weekly challenges, filterable by tech, click a card to expand it
- **Contact** – a form (not wired to a real backend yet, just proves the state/handlers work)

## Running it

```bash
npm install
npm run dev
```

Opens on `localhost:5173`.

## Stack notes

- Vite + React, React Router for the page navigation
- Icons are from `react-icons` — used real brand logos where they exist (GitHub, React, Sass, WordPress, etc.) and generic Material icons for everything else
- No CSS framework, wrote the whole design system myself in `global.css` — flexbox for all the
  layout, CSS variables for colors/fonts
- The build log and skills grid both use the same filter pattern — chips at the top, click to filter, `useState` + `useMemo`

## Things I'd still like to do

- Wire the contact form to something real (e.g.Formspree)
- Add project screenshots instead of just text summaries
- Add all of my developement and design projects (outside of Step8Up bootcamp)
- Add light and dark theme switcher

## Deploying

Static site on Render — build command `npm run build`, publish dir `dist`. Needed a rewrite rule (`/*` → `/index.html`) so refreshing on `/projects` etc. doesn't 404.
