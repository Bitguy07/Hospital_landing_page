import React, { useState } from 'react'
import ArticleCard from './ArticleCard';


import Image_1 from '../assets/Image-14.png';
import Image_2 from '../assets/Image-15.png';
import Image_3 from '../assets/Image-16.png';
import Image_4 from '../assets/Image-17.png';
import Image_5 from '../assets/Image-13.png';

const Article = () => {
  
  const [open,setOpen] = useState(false);
  const toggleButton = () => {
    setOpen(!open);
  }
  
  return (
    <div className='relative w-full h-auto'>
      <div className=' w-full mt-20 h-full'>
        <div className='w-full flex items-center justify-center '>
            {/**Heading */}
            <div className='py-8 text-center '>
                <h1 className='text-4xl font-bold '>Check out our latest article</h1>
                <p className='font-bold text-2xl'>____</p>
            </div>
        </div>

        <div className='mt-4'>
            {/**ArticleCards */}
            <div className=' relative'>
              <img src={Image_4} alt="Image.png" className='absolute right-0 -z-10 -top-7 ' />
              <img src={Image_5} alt="Imagae.png"  className='absolute -z-10 left-1 -top-11'/>
              <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-9 mx-10 md:mx-20'>
                <ArticleCard
                 Image ={Image_1}
                 Heading="Disease detection, check up in the laboratory"
                 Discription="In this case, the role of the health laboratory is very important to do a disease detection..."
                />
                
                <ArticleCard
                 Image ={Image_2}
                 Heading="Herbal medicines that are safe for consumption"
                 Discription="Herbal medicine is very widely used at this time because of its very good for your health..."
                />
                
                <ArticleCard
                 Image ={Image_3}
                 Heading="Natural care for healthy facial skin"
                 Discription="A healthy lifestyle should start from now and also for your skin health.There are some..."
                />
              {open && 
              <>
                <ArticleCard
                 Image ={Image_1}
                 Heading="Disease detection, check up in the laboratory"
                 Discription="In this case, the role of the health laboratory is very important to do a disease detection..."
                />
                
                <ArticleCard
                 Image ={Image_2}
                 Heading="Herbal medicines that are safe for consumption"
                 Discription="Herbal medicine is very widely used at this time because of its very good for your health..."
                />
                
                <ArticleCard
                 Image ={Image_3}
                 Heading="Natural care for healthy facial skin"
                 Discription="A healthy lifestyle should start from now and also for your skin health.There are some..."
                />
              </>
              }
              </div>
            </div>
            
        </div>

        <div className='w-full mt-14 relative'>
            {/**ViewBtn */}
            <div className='flex items-center justify-center'>
              <button className='text-[#458FF6] border-2 border-[#458FF6] rounded-3xl px-12 py-[6px]' onClick={toggleButton}>View {open?"Less":"All"}</button>
            </div>
             
        </div>
      </div>
    </div>
  )
}

export default Article