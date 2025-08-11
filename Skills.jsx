export default function Skills() {
  const groups = [
    { title: "Frontend", items: ["React.js", "Angular", "Vue.js", "JavaScript", "TypeScript", "HTML5", "CSS3"] },
    { title: "Backend", items: ["Python", "Java", "FastAPI", "Django", "Flask", "Spring MVC", "Hibernate"] },
    { title: "Databases", items: ["PostgreSQL", "MySQL", "Redis", "Oracle", "DB2"] },
    { title: "Cloud & DevOps", items: ["AWS (EC2, S3, Lambda, RDS)", "AWS CDK", "Google Cloud", "Docker", "Kubernetes", "Jenkins", "Terraform"] },
    { title: "AI/ML", items: ["TensorFlow", "PyTorch", "Scikit-learn", "NLP", "Hugging Face"] },
    { title: "Security", items: ["OAuth2", "JWT", "SAML", "PCI DSS", "HIPAA Compliance"] },
    { title: "Tools & Methods", items: ["Git", "GitHub", "Bitbucket", "Jira", "Postman", "Swagger", "Agile, Scrum, TDD"] },
  ]
  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold">Technical Skills</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {groups.map((g) => (
          <div key={g.title} className="bg-white rounded border p-4">
            <h3 className="font-semibold">{g.title}</h3>
            <ul className="mt-2 list-disc list-inside text-sm text-gray-700">
              {g.items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
