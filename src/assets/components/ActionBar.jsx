import { FiEye } from "react-icons/fi";
import '../styles/ActionBar.css'

export default function ActionBar() {
  return (
    <footer>
      <button className='preview-btn'>
      PREVIEW CV
      </button>

      <button className='download-btn'>
      DOWNLOAD/SUBMIT CV
      </button>

    </footer>
  )
}