<div align="center">
  <br />
  <img src="public/readme/hero.webp" alt="Project Banner" />
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Next.js-black?style=for-the-badge&logoColor=white&logo=next.js&color=black"/>
    <img src="https://img.shields.io/badge/-Better Auth-black?style=for-the-badge&logoColor=white&logo=betterauth&color=black"/>
    <img src="https://img.shields.io/badge/-Shadcn-black?style=for-the-badge&logoColor=white&logo=shadcnui&color=black"/>
    <img src="https://img.shields.io/badge/-Inngest-black?style=for-the-badge&logoColor=white&logo=inngest&color=black"/><br/>
    <img src="https://img.shields.io/badge/-MongoDB-black?style=for-the-badge&logoColor=white&logo=mongodb&color=00A35C"/>
    <img src="https://img.shields.io/badge/-TailwindCSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=38B2AC"/>
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6"/>
  </div>

  <h3 align="center">📊 Stock Tracker App — Alerts, Charts, AI Insights</h3>

  <div align="center">
     A modern stock market web app featuring real-time tracking, alerts, AI insights, and powerful data visualizations.
  </div>
</div>

---

## 📋 Table of Contents

1. ✨ [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🔧 [Environment Variables](#environment-variables)
6. 🔗 [Assets & Structure](#assets--structure)
7. 🚀 [Deployment](#deployment)
8. 🧪 [Testing & Diagnostics](#testing--diagnostics)
9. 🤝 [Contributing](#contributing)
10. ⚖️ [License](#license)

---

## ✨ Introduction

Stock Tracker is a full-stack web application designed for tracking market data, managing watchlists and alerts, and surfacing AI-driven market insights. It pairs a responsive front-end with server-side workflows and background processing to enable reliable notifications and analytics.

---

## ⚙️ Tech Stack

- Next.js (App Router) — Server and client rendering
- TypeScript — Static typing across the stack
- MongoDB (Atlas or self-hosted) — Data persistence
- Better Auth — Authentication/session handling
- TailwindCSS + shadcn/ui — UI and component library
- Inngest — Event-driven background jobs
- react-hook-form — Client-side forms
- Lucide icons — Vector icons

---

# Stock Tracker

A modern, full-stack stock market web app that provides real-time quotes, interactive charts, personalized watchlists, alerts, and AI-driven insights.

Owned and developed with Next.js, TypeScript, TailwindCSS, and Better Auth for authentication. The project includes server-side workflows using Inngest and persists data in MongoDB.

--

## Table of contents

- [Features](#features)
- [Tech stack](#tech-stack)
- [Quick start](#quick-start)
- [Environment variables](#environment-variables)
- [Development workflow](#development-workflow)
- [Testing & diagnostics](#testing--diagnostics)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

--

## Features

- Real-time market quotes and interactive charts
- Symbol/company search and discovery
- User watchlists and customizable alerts (email)
- AI-generated market summaries and insights
- Authentication and user sessions (Better Auth + MongoDB)
- Background jobs and event-driven workflows (Inngest)

## Tech stack

- Next.js (App Router)
- React + TypeScript
- TailwindCSS + shadcn/ui
- Better Auth (authentication)
- MongoDB (Atlas or self-hosted)
- Inngest (server-side/background jobs)
- react-hook-form, cmdk (optional), lucide-react

## Quick start

Follow these steps to run the project locally.

1. Clone the repo and install dependencies

   git clone https://github.com/<your-username>/stock-tracker.git
   cd stock-tracker
   npm install

2. Create a copy of the environment file

   - Create a `.env.local` (or `.env`) file in the repo root and add the variables described in the [Environment variables](#environment-variables) section.

3. Run the development server

   npm run dev

Open http://localhost:3000 in your browser.

## Environment variables

Add the following variables to `.env.local` (values depend on your environment):

- MONGODB_URI — MongoDB connection string (Atlas recommended)
- BETTER_AUTH_CLIENT_ID — Better Auth client/config values if needed
- NEXT_PUBLIC_TRADINGVIEW_SYMBOL — Optional default for TradingView widget
- (Any other app-specific keys referenced in `next.config.ts` or server actions)

Keep secrets out of source control.

## Development workflow

- Use the App Router and server actions for server-side logic. For more predictable client→server behavior you can also create API routes.
- UI primitives are in `components/ui/*` and pages use `app/*` (App Router).
- Styling: TailwindCSS with shadcn/ui components.

## Testing & diagnostics

- Type-check and lint the codebase:

  npm run typecheck
  npm run lint

- Quick MongoDB connectivity test (example script included):

  node scripts/test-mongo-connection.js

If you see connection errors, verify your `MONGODB_URI`, DNS resolution for Atlas (SRV records), and that your IP is allowed in the Atlas network whitelist.

## Deployment

- Vercel is recommended for seamless Next.js deployment.
- Ensure environment variables are configured in your deployment environment.
- If using MongoDB Atlas, configure IP access and use the cluster's connection string.

## Contributing

Contributions are welcome. Please open issues for bugs or feature requests and submit PRs against the `main` branch.

Guidelines:

- Follow existing project style (TypeScript, React, Tailwind).
- Run linters and type checks before submitting PRs.
- Include tests for new business logic where feasible.

## License

This project is provided under the MIT License. See the LICENSE file for details.
