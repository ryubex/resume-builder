import '../styles/MainContent.css'
import GeneralInfo from './subcomponents/GeneralInfo'
import Education from './subcomponents/Education'
import Experience from './subcomponents/Experience'

export default function MainContent() {

  return (
    <main className="main">
      <GeneralInfo />
      <Education />
      <Experience />
    </main>
  )
}