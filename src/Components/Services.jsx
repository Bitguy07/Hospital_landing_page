import React from 'react';

import Search_1 from '../assets/Image-2.png';
import Search_2 from '../assets/Image-3.png';
import Search_3 from '../assets/Image-4.png';
import Search_4 from '../assets/Image-5.png';
import Search_5 from '../assets/Image-6.png';
import Search_6 from '../assets/Image-7.png';
import Search_7 from '../assets/Image-8.png';

import Card from './Card';

const Services = () => {
  return (
    <div className="relative md:overflow-visible overflow-hidden " id='doc'>
      <div className="md:pt-3 pt-5 sm:pt-28">
        <div className="text-center">
          <h1 className="text-4xl font-semibold">Our Services</h1>
          <div className="font-extrabold mx-auto">__________</div>
          <p className="text-[#7D7987] px-8 pt-1">
            We provide to you the best choices for you. Adjust it to your health needs and make sure you undergo treatment
            with our highly qualified doctors. You can consult with us on which type of service is suitable for your health.
          </p>
        </div>
      </div>

      <div className="md:pl-14 md:pr-14 md:pb-10 md:pt-10  p-8">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-10 gap-7 relative">
          <Card
            Image={Search_1}
            Heading="Search doctor"
            Discription="Choose your doctor from thousands of specialists, general, and trusted hospitals."
          />

          <Card
            Image={Search_2}
            Heading="Online pharmacy"
            Discription="Buy your medicines with our mobile application with a simple delivery system."
          />

          <Card
            Image={Search_3}
            Heading="Consultation"
            Discription="Free consultation with our trusted doctors and get the best recommendations."
          />

          <Card
            Image={Search_4}
            Heading="Details info"
            Discription="Free consultation with our trusted doctors and get the best recommendations."
          />

          <Card
            Image={Search_5}
            Heading="Emergency care"
            Discription="You can get 24/7 urgent care for yourself or your children and your lovely family."
          />

          <Card
            Image={Search_6}
            Heading="Tracking"
            Discription="Track and save your medical history and health data."
          />
        </div>
      </div>

      <div className="flex justify-center items-center pt-6 md:pt-4">
        <button
         onClick={() => alert("This functionality not added yet!")}
          type="button"
          className="text-[#458FF6] bg-white border px-8 pb-[7px] pt-[6px]   border-[#458FF6] rounded-full font-bold"
        >
          
          Learn more
        </button>
      </div>

      <div className="absolute md:scale-110 sm:scale-150 top-16 md:top-0 -z-10">
        <img src={Search_7} alt="Background decoration" />
      </div>

      <div className="absolute md:hidden sm:hidden md:scale-110 scale-150 top-2/4 -rotate-90 md:top-0 -z-10">
        <img src={Search_7} alt="Background decoration" />
      </div>
    </div>
  );
};

export default Services;
