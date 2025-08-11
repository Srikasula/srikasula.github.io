export default function Certifications() {
  const items = [
    "Agentic AI Bootcamp (LangGraph, LangChain, RAG, Pydantic, Ollama) · Udemy · Jun 2025",
    "Wells Fargo Software Engineering Job Simulation · Forage · May 2025",
  ]
  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold">Certifications</h2>
      <ul className="mt-4 list-disc list-inside text-sm text-gray-700">
        {items.map((c) => <li key={c}>{c}</li>)}
      </ul>
    </section>
  )
}
