import React from 'react'
import Sidebanner from '../../Images/home-contact.jpg'
import ContactForm from './ContactForm';
const HomeSection6 = () => {

    

  return (
    <div id='contact-section' className='flex flex-col lg:flex-row w-full mt-[2%] lg:mt-[3%]'>
        <div className='w-full lg:w-[50%] lg:pl-4 lg:py-3 lg:min-h-fit'>
            <img className='h-[50vh] lg:h-[100%] 2xl:h-[800px] rounded-[30px] w-[100%] object-cover' src={Sidebanner} alt='Contact Section Home'/>
        </div>
        <div className=' w-full lg:w-[50%] flex flex-col items-start justify-center px-[4%] py-[3%] '>
            <h2 className='text-[1.8rem] lg:text-[2rem] leading-tight lg:leading-normal lg:text-[2.2rem] uppercase font-bold text-[var(--dark-blue)] special-underline'>Reach out to us for inquiries</h2>
            <ContactForm />
        </div>        
    </div>
  )
}

export default HomeSection6