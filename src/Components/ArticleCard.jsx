import React from 'react'

const ArticleCard = ({Image, Heading, Discription}) => {
  return (
    <div className=' rounded-2xl shadow-lg shadow-blue-gray-50 '>
      <div className='w-full'>
        {/**Image */}
        <img src={Image} alt="Image.png" className='w-full h-ull object-cover rounded-t-2xl' />
      </div>

      <div className='flex items-center rounded-b-2xl bg-white justify-center'>
        <div className='text-left mx-2 md:mx-0 w-[270px]'>
          <h1 className='text-[21px] mt-6 font-bold'>
           {Heading}
          </h1>
          <p className='text-base mt-4 mb-7 text-[#7D7987]'>
            {Discription}
          </p>
          <div className='mb-6'>
            <a href="" className='text-[17px] font-medium mr-6  text-[#4089ED]'>Read More</a>
            <span className='text-[#4089ED] relative top-[3px] '>
            <ion-icon name="arrow-forward-outline"></ion-icon>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard