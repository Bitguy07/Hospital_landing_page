  import image from '../assets/Image-11.png';
  import image_1 from '../assets/Image-12.png';
  import image_2 from '../assets/Image-13.png';
  import { Carousel, IconButton } from "@material-tailwind/react";


  const Employee = [
    {
      'id': 1,
      'name': 'Edward Newgate',
      'post': 'Founder Circle',
      'description': `“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious forms, long calls, or administrative hassle) and securely”`,
      'image': image
    },
    {
      'id': 2,
      'name': 'Carter',
      'post': 'Buisness Manegment',
      'description': `“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious forms, long calls, or administrative hassle) and securely”`,
      'image': image
    },
    {
      'id': 3,
      'name': 'Jack',
      'post': 'Trainee',
      'description': `“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious forms, long calls, or administrative hassle) and securely”`,
      'image': image
    },
    {
      'id': 4,
      'name': 'Sam',
      'post': 'HOD',
      'description': `“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious forms, long calls, or administrative hassle) and securely”`,
      'image': image
    },
  ];


  const EmployeeCard = ({employee}) => {
    return (
      <div className="w-full rounded-2xl h-auto sm:min-h-[425px] grid sm:grid-rows-3 grid-cols-1 bg-gradient-to-r from-[#5A98F2] to-[#67C3F3]">
        {/*Heading */}
        <div className="flex items-center justify-center">
          <div className='text-center sm:px-3 md:p-0 relative top-5 sm:top-0'>
          <h1 className="  text-[#FFFFFF] text-4xl font-bold ">What our customer are saying</h1>
          <p className='text-[#FFFFFF] font-bold'>______</p>
          </div>
        </div>
              {/*Main profile */}
          <div className="row-span-2 sm:h-full h-96 grid sm:grid-cols-2 grid-cols-1">
            <div className="h-full w-full relative top-4 sm:top-0 flex items-center justify-center">

              {/**image */}
              <div className="md:flex  md:gap-16 md:left-0 sm:left-4 sm:gap-5 relative justify-center items-center ">
                
                <div className=" md:m-0 ml-[15px] mr-[15px]  ">
                  <img src={image} alt="Image.png" className='rounded-full  ring-2 ring-white'/>
                </div>

                {/**Text */}
                <div className='text-center md:text-start  md:m-0  '>
                  <h1 className="text-[22px] text-[#FFFFFF] font-bold">{employee.name}</h1>
                  <p className="text-[#FFFFFF] ">{employee.post}</p>
                </div>
                
              </div>
            </div>
          
          {/**Main text */}
        
          <div className="h-full flex items-center">
            <div className='w-[420px] pl-12 pr-6'>
            <p className="text-[#FFFFFF]">
              {employee.description}
            </p>
            </div>
          </div>
        
        </div>
      </div>

    );

  };
  
  export default function Carousel_1() {
    return (
      <div className="w-full relative md:mt-32 sm:-mt-[75px] mt-32 min-h-[512px]">
        <div className='absolute bottom-4 left-1 '>
        <img src={image_2} alt="" />
        </div>
      <Carousel 
        className= "absolute z-100 -top-4 sm:h-[512px] h-[527px] "
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <div
                key={i}
                className={`cursor-pointer  rounded-2xl transition-all ${activeIndex === i ? "w-2 h-2 bg-[#5B9BF3]" : "w-2 h-2 bg-blue-gray-100"}`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="blue"
            size="lg"
            onClick={handlePrev}
            className="!absolute bottom-0 left-1/3 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="blue"
            size="lg"
            onClick={handleNext}
            className="!absolute bottom-0 right-1/3 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}
      >
        {
          Employee.map((employee) => (
              <div key={employee.id} className="flex px-11  justify-center items-center h-full max-w-full">
                  <EmployeeCard employee={employee} />
              </div>
        ))}
      </Carousel>
        <div className='absolute right-2 '>
        <img src={image_1} alt="" />
        </div>
      </div>
    );
  }