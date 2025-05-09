import React from 'react'
import ElementPic from '../../Images/about-3.jpg'


const AboutSection3 = () => {
  return (
<div className='flex flex-col lg:flex-row w-[90%] mx-auto lg:w-full px-[0%] lg:px-[4%] my-[10%] lg:my-[3%]'> 
    
    <div className='w-full lg:w-[40%] mb-4 lg:mb-0 rounded-[30px] shadow-xl relative'>
      <img className='h-[40vh] lg:h-[60vh] object-cover object-center w-full rounded-[30px]' src={ElementPic} alt='About Section 2' />
    </div>

    <div className='w-full lg:w-[60%] flex flex-col text-center lg:text-left justify-center mt-[1rem] lg:mt-0 px-0 lg:px-10' >
        <h2 className="text-[1.9rem] leading-tight lg:text-[2.5rem] uppercase font-bold text-[var(--dark-blue)] mb-3">
        Building Lasting Relationships Through Personalized Service
        </h2>
        <p className='text-[1.2rem] lg:text-[1.4rem] capitalize leading-tight lg:leading-normal tracking-normal text-[var(--dark-blue)]'>
        we prioritize personalized attention for every client. Our client-centric approach features dedicated account managers who collaborate closely with your business. By understanding your unique needs, we provide customized solutions that streamline your payroll processes. Our goal is to build long-term relationships, ensuring you feel valued and supported throughout your journey with us.        </p>
    </div>



  </div>
  )
}

export default AboutSection3