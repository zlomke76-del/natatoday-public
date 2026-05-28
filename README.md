# NATA Today

Dealer-first recruiting infrastructure for modern automotive hiring.

NATA Today is a workforce orchestration and candidate-readiness platform designed for automotive dealerships, recruiter networks, and hiring organizations operating under real-world staffing pressure.

This repository contains the **public-facing experience layer only** — including the marketing site, public demos, onboarding surfaces, and static brand assets.

The production operating system, protected workflows, infrastructure services, and runtime orchestration layers are intentionally excluded from this repository.

---

# Public Repository Scope

This repository is intended for:

* Public deployment demos
* Brand and design review
* Partner evaluation
* UI/UX collaboration
* Marketing and recruiting previews
* Lightweight frontend experimentation

This is **not** the private production platform.

---

# Included In This Repository

## Public Website

* Landing pages
* Product positioning pages
* Dealer overview pages
* Candidate overview pages
* Careers and informational pages
* Demo interaction surfaces
* Public navigation and branding

## Frontend Experience Components

* UI components
* Styling system
* Animations
* Public assets
* Audio/video demo assets
* Mobile-responsive layouts

## Deployment Scaffolding

* Next.js application structure
* Public environment templates
* Build configuration
* Example deployment setup

---

# Excluded From This Repository

The following systems are intentionally removed or protected:

## Protected Infrastructure

* Production databases
* Supabase service-role configuration
* Internal schemas and migrations
* Production storage buckets
* Operational admin tooling

## Private Runtime Systems

* Candidate scoring logic
* Recruiter orchestration
* Dealer workflow management
* Internal approval systems
* Matching and ranking engines
* Automation pipelines
* State synchronization systems

## Sensitive Integrations

* Stripe
* Twilio
* Resend
* OpenAI
* Daily
* Webhooks
* Scheduled jobs
* Background workers
* Internal APIs

## Protected Data

* Real candidate records
* Dealer operational data
* Internal communications
* Production environment variables
* Access credentials
* Service secrets

---

# Technology Stack

NATA Today is built using:

* Next.js
* React
* TypeScript
* Tailwind CSS
* Vercel deployment infrastructure

The production platform additionally utilizes protected infrastructure and operational services that are not included in this repository.

---

# Local Development

## Install dependencies

```bash
npm install
```

## Start development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

# Production Build

```bash
npm run build
npm start
```

---

# Environment Variables

This public repository does not require production credentials.

Use:

```text
.env.example
```

as the template for local development.

Never commit:

* service-role keys
* production API tokens
* dealer data
* candidate data
* operational secrets

---

# Security Notice

This repository is intentionally sanitized for public release.

Do not use this repository as the authoritative production source.

All protected infrastructure, operational orchestration, and runtime systems should remain isolated within private repositories and controlled deployment environments.

If you discover a security issue or exposed credential, please report it responsibly.

---

# Architectural Positioning

NATA Today is designed around a dealer-first operational model focused on:

* candidate readiness
* recruiter coordination
* workflow visibility
* hiring continuity
* operational speed
* scalable dealership staffing infrastructure

The broader production platform includes protected orchestration systems not represented in this public repository.

---

# Deployment

Recommended deployment platforms:

* Vercel
* Netlify
* Docker-based environments

Example:

```bash
vercel deploy
```

---

# License

Copyright © NATA Today.

All rights reserved unless otherwise specified in the accompanying `LICENSE` file.

This repository may not be used to recreate, clone, reverse engineer, or commercially reproduce protected operational systems, workflows, or infrastructure contained within the private production platform.

---

# Contact

For partnerships, enterprise inquiries, or platform access:

* Website: https://natatoday.ai
* Email: [contact@natatoday.ai](mailto:contact@natatoday.ai)
