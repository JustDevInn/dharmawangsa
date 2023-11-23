import React from "react";

const Contact = () => {
  return (
  <div className="pt-[100px] lg:pt-[140px]">
    {/* GET IN TOUCH form*/}
<section className="section p-5 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center md:flex-row">
      <h1 className="h1 mb-10 md:mb-0 text-center">
        get in touch
      </h1>
        {/* form */}
        <form
            action="https://getform.io/f/19890081-7383-4319-832f-c7a6294b1408"
            method="POST"
            className='flex flex-col gap-y-4 px-5 md:w-1/2'>
            <div className='flex gap-x-10'>
              <input className="outline=none border-b
              border-b-primary h-[60px] bg-transparent
               font-secondary w-full pl-3
               placeholder:text-[#757879] "
              type="text"
              name="name"
              placeholder='Your name'/>
               <input className="outline=none border-b
              border-b-primary h-[60px] bg-transparent
               font-secondary w-full pl-3
               placeholder:text-[#757879] "
              type="text"
              name="email"
              placeholder='Email address'
              required
              />
            </div>
            <input className="outline=none border-b
              border-b-primary h-[60px] bg-transparent
               font-secondary w-full pl-3
               placeholder:text-[#757879] "
              type="text"
              name="subject"
              placeholder='Subject'
              required
              />
            <textarea className="outline=none border-b
              border-b-primary h-[100px] bg-transparent
               font-secondary w-full pl-3
               placeholder:text-[#757879] "
              type="text"
              name="message"
              placeholder='Your message'
              required
              />
              <button type="submit" className='btn md:btnlg mt-[30px] mx-auto
              '>
                Send
              </button>
          </form>
      </div>
    </section>
  </div>
  );
};

export default Contact;
