export default function Projects() {
  const items = [
    {
      name: "Payment Processing Platform",
      detail: "High-throughput, PCI-compliant microservices with fraud detection integration; AWS + Kubernetes; observability and CI/CD.",
    },
    {
      name: "AI Fraud Detection",
      detail: "TensorFlow/Sklearn pipelines (feature engineering, model serving) integrated with REST APIs and real-time alerts.",
    },
    {
      name: "Customer Support Chatbot",
      detail: "NLP chatbot using FastAPI + RAG; integrated with internal APIs for ticket workflows and knowledge retrieval.",
    },
  ]
  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold">Projects</h2>
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        {items.map((p) => (
          <div key={p.name} className="bg-white rounded border p-4">
            <h3 className="font-semibold">{p.name}</h3>
            <p className="text-sm text-gray-700 mt-1">{p.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
