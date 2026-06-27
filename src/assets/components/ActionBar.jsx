import { FiEye } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";
import '../styles/ActionBar.css'

export default function ActionBar() {

  return (
    <footer>
      <button className='actionbar-btn' key={'preview-btn'}>
        <FiEye />PREVIEW CV
      </button>

      <button className='actionbar-btn' key={'download-btn'}>
        <FiDownload />DOWNLOAD/SUBMIT CV
      </button>

    </footer>
  )
}