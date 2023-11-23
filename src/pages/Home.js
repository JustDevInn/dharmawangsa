import React from "react";
import dog1 from '../img/dharmawangsa1.png';
import dog2 from '../img/dharmawangsa2.png';
import dog3 from '../img/dharmawangsa3.png';

const Home = () => {
  return (
    // Homepage
  <div className="pt-[100px] lg:pt-[140px]">
  {/* RESCUING IS OUR TRUE PASSION */}
    <section className="relative section bg-secondary flex flex-row justify-center items-center ">
  {/* text */}
    <div className="z-20 absolute left-[30px] lg:left-[100px] bottom-[100px] md:bottom-[80px]
    flex flex-col justify-center items-start">
      <h1 className="h1">Rescuing</h1>
      <h2 className="h2">is our true passion</h2>
    </div>
    {/* img */}
    <div>
          <img
            className="z-10 absolute right-0 bottom-0 object-left h-[770px] max-w-[calc(100vw - 20px)] md:max-w-none"
            src={dog2}
            alt="dog"
            // h-[800px] md:h-[900px]
          />
        </div>
    </section>
 
 {/* button section */}
    <div className="semisection px-[20px] flex justify-center items-center">
      <div className="flex flex-row justify-center items-center">
        <button className="btn md:btnlg mx-[15px] md:mx-[80px]">Adopt</button>
        <button className="btn md:btnlg mx-[15px] md:mx-[80px]">Foster</button>
        <button className="btn md:btnlg mx-[15px] md:mx-[80px]">Donate</button>
      </div>
    </div>

  {/* SAVING DAILY LIVES */}
  <section className="relative section bg-secondary flex flex-row justify-center items-center ">
    {/* img */}
    <div>
          <img
            className="z-10 absolute left-0 bottom-0 object-cover h-[650px]"
            src={dog1}
            alt="dog"
          />
        </div>

    {/* text */}
    <div className="z-20 absolute right-[30px] text-right lg:right-[150px]
    flex flex-col justify-center bottom-[30px]">
      <h1 className="h1 
">we</h1>
      <h1 className="h1">save</h1>
      <h1 className="h1">lives</h1>
    </div>

    </section>

{/* ADOPT | FOSTER form*/}

    <section className="section p-5 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
      <h1 className="text-[30px] md:text-[90px] font-semibold uppercase tracking-[0.2em] mb-10">adopt | foster</h1>
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
              name="choice"
              placeholder='Adopt | Foster'
              required
              />
            </div>
            <input className="outline=none border-b
              border-b-primary h-[60px] bg-transparent
               font-secondary w-full pl-3
               placeholder:text-[#757879] "
              type="text"
              name="email"
              placeholder='Email address'
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

    {/* OUR MISSION */}
    <section className="relative section bg-secondary py-10">
    <div className="h-full flex flex-row justify-center items-center">
        {/* text */}
    <div className="z-20 h-full flex flex-col justify-center items-center md:items-start">
      <h1 className="h1 mb-6">our mission</h1>
      <p className="w-2/3 md:w-2/5 h-full lowercase md:uppercase tracking-widest font-light">TO PROVIDE A SAFE-HAVEN RESCUE SHELTER FOR BALI STRAY DOGS TO PROTECT THEM FROM THE CRUEL OUTSIDE WORLD.
          <br /><br />
          TO HUMALY REDUCE THE NUMBERS OF UNWANTED STRAY DOGS THROUGH SPAY AND NEUTERING.
          <br /><br />
          TO IMPROVE ADOPTION RATES, FOR GIVING DOGS IN EMERGENCY SPACE.
          <br /><br />
          TO ELIMINATE RABIES AND DISEASES, REDUCE PET ABANDONMENT AND PROVIDE PUBLIC ATTITUDES TOWARDS STRAY ANIMALS.
      </p>
    </div>
    {/* img */}
    <div>
          <img
            className="hidden md:flex z-10 absolute right-0 bottom-0 object-left h-[500px]"
            src={dog3}
            alt="dog"
          />
        </div>
    </div>
    </section>

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

export default Home;
