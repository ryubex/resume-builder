import Header from './assets/components/Header'
import Sidebar from './assets/components/Sidebar'
import MainContent from './assets/components/MainContent'
import ActionBar from './assets/components/ActionBar'
import './assets/styles/App.css'
import { useState } from "react";

function App() {

  const [resumeData, setResumeData] = useState({
    generalInfo: {
      name: "",
      email: "",
      phone: ""
    },

    education: {
      school: "",
      degree: "",
      years: ""
    },

    experience: {
      job: "",
      company: "",
      duration:""
    }
  })


  return (
    <div className='App'>
        <Header />

        <div className='Center'>
          <Sidebar />

          <MainContent 
            className="main"
            resumeData={resumeData}
            setResumeData={setResumeData}
          />
        </div>

        <ActionBar />
    </div>
  )
}

export default App
