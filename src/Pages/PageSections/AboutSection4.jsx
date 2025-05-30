import React from 'react'
import ContactForm from './ContactForm'
import Sidebanner from '../../Images/about-contact.jpg'
const AboutSection4 = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row w-full mt-[2%] lg:mt-[3%]'>
        <div className=' w-full lg:w-[50%] flex flex-col items-start justify-center px-[4%] py-[3%] '>
            <h2 className='text-[1.8rem] lg:text-[2rem] leading-tight lg:leading-normal lg:text-[2.2rem] uppercase font-bold text-[var(--black)] special-underline'>We're here to assist you</h2>
            <ContactForm />
        </div>
        <div className='w-full lg:w-[50%] min-h-[50vh] lg:min-h-[75vh] lg:py-3 lg:pr-4'>
            <img className='h-[50vh] lg:h-[100%] w-[100%] rounded-[30px] object-cover object-right' src={Sidebanner} alt='Contact Section Home'/>
        </div>
    </div>
  )
}

export default AboutSection4