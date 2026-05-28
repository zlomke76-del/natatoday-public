# NATA Today — Public Demo Repository

NATA Today is a dealer-first recruiting and candidate-readiness platform for automotive hiring.

This public repository contains the safe public-facing website and demo surfaces only. It is designed for brand review, marketing collaboration, and lightweight deployment without exposing the private operating system, production database logic, candidate records, recruiter workflows, dealer workspaces, API integrations, or secrets.

## Included

- Public homepage
- Dealer demo page
- Candidate demo page
- Careers landing page
- Pricing redirect/page placeholder
- Privacy policy
- Terms page
- Public image and sound assets used by the demo experience

## Not included

The production repository contains private operating logic that is intentionally excluded from this public version, including:

- Supabase service-role access and schema logic
- Candidate screening and matching internals
- Recruiter dashboards and authorization flows
- Dealer dashboards and protected workspaces
- Email/SMS/voice/video/payment integrations
- Webhooks, scheduled jobs, admin routes, and operational playbooks
- Any production environment variables or secrets

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm start
```

## Environment

This public build does not require private credentials. Use `.env.example` as the starting point for local development.

## Security posture

Do not add production secrets, service-role keys, real candidate data, protected dealer data, or private API routes to this repository. Keep the full operating system in the private repository.

## License

Copyright © NATA Today. All rights reserved unless otherwise stated in `LICENSE`.
