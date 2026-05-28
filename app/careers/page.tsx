import Link from "next/link";
import Nav from "../components/Nav";

const sampleRoles = [
  {
    title: "Service Technician",
    location: "Houston market",
    type: "Full-time",
    summary:
      "Structured technician intake for dealerships that need certification, availability, and readiness signals visible before manager time is spent.",
  },
  {
    title: "Sales Consultant",
    location: "Texas market",
    type: "Full-time",
    summary:
      "Candidate-ready sales profiles built around communication fit, follow-up discipline, and showroom readiness.",
  },
  {
    title: "BDC Representative",
    location: "Remote / dealership support",
    type: "Full-time",
    summary:
      "Phone-fit and CRM-readiness screening for customer-facing dealership support roles.",
  },
];

export default function CareersPage() {
  return (
    <main className="shell">
      <Nav />
      <section className="public-page-wrap">
        <div className="eyebrow">Dealership Careers</div>
        <h1>Find your next dealership role.</h1>
        <p className="lede">
          This public demo shows how NATA Today presents opportunities and candidate
          readiness without exposing private hiring operations or live candidate data.
        </p>

        <div className="public-card-grid">
          {sampleRoles.map((role) => (
            <article className="public-card" key={role.title}>
              <div className="public-card-kicker">{role.type}</div>
              <h2>{role.title}</h2>
              <p className="public-card-meta">{role.location}</p>
              <p>{role.summary}</p>
            </article>
          ))}
        </div>

        <div className="public-callout">
          <h2>Candidate pool</h2>
          <p>
            Production applications, candidate matching, recruiter review, SMS/email
            notifications, and interview scheduling remain private in the secured
            operating repository.
          </p>
          <Link className="btn btn-primary" href="/candidate-demo">
            View Candidate Demo
          </Link>
        </div>
      </section>
    </main>
  );
}
