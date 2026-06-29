import '../styles/MainContent.css'
import GeneralInfo from './subcomponents/GeneralInfo'
import Education from './subcomponents/Education'

export default function MainContent() {

  return (
    <main className="main">
      <GeneralInfo />
      <Education />
    </main>
  )
}