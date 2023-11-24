import React from "react";

const Footer = () => {
  return (
  <footer className="h-[300px] w-screen bg-secondary">
    <div className="flex flex-col">
    {/* title */}
      <h1
      className=" md:w-full text-center
      text-[30px] md:text-[70px] font-semibold uppercase leading-[120%] tracking-[0.2em] my-[30px]">
      Dharmawangsa
      </h1>
      {/* info */}
      <div className="text-sm flex flex-col justify-center items-start
      pl-20
      md:flex-row md:justify-around">
      <div>
        <h5 className="font-bold uppercase mb-1 tracking-widest">Email</h5>
        <p className="font-thin tracking-widest">Dharmawangsa@gmial.moc</p>
      </div>
      <div>
        <h5 className="font-bold uppercase mb-1 tracking-widest">Phone</h5>
        <p className="font-thin tracking-widest">081 138 9004</p>
      </div>
        <div>
        <h5 className="font-bold uppercase mb-1 tracking-widest">Address</h5>
        <p className="font-thin tracking-widest lowercase">JL. A. A. GEDE RAI NO. 550</p>
        <p className="font-thin tracking-widest lowercase">LODTUNDUH, UBUD, GUANYAR, BALI</p>
        <p className="font-thin tracking-widest lowercase">80571</p>
        </div>
      </div>
      <p className="m-2 text-xs text-gray-600 sm:text-center font-thin">© 2023 <a href="/" class="hover:underline">Dharmawangsa</a>. All rights reserved.</p>
    </div>
  </footer>
  );
};

export default Footer;
