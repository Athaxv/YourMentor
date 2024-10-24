import Section from './components/Section'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import SmallSection from './components/SmallSection'
import Tracks from './components/Tracks'

function App() {

  return (
    <>
     <div className='h-screen w-full'>
     <Navbar/>
     <Home/>
     <SmallSection/>
     <Tracks/>
     <Section/>
     </div>
    </>
  )
}

export default App
