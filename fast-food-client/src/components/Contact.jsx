 
const Contact = () => {
    return (
        <div className="bg-green-400 min-h-screen flex flex-col">
      <main className="container mx-auto mt-10 p-6   shadow-md rounded flex-1">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="mb-6">If you have any questions, please fill out the form below and we will get back to you as soon as possible.</p>
        <form className="space-y-4" >
                          <div className="lg:flex mb-4 ">
                                <div className="lg:w-1/2 lg:mr-4 sm:w-full">
                                    <label className="label">
                                        <span className="">Name</span>
                                    </label>
                                    <input type="text" name="foodName" placeholder="Enter Your Name" className="input input-bordered w-full" required />
                               </div>  
                               <div className="lg:w-1/2 sm:w-full">
                                    <label className="label">
                                        <span className=" ">Email</span>
                                    </label>
                                    <input type="text" name="quantity" placeholder="Enter Your Email" className="input input-bordered w-full" required />
                               </div>
                            </div> 
           
                         <div>
            <label className='label'>Message:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder='Type Your Message'
              className="input input-bordered w-full h-40"
              required
            />
          </div>
          <div>
            <button className="btn btn-outline bg-emerald-950 hover:bg-white text-white px-16 text-lg w-full">Submit</button>
          </div>
        </form>
      </main>
      <div className=''>
        <iframe className='w-full mx-auto h-screen' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.252593245769!2d89.12354317477649!3d23.233893608410195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff1857a2783a7f%3A0x4b39b71c8cc3df58!2sJashore%20University%20of%20Science%20and%20Technology%20Cafeteria!5e0!3m2!1sen!2sbd!4v1716562302120!5m2!1sen!2sbd"  allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>  
      </div>
    </div>
    );
};

export default Contact;