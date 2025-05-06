import React, { useEffect, useState } from 'react'
import building from '../../Images/business.jpg'
import card1 from '../../Images/service1.jpg';
import card2 from '../../Images/service2.jpg';
import card3 from '../../Images/service3.jpg';
import card4 from '../../Images/service4.jpg';
import card5 from '../../Images/service5.jpg';


const HomeSection4 = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const ServicesCard = [
    {
      img: card5,
      name: 'Payroll Management',
      description: 'Our expert payroll management services encompass everything from timesheet collection to tax filing. With cutting-edge software and a team of experienced professionals, we ensure accuracy and timeliness in every aspect.',
    },
    {
      img: card4,
      name: 'Timesheet Oversight',
      description: 'Effortlessly receive, review, and validate employee timesheets. We manage the integration, programming, and processing of timesheets to guarantee that every hour worked is accurately recorded.',
    },
    {
      img: card3,
      name: 'Tax Compliance and Reporting',
      description: 'Mitigate penalties and keep your business compliant. We oversee all payroll-related tax calculations, deductions, and filings to ensure adherence to regulations.',
    },
    {
      img: card2,
      name: 'Payment Solutions',
      description: 'Experience seamless payment options, including direct deposits, pay cards, and more. We guarantee that employees receive accurate payments on time, every time.',
    },
    {
      img: card1,
      name: 'Payroll Insights and Analytics',
      description: 'Access comprehensive payroll reports and analytics. We provide monthly, quarterly, and annual reports to help you analyze payroll expenses and effectively manage labor costs.'
    },
  ]
  
  return (
    <div className='flex flex-col lg:flex-row  text-center w-full px-[0%] lg:px-[4%] my-[10%] lg:my-[3%]'> 
      <div className='w-full lg:w-[30%] lg:rounded-[30px] lg:shadow-xl relative'>
        <img className='hidden lg:block h-full rounded-[30px]' src={building} alt='Section 4 back' />
        <div className='relative lg:absolute top-0 left-0 h-full w-full flex items-center lg:px-[10%] lg:bg-[#00000055] lg:rounded-[30px] z-10'>
          <h3 className='text-[2rem] lg:text-[2.4rem] text-center lg:text-start text-[var(--dark-blue)] lg:text-[var(--sky-blue)] font-bold uppercase tracking-wider leading-tight lg:leading-relaxed'>All-inclusive payroll solutions <span className={`${windowWidth <= 1000 ? 'hidden' : ''}`}> personalized for your company</span></h3>
        </div>
      </div>
      <div className='w-full lg:w-[70%] flex justify-center lg:flex-row flex-wrap gap-[2rem] mt-[1rem] lg:mt-0 lg:gap-[1.5rem] lg:pl-2' >
        {
          ServicesCard.map((Card, index) => (
            <div className='lg:w-[30%] lg:bg-orange-50 lg:rounded-[30px] lg:shadow-sm ' key={index}>
              <img className='h-[40vh] lg:h-[30vh] w-full object-cover lg:rounded-t-[30px] mb-3' src={Card.img} alt={`Service ${Card.name}`}/>
              <h3 className='text-[1.8rem] lg:text-[1.4rem] font-bold capitalize tracking-wide text-[var(--dark-blue)]'>{Card.name}</h3>
              <h5 className='text-[1.3rem] font-[400] lg:font-normal lg:text-[1.05rem] tracking-normal px-4 text-[var(--black)] mb-[5%] leading-tight'> {Card.description}</h5>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default HomeSection4