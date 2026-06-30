import '../styles/Sidebar.css'
import { GoPerson } from "react-icons/go";
import { RiGraduationCapLine } from "react-icons/ri";
import { HiOutlineBriefcase } from "react-icons/hi";
import { LuPencil } from "react-icons/lu";
import { FaRegFolder } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";



export default function Sidebar() {

  const sections = [
    { name: "General Info", icon: GoPerson},
    { name: "Education", icon: RiGraduationCapLine},
    { name: "Experience", icon: HiOutlineBriefcase},
  ];


  return (
    <aside className="sidebar">
      {sections.map(({name, icon: Icon}) =>(
        <button className="sidebar-btn" key={name}>
          <Icon />
          {name}
        </button>
      ))}
    </aside>
  )
}