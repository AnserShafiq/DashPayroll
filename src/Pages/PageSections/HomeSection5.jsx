import React, { useState} from 'react'
import './styles.css'

import { FiPlus, FiMinus } from 'react-icons/fi';

const HomeSection5 = () => {
  const faqs = [
    {
      question: 'What is the process for submitting timesheets?',
      answer: 'Clients provide us with their employees’ timesheets, which we thoroughly review, process, and integrate into our payroll system. We ensure accurate accounting of all hours worked, enabling efficient payroll processing.',
    },
    {
      question: 'What payroll software do you utilize?',
      answer: 'We employ cutting-edge payroll software designed to enhance compliance, security, and operational efficiency.',
    },
    {
      question: 'How do you safeguard data security?',
      answer: 'We implement advanced encryption and cybersecurity protocols to protect your confidential payroll information.',
    },
    {
      question: 'Are you capable of managing multi-state payroll?',
      answer: 'Absolutely. We are fully equipped to handle payroll for businesses operating across multiple states, ensuring compliance with all relevant state regulations.',
    },
    {
      question: 'What support do you offer during the payroll process?',
      answer: 'Our team provides dedicated support throughout the payroll process, assisting clients with inquiries and addressing any concerns to ensure a smooth experience.',
    },
    {
      question: 'How often do you run payroll?',
      answer: 'We offer flexible payroll schedules tailored to your needs, whether that be weekly, bi-weekly, or monthly payroll processing.'
    },
  ];
  
  
  const [openFAQ, setOpenFAQ] = useState(0); // Initialize with the first FAQ index

  const toggleFAQ = (index) => {
    if (openFAQ === index) {
      setOpenFAQ(null); 
    } else {
      setOpenFAQ(index); 
    }
  };  


  return (
    <div className='flex flex-col items-center w-full px-[6%] lg:px-[4%] mb-[5%] lg:my-[3%]'>
      <h2 className='text-[2rem] leading-tight text-center lg:leading-normal lg:text-[2.5rem] uppercase font-bold text-[var(--black)] special-underline'>Frequently asked questions</h2>
      <div className="w-full w-[90%] lg:w-[60%] mx-auto mt-8">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="">
              <div
                className={`flex justify-between items-center p-4 cursor-pointer rounded-[10px] border-2 active:bg-[var] ${ openFAQ === index ? '':'hover:bg-orange-50'} ${
                  openFAQ === index ? 'bg-[var(--black)] text-[var(--sky-blue)]' : 'text-[var(--black)] border-[var(--black)] bg-transparent'
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-[1.2rem] lg:text-[1.4rem] font-[500] ">
                  {faq.question}
                </h3>
                {openFAQ === index ? (
                  <FiMinus className="text-[1.5rem] lg:text-[1.2rem]" />
                ) : (
                  <FiPlus className="text-[1.5rem] lg:text-[1.2rem]" />
                )}
              </div>
              {openFAQ === index && (
                <div className="p-4 border-none text-[1.1rem] lg:text-[1.3rem] leading-snug text-[var(--black)]">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeSection5
