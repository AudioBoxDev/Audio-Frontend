import { Button } from "@/components/ui/button"

interface Section {
  id: string
  title: string
}

interface TableOfContentsProps {
  sections: Section[]
  activeSection: string
}

export default function TableOfContents({ sections, activeSection }: TableOfContentsProps) {
  return (
    <nav className="hidden lg:block sticky top-8 h-fit w-64 bg-gray-900 p-4 rounded-lg border border-gray-800">
      <h2 className="text-xl font-semibold mb-4 text-white">Table of Contents</h2>
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <Button
              variant="ghost"
              className={`w-full justify-start text-left ${
                activeSection === section.id
                  ? "bg-gray-800 text-white"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
              onClick={() => {
                document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              {section.title}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

