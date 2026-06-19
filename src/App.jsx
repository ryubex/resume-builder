import { useState } from 'react'
import Header from './assets/components/Header'
import Sidebar from './assets/components/Sidebar'
import MainContent from './assets/components/MainContent'
import ActionBar from './assets/components/ActionBar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='header'>
        <Header />
      </div>

      <div className='content'>
        <Sidebar />
        <MainContent />
      </div>

      <ActionBar />
    </>
  )
}

export default App
