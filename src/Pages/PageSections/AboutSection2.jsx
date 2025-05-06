import React from 'react'
import ElementPic from '../../Images/about-2.jpg'


const AboutSection2 = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row w-[90%] mx-auto lg:w-full px-[0%] lg:px-[4%] my-[10%] lg:my-[3%]'> 
    
    <div className='w-full lg:w-[60%] flex flex-col text-center lg:text-left justify-center mt-[1rem] lg:mt-0 px-0 lg:px-10' >
        <h2 className="text-[1.9rem] leading-tight lg:text-[2.5rem] uppercase font-bold text-[var(--dark-blue)] mb-3">
        Reliable Payroll Solutions with Care and Precision
        </h2>
        <p className='text-[1.2rem] lg:text-[1.4rem] capitalize leading-tight lg:leading-normal tracking-normal text-[var(--dark-blue)]'>
        At Dash Payroll Services, we are dedicated to delivering excellence in payroll management. Our experienced team handles every aspect of payroll processing with precision and care, ensuring compliance with the latest regulations. This commitment enables us to provide reliable, secure, and tailored payroll solutions that meet the unique needs of each client.
        </p>
    </div>

    <div className='w-full lg:w-[40%] mb-4 lg:mb-0 rounded-[30px] shadow-xl relative'>
      <img className='h-[40vh] lg:h-[60vh] object-cover object-center w-full rounded-[30px]' src={ElementPic} alt='About Section 2' />
    </div>

  </div>
  )
}

export default AboutSection2