import React from 'react'
import HeroImage from '../assets/Image-1.png'

const HeroSec = () => {
  return (
    <div>
        <div className='w-full md:h-[598px] relative' id='home'>
        <div className=' grid sm:grid-cols-2 items-center justify-center h-full '>
            {/*text*/}
             <div className=' flex items-center justify-center'>
                <div className='max-w-md h-full ' >
                    <div className=' text-center md:text-left pt-14 px-7 sm:px-0 sm:pt-3 md:pt-0'>
                        <h1 className=' font-semibold text-5xl font '>Virtual healthcare for you</h1>
                        <p className='text-[#7D7987] pt-8 text-xl'>Trafalgar provides progressive, and affordable 
                            healthcare, accessible on mobile and online 
                            for everyone
                        </p>
                        <div className='pt-10 '>
                            <button type="button" onClick={() => alert("This functionality not added yet!")} className='text-lg  bg-[#458FF6] text-white rounded-3xl px-6 pt-1 pb-[6px] '>Consult today</button>
                        </div>
                    </div>
                </div>
             </div>
            <div className=' object-cover flex justify-center items-center'>
                <img src={HeroImage} alt="" className='' />
            </div>
        </div>
        </div>
    </div>
  )
}

export default HeroSec