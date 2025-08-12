import React from 'react'
import { Typography } from "@material-tailwind/react";
import image_1 from '../assets/Image-12.png';
import image_2 from '../assets/Image-13.png';

const LINKS = [
    {
      title: "Product",
      items: ["About", "Testimonials", "Find a doctor", "Apps"],
    },
    {
      title: "Company",
      items: ["Indonesia", "Singapore", "Hongkong", "Canada"],
    },
    {
      title: "Resource",
      items: ["Help center", "Contact support", "Instructions", "How it works"],
    },
  ];

  const currentYear = new Date().getFullYear();


const Footer = () => {
  return (
    <footer className="relative w-full md:pt-20 sm:pt-30 pt-20 " id='footer'>
        <span className='absolute z-20 right-20 top-[87px]'>
            <img src={image_2} alt="Image.png"className=''  />
        </span>
    <div className="mx-auto w-full max-w-7xl sm:pt-24 pt-12 bg-gradient-to-t pb-20 from-[#5A98F2] to-[#67C3F3] px-8">
      <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
        <Typography variant="h5" className="mb-6">
          <div className='flex  sm:justify-start md:justify-center justify-center'>
            <div className='w-[370px] '>
                <h1 className='text-white font-bold text-2xl'><span className='font-semibold relative top-[6px] sm:pr-4  pr-2 text-3xl text-white'><ion-icon name="contrast-outline"></ion-icon></span>Trafalgar</h1>
                <p className='text-[#e8e7ea] pt-4 font-light text-lg'>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
                <p className='text-[#e8e3ea] text-base pt-7 font-light '>©Trafalgar PTY LTD 2020. All rights reserved</p>
            </div>
          </div>
        </Typography>
        <div className="grid grid-cols-3 justify-between gap-4">
          {LINKS.map(({ title, items }) => (
            <ul key={title}>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-3 text-[#ffff] text-xl font-bold"
              >
                {title}
              </Typography>
              {items.map((link) => (
                <li key={link}>
                  <Typography
                    as="a"
                    href="#"
                    color="gray"
                    className="py-1.5 font-light text-[#e4e3e7] text-lg transition-colors hover:text-[#ffff]"
                  >
                    {link}
                  </Typography>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <span className='absolute z-20 bottom-0 left-0'>
            <img src={image_1} alt="Image.png"className='w-24 '  />
      </span>
    </div>
  </footer>
)
}

export default Footer