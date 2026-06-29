export default function MainContent() {

  const parts = [
    {id: 1, name: "GENERAL INFORMATION"},
    {id: 2, name: "EDUCATION EXPERIENCE"},
    {id: 3, name: "PRACTICAL EXPERIENCE"},
    {id: 4, name: "SKILLS"},
    {id: 5, name: "PROJECTS"},
    {id: 6, name: "SUMMARY"}
  ]


  return (
    <main>
      Main Content
      {parts.map((part) => (
        <div className="parts" key={part.id}>
          {part.name}
        </div>
      ))}
    </main>
  )
}