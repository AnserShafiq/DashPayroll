import React from 'react'
import FooterLogo from '../Images/footer-logo.png';
import { FaPhone as Call } from "react-icons/fa6";
import { IoIosMailOpen as Mail } from "react-icons/io";
import { IoLocation as Location } from "react-icons/io5";
import { FaRegCopyright as Copyright} from "react-icons/fa";
import { FaFacebookSquare as FB } from "react-icons/fa";
import { FaSquareInstagram as Insta } from "react-icons/fa6";
import { IoLogoLinkedin as Linkedin } from "react-icons/io5";


const Footer = () => {
  return (
    <div className='block w-full px-[4%] pt-[5%] lg:pt-[1%] bg-[var(--black)]'>
        <div className='flex flex-col justify-start  lg:flex-row lg:justify-between lg:items-center'>
            <img className='w-[15rem] ' src={FooterLogo} alt='Dash Footer Logo'/>
            <div className='flex flex-col my-3 lg:my-auto lg:flex-row lg:justify-end lg:flex-wrap'>
                <a className='flex items-center text-[1.2rem] tracking-wide text-[var(--dark-blue)] bg-[#fff] px-[1rem] py-[0.4rem] rounded-xl transition-transform duration-[0.3s] ease-in-out hover:scale-[1.05] w-fit mt-4 lg:mt-auto ' href='tel:+14168023246'><Call className='mr-3'/> (416) 802-3246</a>
                <a className='flex items-center text-[1.2rem] tracking-wide text-[var(--dark-blue)] bg-[#fff] px-[1rem] py-[0.4rem] rounded-xl transition-transform duration-[0.3s] ease-in-out hover:scale-[1.05] w-fit mt-4 lg:mt-auto lg:ml-[1.5rem]' href='mailto:info@dashpayroll.ca'><Mail className='mr-3'/> info@dashpayroll.ca</a>
                <div className='w-full flex justify-end py-4'>
                    <h3 className='flex items-center text-[1.2rem] tracking-wide text-[var(--dark-blue)] bg-[#fff] px-[1rem] py-[0.4rem] rounded-xl transition-transform duration-[0.3s] ease-in-out hover:scale-[1.05] w-fit mt-4 lg:mt-auto lg:ml-[1.5rem]'><Location className='mr-3'/> 6D - 7398 Yonge St., PMB 865, Thornhill, ON L4J8J2</h3>
                </div>
            </div>
        </div>
        <div className='flex flex-col-reverse justify-start pb-[3%] lg:py-[1%] mt-[3%] lg:mt-[2%] lg:flex-row lg:justify-between lg:items-center'>
            <h2 className='flex items-start lg:items-center  text-[1.1rem] text-[#fff]'><Copyright className='mr-2 mt-[1.75%] lg:mt-[0%]' /> 2024 Dash Payroll Services - All rights reserved </h2>
            <div className='flex my-3 lg:my-auto flex-row'>
                <a className='bg-[var(--orange)] p-1 text-[1.4rem] lg:text-[1.3rem] text-[#fff] rounded-md mx-2 w-fit' href='/'><FB /></a>
                <a className='bg-[var(--orange)] p-1 text-[1.4rem] lg:text-[1.3rem] text-[#fff] rounded-md mx-2 w-fit' href='/'><Insta /></a>
                <a className='bg-[var(--orange)] p-1 text-[1.4rem] lg:text-[1.3rem] text-[#fff] rounded-md mx-2 w-fit' href='/'><Linkedin /></a>
            </div>
        </div>
        
        
    </div>
  )
}

export default Footer