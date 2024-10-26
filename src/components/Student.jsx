import man from "../assets/Ellipse 34.png"

const Student = () => {
  return (
    <div className='p-20 section-background '>
      <div className="flex justify-center items-center mb-10">
      <div>
        <h1 className='text-3xl font-medium flex justify-center'>What student’s say</h1>
        <p className="stu">Lorem Ipsum is simply dummy text of the printing.</p>
      </div>
      </div>
      <div className="flex justify-center gap-20 items-center ml-10 ">
        <div className="shadow-lg p-6 w-[650px] ">
            <p className=" stu">“Teachings of the great explore of truth, 
the master-builder of human happiness. 
no one rejects,dislikes, or avoids pleasure 
itself, pleasure itself”</p>
            <div className="flex gap-4 mt-5">
                <img src={man} alt="" />
                <div>
                    <h1>Finlay Kirk</h1>
                    <p className="stu">Web Developer</p>
                </div>
            </div>
        </div>
        <div className="shadow-lg p-6 w-[650px] ">
            <p className=" stu">“Complete account of the system and
expound the actual Contrary to popular
belief, Lorem Ipsum is not simply 
random text. It has roots”</p>
            <div className="flex gap-4 mt-5">
                <img src={man} alt="" />
                <div>
                    <h1>Dannette P. Cervantes</h1>
                    <p className="stu">Web Design</p>
                </div>
            </div>
        </div>
        <div className="shadow-lg p-6 w-[650px] ">
            <p className=" stu">“There are many variations of passages
 of Lorem Ipsum available, but the majority
 have suffered alteration in some form,
 by injected humour”</p>
            <div className="flex gap-4 mt-5">
                <img src={man} alt="" />
                <div>
                    <h1>Clara R. Altman</h1>
                    <p className="stu">UI & UX Design</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Student
