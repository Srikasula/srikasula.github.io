export default function Experience() {
  const jobs = [
    {
      company: "American Express",
      title: "Senior Software Engineer",
      date: "Feb 2024 – Present · Remote · Phoenix, AZ",
      points: [
        "Architected scalable FastAPI/Django payment APIs; +25% throughput, higher reliability.",
        "Built React/Angular/Vue dashboards; -35% exec reporting time via real-time insights.",
        "ML fraud detection + chatbot (TensorFlow/Sklearn); -60% manual review, +15% accuracy.",
        "Optimized Postgres + Redis caching; -40% response time under peak loads.",
        "Docker/Kubernetes + AWS CDK multi-region automation; releases from weekly → daily.",
        "Mentored juniors; led reviews and architecture best practices."
      ]
    },
    {
      company: "ITC Infotech",
      title: "Software Developer",
      date: "Jan 2020 – Aug 2022 · Hyderabad, India",
      points: [
        "Django equipment monitoring on AWS enabling predictive maintenance and secure reporting.",
        "REST APIs for event logging and backend processing; integrated with jQuery UI.",
        "Automated ETL from Excel/HTML/AWS to clean JSON for analytics; Pandas/NumPy reports."
      ]
    },
    {
      company: "JMR Infotech",
      title: "Software Engineer",
      date: "Jun 2017 – Dec 2019 · Bangalore, India",
      points: [
        "Inventory management (Flask/Django/PostgreSQL) improved tracking efficiency by 30%.",
        "Designed REST APIs for product/transaction data; -25% manual reconciliation time.",
        "Angular.js/jQuery dashboards; partnered with QA/DevOps in Agile sprints."
      ]
    },
  ]
  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold">Professional Experience</h2>
      <div className="mt-6 space-y-4">
        {jobs.map((j) => (
          <div key={j.company} className="bg-white rounded border p-4">
            <div className="flex items-baseline justify-between flex-wrap gap-2">
              <h3 className="font-semibold">{j.company} · {j.title}</h3>
              <span className="text-sm text-gray-500">{j.date}</span>
            </div>
            <ul className="mt-2 list-disc list-inside text-sm text-gray-700">
              {j.points.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
