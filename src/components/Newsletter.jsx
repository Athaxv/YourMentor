


const Newsletter = () => {
  return (
    <div className='p-20 flex justify-center section-background w-full '>
      <div className="letter rounded-md">
        <h1 className='flex justify-center text-3xl font-semibold mt-10 items-center'>Subscribe to our newsletter</h1>
        <p className="flex mt-3 justify-center items-center">Lorem Ipsum is simply dummy text of the printing.</p>
        <div className="flex  justify-center mt-8 mb-10">
            <input className="p-3 w-[300px] input-let rounded-3xl" type="text" placeholder='Email Address' />
            <button className="let-btn rounded-3xl">Send</button>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
