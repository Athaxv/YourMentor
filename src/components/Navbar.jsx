import logo from '../assets/Group (4).png'

const Navbar = () => {
  return (
    <div className="navbar p-10 h-[60px] items-center  flex justify-around">
      <div className='flex'>
        <img className='h-[24px]' src={logo} alt="go" />
        <h1 className='font-bold  font-3xl'>YourMentor</h1>
      </div>
      <nav className='flex'>
        <ul className=' font-medium items-center flex gap-16 '>
            <li>Home</li>
            <li>About</li>
            <li>Courses</li>
            <li>Contact us</li> 
        </ul>
        <div className='ml-16'>
            <button className='btn'>Sign in</button>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
