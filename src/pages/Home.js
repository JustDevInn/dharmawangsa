import React from "react";
// images
import dog1 from '../img/dharmawangsa1.png';
import dog2 from '../img/dharmawangsa2.png';
import dog3 from '../img/dharmawangsa3.png';
// linking
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
// framer motion
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const Home = () => {
  return (
    // Homepage
  <div id="toppage" className="pt-[100px] lg:pt-[140px]">
  {/* RESCUING IS OUR TRUE PASSION */}
    <section className="relative section bg-secondary flex flex-row justify-center items-center ">
  {/* text */}
    <motion.div
        variants={fadeIn('down')}
        initial="hidden"
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
    className="z-20 absolute left-[30px] lg:left-[100px] bottom-[100px] md:bottom-[80px]
    flex flex-col justify-center items-start">
      <h1 className="h1">Rescuing</h1>
      <h2 className="h2">Committed to Lifesaving</h2>
    </motion.div>
    {/* img */}
    <div>
        <motion.img
        variants={fadeIn('up')}
        initial="hidden"
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
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
  <ScrollLink to="adopt1" smooth={true} duration={500}>
    <button className="btn md:btnlg mx-[15px] md:mx-[80px]">Adopt</button>
  </ScrollLink>
  <ScrollLink to="adopt1" smooth={true} duration={500}>
    <button className="btn md:btnlg mx-[15px] md:mx-[80px]">Foster</button>
  </ScrollLink>
  <Link to="/donate/#donatenow">
    <button className="btn md:btnlg mx-[15px] md:mx-[80px]">Donate</button>
  </Link>
  </div>
</div>

  {/* SAVING DAILY LIVES */}
  <section className="relative section bg-secondary flex flex-row justify-center items-center ">
    {/* img */}
    <div>
          <motion.img
            variants={fadeIn('down')}
        initial="hidden"
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
            className="z-10 absolute left-0 bottom-0 object-cover h-[650px]"
            src={dog1}
            alt="dog"
          />
        </div>

    {/* text */}
    <motion.div
        variants={fadeIn('up')}
        initial="hidden"
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
    className="z-20 absolute right-[30px] text-right lg:right-[150px]
    flex flex-col justify-center bottom-[30px]">
      <h1 className="h1">we</h1>
      <h1 className="h1">save</h1>
      <h1 className="h1">lives</h1>
    </motion.div>

    </section>

{/* ADOPT | FOSTER form*/}

    <section 
    id="adopt1"
    className="section p-5 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
      <h1 className="text-[30px] lg:text-[90px] font-semibold uppercase tracking-[0.2em] mb-10">adopt | foster</h1>
        {/* form */}
        <form
            action="https://getform.io/f/19890081-7383-4319-832f-c7a6294b1408"
            method="POST"
            className='flex flex-col gap-y-4 px-5'>
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
    <div className="z-20 md:pl-10 h-full flex flex-col justify-center items-center md:items-start">
      <motion.h1
      variants={fadeIn('up')}
        initial="hidden"
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
      className="h1 mb-6">our mission</motion.h1>
      <p className="bg-secondary w-2/3 md:w-1/2 text-sm lg:text-lg h-full md:uppercase tracking-[0.1em] font-light">
      Our mission intertwines compassion and action, offering a haven for Bali's stray dogs. <br></br><br></br>We provide shelter, love, and healing for rescued dogs, nurturing them through fostering while striving to increase adoption rates. Our efforts extend to reducing stray populations through ethical practices, ensuring a brighter future for these animals. <br></br><br></br>With a focus on health, care, and finding forever homes, we work to eliminate diseases, reduce abandonment, and foster positive perceptions towards strays.
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
