import  obj1  from "../assets/OBJECTS (1).png"
import hearts from '../assets/hearts 1.png'

const Section = () => {
  return (
    <div className="sec-sec p-20 flex gap-20 justify-around">
      <div>
        <img src={obj1} alt="" />
      </div>
      <div>
        <h1 className="text-6xl font-bold">Premium <span className="col">Learning</span> Experience</h1>
        <div className="mt-20">
            <div className="flex ">
                <img className="img-1" src={hearts} alt="" />
                <div className="para ml-5">
                    <h1 className="text-3xl font-semibold">Easily Accessible</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
            </div>
            <div className="flex mt-5">
                <img className="img-1 " src="" alt="" />
                <div className="para ml-5">
                    <h1 className="text-3xl font-semibold">Accessibility</h1>
                    <p>Credentials can be easily accessed by institutions and employers globally.</p>
                </div>
            </div>
            <div className="flex mt-5">
                <img className="img-1 " src={hearts} alt="" />
                <div className="para ml-5">
                    <h1 className="text-3xl font-semibold">Adaptive Learning</h1>
                    <p>Tailors quizzes to the proficiency level of each student.</p>
                </div>
            </div>
            <div className="flex mt-5">
                <img className="img-1 " src={hearts} alt="" />
                <div className="para ml-5">
                    <h1 className="text-3xl font-semibold">Engagement</h1>
                    <p>Keeps students engaged with personalized and challenging content.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Section
