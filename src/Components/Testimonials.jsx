import React from 'react'
import Picture from '../assets/Image-9.png';
import Picture_1 from '../assets/Image-10.png';


const Testimonials = () => {
    return (
      <div className='' id='testimonial'>
        <div className="sm:h-[477px] w-full relative md:top-12 ">
          <div className="grid md:grid-cols-2 sm:grid-cols-2 items-center justify-center h-full">
            <div className="object-cover flex items-center justify-center ">
              {/* Image */}
              <img src={Picture} alt="Image.png" className="" />
            </div>
            <div className="flex items-center justify-center">
              {/* Text */}
              <div className="max-w-md  h-full ">
                <div className="text-center md:text-left px-1 block">
                  <h1 className="text-4xl font-semibold md:leading-normal">Leading healthcare providers</h1>
                  <p className="font-bold text-4xl -mt-2">____</p>
                  <p className="text-[#7D7987] mt-5 md:leading-7 ">
                    Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver.
                  </p>
                  <div className="pt-6 md:pt-4 sm:mt-5 mt-3">
                    <button  onClick={() => alert("This functionality not added yet!")} type="button" className="text-[#458FF6] bg-white border px-8 pb-[7px] pt-[6px]    border-[#458FF6] rounded-full font-bold">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:h-[477px] w-full relative md:top-10 sm:-top-28 ">
        <div className='grid md:grid-cols-2 sm:grid-cols-2 items-center justify-center h-full'>
              <div className='flex items-center justify-center'>
                {/*Text*/}
                  <div className='max-w-md h-full '>
                      <div className='text-center md:text-left px-1 block'>
                        <h1 className='text-4xl font-semibold md:leading-normal md:pr-40 pt-8'>Download our mobile apps</h1>
                        <p className='font-bold text-4xl -mt-2'>____</p>
                        <p className='text-[#7D7987] mt-5 md:leading-7'>Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely</p>
                        
                        <div className="pt-6 md:pt-4 md:mt-5 mt-3 ">
                          <button  onClick={() => alert("This functionality not added yet!")} type="button" className="text-[#458FF6] bg border px-6 pb-[7px] pt-[6px]    border-[#458FF6] rounded-full font-bold">
                          Download
                            <span className='ml-3 relative top-[2px]'>
                            <ion-icon name="arrow-down-outline"></ion-icon>
                            </span>
                          </button>
                        </div>

                      </div>
                  </div>
              </div>
              <div className='flex object-cover items-center justify-center pt-8 md:pt-0'>
                {/*Image*/}
                <img src={Picture_1} alt="Image.png" />
              </div>
            </div>      
        </div>
      </div>
      );
    }
      export default Testimonials;      