import Section from './components/Section'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import SmallSection from './components/SmallSection'
import Tracks from './components/Tracks'
import Student from './components/Student'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {

  return (
    <>
     <div className='h-screen w-full'>
     <Navbar/>
     <Home/>
     <SmallSection/>
     <Tracks/>
     <Section/>
     <Student/>
     <Newsletter/>
     <Footer/>
     </div>
    </>
  )
}

export default App
