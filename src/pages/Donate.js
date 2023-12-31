import React from "react";
// import images
import dog1 from '../img/dharmawangsa1.png';
import dog2 from '../img/dharmawangsa2.png';
import dog3 from '../img/dharmawangsa3.png';

// linking
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
// framer motion
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const Donate = () => {
  return (<div id="toppage" className="pt-[100px] lg:pt-[140px]">
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
      <h1 className="h1">Donations</h1>
      <h2 className="h2">save lives</h2>
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
    <Link to="/#adopt1">
      <button className="btn md:btnlg mx-[15px] md:mx-[80px]">Adopt</button>
    </Link>
    <Link to="/#adopt1">
      <button className="btn md:btnlg mx-[15px] md:mx-[80px]">Foster</button>
    </Link>
    <ScrollLink to="donatenow" smooth={true} duration={500}>
      <button className="btn md:btnlg mx-[15px] md:mx-[80px]">Donate</button>
    </ScrollLink>
  </div>
</div>

 {/* About */}
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
    <div className="z-20 absolute md:right-[100px]
    flex flex-col justify-center items-center w-2/3 md:w-1/2 md:text-right">
      <h1 className="text-[30px] md:text-[50px] font-semibold uppercase leading-[120%] tracking-[0.2em] mb-10">Supporting Our Cause</h1>
      <h2 className="text-[12px] lg:text-[25px] font-extralight leading-[120%] tracking-[0.1em] mb-2">
      Our mission thrives on your support. Donations fuel our efforts in rescuing, sheltering, and finding homes for dogs in need.<br></br><br></br> Every contribution, big or small, makes a tangible difference in their lives. <br></br><br></br>Your generosity directly impacts our ability to provide medical care, food, shelter, and love to these deserving animals.
      </h2>
    </div>
    </section>

     {/* donations */}
   <section className="h-[150px] md:semisection flex justify-center items-center">
      <div className="flex justify-center items-center">
      <h1 className="h2 font-bold">donations</h1>
      </div>
    </section>

    {/* IMPACT */}
    <section className="relative section bg-secondary flex flex-row justify-center items-center ">
  {/* text */}
    <div className="z-20 absolute md:left-[100px]
    flex flex-col justify-center items-center w-2/3 md:w-1/2 text-left h-full">
      <h1 className="text-[30px] md:text-[50px] font-semibold uppercase leading-[120%] tracking-[0.2em] mb-10 md:mb-5">Your Contributions Matter</h1>
      <h2 className=" md:w-4/5 text-[12px] lg:text-[25px] font-extralight leading-[120%] tracking-[0.1em] mb-2">
      Your donations create ripples of change. <br></br><br></br>They enable us to rescue more dogs, expand our shelter capacity, and ensure each dog finds a loving home. <br></br><br></br>Your support directly translates into transformed lives, providing hope, care, and a second chance to these incredible creatures. <br></br><br></br>Together, we're making a meaningful difference.
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

    {/* DONATE */}
    <section id="donatenow" className="section bg-white flex justify-center items-center text-left">
        <motion.div
        variants={fadeIn('up')}
        initial="hidden"
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
        className="tracking-widest w-1/2 md:w-1/3">
          <h1 className="h1 mb-10">donate</h1>
          <h4 className="font-bold uppercase text-[20px]">bank Transfer - </h4>
          <h5 className="font-normal uppercase text-md">Indonesia</h5>
          <p className="font-light text-sm">JL. A. A. GEDE RAI NO. 550</p>
          <p className="font-light text-sm">LODTUNDUH, UBUD, GUANYAR, BALI</p>
          <p className="font-light text-sm">80571</p>
        </motion.div>
    </section>

    {/* STORIES */}
    <section className="section bg-secondary flex justify-center items-center text-left">
        <div className="w-2/3 md:w-1/2 text-center">
          <h1 className="text-[25px] md:text-[50px] font-semibold uppercase leading-[120%] tracking-[0.2em] mb-10">Heartwarming Chronicles"</h1>
          <h4 className="text-sm md:text-xl tracking-[0.1em] font-extralight">
          "Bringing Luna to Dharmawangsa was a leap of faith. <br></br><br></br>She needed a safe haven to heal, and I needed time to prepare a loving home. The shelter provided more than temporary support; it nurtured her spirit. <br></br><br></br>Now, Luna’s vitality fills our home, a testament to the shelter's transformative care."
          </h4>
        </div>
    </section>

    {/* dogimg */}
    <section className="semisection lg:section flex justify-center items-center">
    <div>
          <motion.img
            variants={fadeIn('up')}
        initial="hidden"
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
            className="z-10 object-dover md:h-[300px] lg:h-[500px] max-w-[calc(100vw - 20px)] md:max-w-none"
            src={dog3}
            alt="dog"
            // h-[800px] md:h-[900px]
          />
        </div>
    </section>
  </div>
  );
};

export default Donate;
