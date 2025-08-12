import React from 'react'
import { useState } from 'react';

const Navbar = () => {
    let Links=[
        {link:"Find a doctor", path:"#doc"},
        {link:"Apps", path:"#doc"},
        {link:"Testimonials", path:"#testimonial"},
        {link:"About us", path:"#footer"},
    ];   

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = ()=>{
        setMenuOpen(!menuOpen);
    };


  return (
    <div className='w-full justify-between sticky top-0 z-50 backdrop-blur-[15px] bg-[rgb(234,239,242,0.8)] inline-flex '>
        <div className='flex p-2 md:p-3 gap-2  '>
            <span className='font-semibold text-3xl text-[#417bbe]'>
            <ion-icon name="contrast-outline"></ion-icon>
            </span>
            <div className='font-bold text-2xl'>
            Trafalgar
            </div>
        </div>
        <div className='md:flex hidden md:m-4 md:gap-5  '>
         <ul className='md:flex flex-row-reverse gap-5 '>
            {
                Links.map((link)=> (
                    <li key={link.link} className='text-[#9090a7]'>
                        <a href={link.path} className=''>{link.link}</a>
                    </li>
                )
            )
            }
         </ul>
         <a className='font-bold cursor-pointer ' href="#home">Home</a>
        </div>
            <div className='text-4xl md:hidden pt-2 pr-2'>
                <button onClick={toggleMenu}>
                    <ion-icon name={menuOpen ?"close" : "reorder-three"}></ion-icon>
                </button>
            </div>
        <div className={`md:hidden  absolute w-full overflow-hidden ${menuOpen? "translate-y-0":"-translate-y-96"} transition-transform ease-in-out duration-500 z-10 tran bg-[#eaeff2]  text-2xl  flex flex-col-reverse top-[53px]  md:m-4 md:gap-5`}>
         <ul className='md:flex  flex-col-reverse gap-5 '>
            {
                Links.map((link)=> (
                    <li key={link.link}>
                        <a href={link.path} className='text-[#9090a7] rounded w-full pb-2 pl-3 block hover:bg-[#c9e0ee]'>{link.link}</a>
                    </li>
                )
            )
            }
         </ul>
         <div className='flex justify-between'>
         <a className='font-bold block w-screen cursor-pointer pl-3 pb-1  hover:bg-[#c9e0ee] rounded ' href='#home'>Home</a>
         </div>
        </div>
    </div>
  )
}

export default Navbar