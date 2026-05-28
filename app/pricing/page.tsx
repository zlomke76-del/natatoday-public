import Link from "next/link";
import Nav from "../components/Nav";

const tiers = [
  {
    name: "Starter",
    copy: "For dealerships that want a structured hiring intake and candidate-readiness process.",
  },
  {
    name: "Active Hiring",
    copy: "For stores actively filling sales, BDC, service advisor, and technician roles.",
  },
  {
    name: "Full Operating Support",
    copy: "For teams that need recruiting workflow support across multiple roles or locations.",
  },
];

export default function PricingPage() {
  return (
    <main className="shell">
      <Nav />
      <section className="public-page-wrap">
        <div className="eyebrow">Pricing</div>
        <h1>Simple packages for dealer hiring support.</h1>
        <p className="lede">
          This public repository keeps payment links, checkout logic, webhook handling,
          and dealer access provisioning out of the codebase.
        </p>

        <div className="public-card-grid">
          {tiers.map((tier) => (
            <article className="public-card" key={tier.name}>
              <div className="public-card-kicker">NATA Today</div>
              <h2>{tier.name}</h2>
              <p>{tier.copy}</p>
            </article>
          ))}
        </div>

        <div className="public-callout">
          <h2>Ready to see the workflow?</h2>
          <p>
            Use the public demo pages to review the dealer and candidate experience.
          </p>
          <Link className="btn btn-primary" href="/dealer-demo">
            View Dealer Demo
          </Link>
        </div>
      </section>
    </main>
  );
}
