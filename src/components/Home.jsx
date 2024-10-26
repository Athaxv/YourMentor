// import { FaSearch } from 'react-icons/fa'
import object from '../assets/OBJECTS.png'

const Home = () => {
  return (
    <div className='flex  p-36 navbar '>
      <div className='gap-10 w-[585px]'>
        <div className=''>
            <h1 className='text-4xl font-extrabold'>Educational ecosystem with blockchain-powered credentials and  <span className='color'>Smart</span> Choice For <span className='color'>Quizzes</span></h1>
            <p className='mt-5'>The educational ecosystem is transforming with the integration of blockchain-powered credentials, creating a more secure and verifiable system for academic achievements.</p>
        </div>
        <div className='mt-10 '>
            <input type="text" className='h-12 input' placeholder='Search for a course..' /><button className='btn btn-1'>Continue</button>
        </div>
      </div>
      <div>
        <img src={object} alt="" />
      </div>
    </div>
  )
}

export default Home
