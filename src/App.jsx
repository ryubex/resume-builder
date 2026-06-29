import Header from './assets/components/Header'
import Sidebar from './assets/components/Sidebar'
import MainContent from './assets/components/MainContent'
import ActionBar from './assets/components/ActionBar'
import './assets/styles/App.css'

function App() {
  return (
    <div className='App'>
        <Header />
        <div className='Center'>
          <Sidebar />
          <MainContent className="main"/>
        </div>
        <ActionBar />
    </div>
  )
}

export default App
