import React from 'react'
import image from '../assets/Group 337.png'
import casual from "../assets/casual-life-3d-idea-lamp 1.png"
import arrow from '../assets/Group (5).png'

const Tracks = () => {
  return (
    <div className='mt-10'>
      <div className='flex justify-center items-center'>
      <div>
        <h1 className='flex justify-center text-4xl font-bold'>Our Tracks</h1>
        <p className='font-light mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <img src={casual} className='absolute -translate-x-96 -translate-y-36' alt="" />
        <img src={arrow} className='absolute translate-x-96 ml-40 -translate-y-40' alt="" />
      </div>
      </div>
      <div className='flex gap-5 p-20'>
        <div className='shadow-md p-3 rounded-md w-[490px]'>
            <img src={image}  alt="" />
            <p className='mt-2 font-mono mb-5'>Lorem ipsum dolor sit, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, saepe. amet consectetur adipisicing elit. Velit, magnam.</p>
            <button className='btn-btn '>Read more</button>
        </div>
        <div className='shadow-md p-3 rounded-md w-[490px]'>
            <img src={image} alt="" />
            <p className='mt-2 mb-5 font-mono '>Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut. ipsum dolor sit, amet consectetur adipisicing elit. Velit, magnam.</p>
            <button className='btn-btn '>Read more</button>
        </div>
        <div className='shadow-md p-3 rounded-md w-[490px]'>
            <img src={image} alt="" />
            <p className='mt-2 mb-5 font-mono'>Lorem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quae. ipsum dolor sit, amet consectetur adipisicing elit. Velit, magnam.</p>
            <button className='btn-btn '>Read more</button>
        </div>
      </div>
    </div>
  )
}

export default Tracks
