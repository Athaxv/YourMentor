import logo from '../assets/Group (4).png'

const Footer = () => {
  return (
    <div className="p-20 footer">
      <div className="flex justify-between">
        <div className="w-[318px]">
            <img src={logo} alt="" />
            <p className="font-normal footer">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy a type specimen book.</p>
        </div>
        <div className="foot">
            <h1 className="text-xl foot-foot font-semibold">Company</h1>
            <p>About Us</p>
            <p>How to work?</p>
            <p>Popular Course</p>
            <p>service</p>
        </div>
        <div className="foot">
        <h1 className="text-xl foot-foot font-semibold">Courses</h1>
            <p>Categories</p>
            <p>Offline Course</p>
            <p>Video Course</p> 
        </div>
        <div className="foot">
        <h1 className="text-xl foot-foot font-semibold">Support</h1>
            <p>FAQ</p>
            <p>Help Center</p>
            <p>Career</p> 
            <p>Privacy</p> 
        </div>
        <div className="foot w-[210px]">
        <h1 className="text-xl foot-foot font-semibold">Contact Info</h1>
            <p>+9625222131</p>
            <p>laatharv@gmail.com, 508, Hollow Road</p>  
        </div>
      </div>
      <div className="footer mt-5">
        <hr />
        <p className="footer flex justify-center items-center mt-3">YourMentor, All Right Reserved 2024</p>
      </div>
    </div>
  )
}

export default Footer
