# Public Repository Notes

This package was prepared from the private NATA Today application as a safe public-facing repository.

## Removed before publication

- `app/api/**` operational API routes
- `app/recruiter/**` private recruiter console
- `app/dealer/**` protected dealer workspace and access routes
- `app/admin/**` administrative surfaces
- `app/candidate/schedule/**` live scheduling workflow
- `lib/**` server-side production logic and integrations
- `docs/ops/**` internal playbooks
- Dynamic job-detail page that queried Supabase directly
- Payment checkout/webhook implementation
- Email/SMS/video/provider webhook implementation
- Production README content containing operational setup details

## Public build intent

The repository now functions as a marketing/demo shell showing the public brand, candidate demo, dealer demo, careers landing, pricing placeholder, privacy policy, and terms.

## Before publishing

- Confirm brand assets are approved for public release.
- Confirm demo candidate names/images are acceptable synthetic/demo assets.
- Keep the production system private.
- Do not add `.env`, service-role keys, provider tokens, or internal routes to this repository.
