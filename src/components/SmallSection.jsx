
import svg1 from '../assets/exam 1.png'
import svg2 from '../assets/online-test 1.png'
import svg3 from '../assets/certification 1.png'

const SmallSection = () => {
  return (
    <div className='flex justify-center'>
        <div className='small-section flex items-center p-10 text-white'>
      <div className='flex gap-3'>
        <img className='svg' src={svg1} alt="" />
        <div>
            <h1 className='
            text-2xl'>Proposed Solution</h1>
            <p className='mt-3 font-light'>Presenting our innovative AI-driven platform as a solution</p>
        </div>
      </div>
      <div className='flex gap-3'>
        <img className='svg' src={svg2} alt="" />
        <div>
            <h1 className='text-2xl'>Future Prospects</h1>
            <p className='mt-3  font-light'>Presenting our innovative AI-driven platform as a solution</p>
        </div>
      </div>
      <div className='flex gap-3'>
        <img className='svg' src={svg3} alt="" />
        <div>
            <h1 className='text-2xl'>Call to Action</h1>
            <p className='mt-3  font-light'>Presenting our innovative AI-driven platform as a solution</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SmallSection
