import '../styles/MainContent.css'
import { 
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
  TbCircleNumber5Filled,
  TbCircleNumber6Filled
 } from "react-icons/tb";

export default function MainContent() {

  const parts = [
    {id: 1, icon: TbCircleNumber1Filled, name: "GENERAL INFORMATION"},
    {id: 2, icon: TbCircleNumber2Filled, name: "EDUCATIONAL EXPERIENCE"},
    {id: 3, icon: TbCircleNumber3Filled, name: "PRACTICAL EXPERIENCE"},
    {id: 4, icon: TbCircleNumber4Filled, name: "SKILLS"},
    {id: 5, icon: TbCircleNumber5Filled, name: "PROJECTS"},
    {id: 6, icon: TbCircleNumber6Filled, name: "SUMMARY"}
  ]


  return (
    <main className="main">
      {parts.map((part) => (
        <div className="parts" key={part.id}>
          <h2> <part.icon className="part-icon" /> {part.name}</h2>
        </div>
      ))}
    </main>
  )
}