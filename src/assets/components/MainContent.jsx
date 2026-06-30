import '../styles/MainContent.css'
import GeneralInfo from './subcomponents/GeneralInfo'
import Education from './subcomponents/Education'
import Experience from './subcomponents/Experience'

export default function MainContent({ resumeData, setResumeData }) {

  return (
    <main className="main">
      <GeneralInfo 
        resumeData={resumeData}
        setResumeData={setResumeData}
      />
      <Education />
      <Experience />
    </main>
  )
}