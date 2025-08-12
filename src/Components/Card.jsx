import React from 'react'

const Card = ({ Image, Heading, Discription}) => {
  return (
    <div className=' border-4 bg-white border-gray-200 rounded-xl hover:scale-105 hover:shadow-xl hover:shadow-blue-200 '>
        <div className='w-[350] m-8 h-[354] space-y-3 text-wrap rounded'>
                <img src={Image} alt="Image.png" />
                <h1 className='text-2xl font-semibold'>{Heading}</h1>
                <p className='text-[#7D7987]'>{Discription}</p>
        </div>
    </div>
  )
}

export default Card