import React from 'react'
import { HashLink } from 'react-router-hash-link'
import SectionThreeBack from "../../Images/home-4.jpg";

const HomeSection3 = () => {
  return (
    <div className={`flex flex-col items-center text-center w-full my-[10%] lg:my-[2%] lg:px-4 rounded-xl`}>
        <div className='w-full h-[80vh] lg:h-[83vh] relative'>
            <img className='object-cover w-full rounded-[30px] h-full ' src={SectionThreeBack} alt='Section 3 back' />
            <div className='flex flex-col rounded-[30px] justify-end items-center px-[5%] pb-[15%] lg:pb-[5%] absolute content-0 top-0 left-0 w-full h-full bg-gradient-to-t from-[#00000055] to-[#00000011]'>
                <h2 className='text-[2rem] lg:text-[2.2rem] lg:mx-[10%] text-[#ffffff] uppercase tracking-wider leading-tight font-bold mb-2'>
                Your Professional Partner for Streamlined & Effortless Payroll Management
                </h2>
                <HashLink smooth className='hidden w-fit lg:block text-[1.8rem] font-semibold border-b-2 border-[#ffffff] text-[#ffffff] hover:text-[var(--orange)] hover:border-[var(--orange)] uppercase tracking-wider' to={'/#contact-section'} >
                Become one of our many happy clients
                </HashLink>
                <HashLink smooth className='block w-fit lg:hidden text-[1.5rem] font-semibold border-b-2 border-[#ffffff] text-[#ffffff] hover:text-[var(--orange)] hover:border-[var(--orange)] uppercase tracking-wider' to={'/#contact-section'} >
                    connect with us
                </HashLink>
            </div>
        </div>
       
    </div>
  )
}

export default HomeSection3