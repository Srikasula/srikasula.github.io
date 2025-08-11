export default function Hero() {
  return (
    <div className="py-16 text-center">
      <h1 className="text-4xl md:text-5xl font-bold">Srikanth Kasula</h1>
      <p className="mt-2 text-lg text-gray-600">Senior Software Engineer · Dallas, TX</p>
      <p className="mt-4 max-w-3xl mx-auto text-gray-700">
        Senior Software Engineer with 7+ years delivering enterprise-scale fintech and healthcare solutions—
        secure payment platforms, AI-powered fraud detection, and high-performance APIs. Skilled in Python, Java,
        React, and AWS; experienced in CI/CD automation, scalability, and API security.
      </p>
      <div className="mt-6 flex gap-3 justify-center">
        <a href="mailto:srigoud2308@gmail.com" className="px-5 py-2 rounded bg-blue-600 text-white">Contact</a>
        <a href="public_resume.docx" download className="px-5 py-2 rounded border">
          Download Resume
        </a>
      </div>
    </div>
  )
}
