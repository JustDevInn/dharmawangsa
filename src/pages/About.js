import React from "react";
// import images
import dog1 from '../img/dharmawangsa1.png';
import dog2 from '../img/dharmawangsa2.png';
import dog3 from '../img/dharmawangsa3.png';
// linking
import { Link } from 'react-router-dom';
// framer motion
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
// import transition
import { transition1 }  from '../transitions';

const About = () => {
  return (
    <div id="toppage" className="pt-[100px] lg:pt-[140px]">

      {/* PURPOSE AND COMPASSION */}
      <section className="section bg-secondary flex flex-col justify-center items-center ">
        {/* img */}
        <div className="h-2/4 w-screen flex justify-end">
        <motion.img
        variants={fadeIn('down')}
        initial="hidden"
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
            className="z-20 object-left object-none h-[400px]"
            src={dog3}
            alt="dog"
          />
        </div>
        {/* text */}
      <motion.div
        variants={fadeIn('up')}
        initial="hidden"
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
      className="pl-10 md:pl-20 z-10 text-left
        flex flex-col md:justify-start justify-center items-start h-2/4 w-screen ">
      <h1 className="h1">Purpose</h1>
      <h1 className="h2">Compassion</h1>
    </motion.div>
    </section>

     {/* button section */}
     <section className="semisection px-[20px] flex justify-center items-center">
      <div className="flex flex-row justify-center items-center">
      <Link to="/#adopt1">
      <button className="btn md:btnlg mx-[15px] md:mx-[80px]">Adopt</button>
    </Link>
    <Link to="/#adopt1">
      <button className="btn md:btnlg mx-[15px] md:mx-[80px]">Foster</button>
    </Link>
    <Link to="/donate/#donatenow" smooth={true} duration={500}>
      <button className="btn md:btnlg mx-[15px] md:mx-[80px]">Donate</button>
    </Link>
      </div>
    </section>

    {/* WHAT WE DO */}
    <section className="semisection bg-secondary flex justify-center items-center">
      <div className="flex justify-center items-center">
      <motion.h1
            initial={{scale: 0, y: '100%'}}
            animate={{scale: 1, y: 0}}
            exit={{scale: 0, y: '100%'}}
            transition={transition1}
      className="h1 lg:text-[120px] font-normal">what we do</motion.h1>
      </div>
    </section>

        {/* ADOPTIONS */}
    <section className="h-[150px] md:semisection flex justify-center items-center">
      <div className="flex justify-center items-center">
      <h1 className="h2 font-bold">adoptions</h1>
      </div>
    </section>

    <section className="relative section bg-secondary flex flex-row justify-center items-center ">
  {/* text */}
    <div className="z-20 absolute md:left-[100px]
    flex flex-col justify-center items-center w-1/2 md:w-4/6 xl:w-1/2 text-left">
      <h5 className="text-[20px] md:text-[35px] font-light uppercase leading-[120%] tracking-[0.2em] mb-5">
      Adopting a dog is one of the most rewarding experiences you can have.”
      </h5>
      <h2 className="text-[12px] md:text-[25px] font-extralight leading-[120%] tracking-[0.1em] mb-2">
      By taking an animal in need temporarily into your home you're freeing up a spot so the shelter or rescue can take in another dog.
      Giving your foster dog the time he needs to be ready for adoption.helping the shelter or rescue learn more about the dog so he can
      end up in the best home possible. Socialising the dog to a home environment and possibly getting him used to being around other pets
       and different types of people.
      </h2>
    </div>
    {/* img */}
    <div>
          <img
            className="hidden lg:flex z-10 absolute right-0 bottom-0 object-left h-[800px] max-w-[calc(100vw - 20px)] md:max-w-none"
            src={dog2}
            alt="dog"
            // h-[800px] md:h-[900px]
          />
        </div>
    </section>

   {/* FOSTERING */}
   <section className="h-[150px] md:semisection flex justify-center items-center">
      <div className="flex justify-center items-center">
      <h1 className="h2 font-bold">fostering</h1>
      </div>
    </section>

    <section className="relative section bg-secondary flex flex-row justify-center items-center ">
    {/* img */}
    <div>
          <img
            className="hidden lg:flex z-10 absolute left-0 bottom-0 object-left h-[650px] max-w-[calc(100vw - 20px)] md:max-w-none"
            src={dog1}
            alt="dog"
            // h-[800px] md:h-[900px]
          />
        </div>
        {/* text */}
    <div className="z-20 absolute
    flex flex-col justify-center items-center w-1/2 md:w-4/5 lg:w-1/2 lg:right-[50px] text-right">
      <h5 className="text-[20px] md:text-[35px] font-light uppercase leading-[120%] tracking-[0.2em] mb-5">
      fostering a dog is one of the most rewarding experiences you can have.”
      </h5>
      <h2 className="text-[12px] md:text-[25px] font-extralight leading-[120%] tracking-[0.1em] mb-2">
      By taking an animal in need temporarily into your home you're freeing up a spot so the shelter or rescue can take in another dog.
      Giving your foster dog the time he needs to be ready for adoption.helping the shelter or rescue learn more about the dog so he can
      end up in the best home possible. 
      </h2>
    </div>
    </section>

      {/* SHELTER */}
      <section className="h-[150px] md:semisection flex justify-center items-center">
      <div className="flex justify-center items-center">
      <h1 className="h2 font-bold">shelter</h1>
      </div>
    </section>

    <section className="relative section bg-secondary flex flex-row justify-center items-center ">
  {/* text */}
    <div className="z-20 absolute
    flex flex-col justify-center items-center w-1/2 md:w-4/5 lg:w-1/2 lg:left-[50px] text-left">
      <h5 className="text-[20px] md:text-[35px] font-light uppercase leading-[120%] tracking-[0.2em] mb-5">
      sheltering a dog in need is one of the most rewarding experiences you can have.”
      </h5>
      <h2 className="text-[12px] md:text-[25px] font-extralight leading-[120%] tracking-[0.1em] mb-2">
      By taking an animal in need temporarily into your home you're freeing up a spot so the shelter or rescue can take in another dog.
      Giving your foster dog the time he needs to be ready for adoption.helping the shelter or rescue learn more about the dog so he can
      end up in the best home possible. Socialising the dog to a home.
      </h2>
    </div>
    {/* img */}
    <div>
          <img
            className="hidden lg:flex z-10 absolute right-0 bottom-0 object-left h-[500px] max-w-[calc(100vw - 20px)] md:max-w-none"
            src={dog3}
            alt="dog"
            // h-[800px] md:h-[900px]
          />
        </div>
    </section>

    {/* ADOPT | FOSTER form*/}

    <section className="section p-5 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
      <h1 className="text-[30px] lg:text-[90px] font-semibold uppercase tracking-[0.2em] mb-10">adopt | foster</h1>
        {/* form */}
        <form
            action="https://getform.io/f/19890081-7383-4319-832f-c7a6294b1408"
            method="POST"
            className='flex flex-col gap-y-4 px-5 '>
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
    </div>
    );
};

export default About;
