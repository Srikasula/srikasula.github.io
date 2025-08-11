export default function Navbar() {
  const items = [
    ["home", "Home"],
    ["skills", "Skills"],
    ["experience", "Experience"],
    ["education", "Education"],
    ["certifications", "Certifications"],
    ["projects", "Projects"],
    ["contact", "Contact"],
  ]
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <nav className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="#home" className="font-semibold">Srikanth Kasula</a>
        <ul className="flex gap-4 text-sm">
          {items.map(([id, label]) => (
            <li key={id}><a className="hover:text-blue-600" href={`#${id}`}>{label}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
