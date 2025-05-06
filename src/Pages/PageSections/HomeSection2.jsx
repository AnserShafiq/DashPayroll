import React from 'react';
import './styles.css';
import card1 from '../../Images/Card1.jpg';
import card2 from '../../Images/Card2.jpg';
import card3 from '../../Images/Card3.jpg';
import card4 from '../../Images/Card4.jpg';
import { HashLink } from 'react-router-hash-link';

const HomeSection2 = () => {
  const SolutionCard = [
    {
      image: card1,
      head: 'Secure Payroll Data Management',
      description: 'Your payroll data and timesheets are protected with top-tier encryption, ensuring the highest level of security.',
    },
    {
      image: card2,
      head: 'Real-Time Reporting',
      description: 'Access detailed payroll reports and analytics whenever you need them, ensuring full transparency and timely insights.',
    },
    {
      image: card3,
      head: 'Regulatory Compliance Focus',
      description: 'We guarantee your payroll adheres to all applicable local, state, and federal regulations, keeping your business compliant.',
    },
    {
      image: card4,
      head: 'Precise Payroll Processing',
      description: 'Eliminate manual errors with our automated payroll system, ensuring accurate and timely payments for every employee.',
    },
  ];

  return (
    <div className="flex flex-col items-center text-center w-full px-[6%] lg:px-[4%] my-[10%] lg:my-[3%]">
      <h2 className="text-[2rem] leading-tight lg:leading-normal lg:text-[2.2rem] uppercase font-bold text-[var(--dark-blue)] special-underline">
      Trusted and Accurate Payroll Management
      </h2>
      <h4 className="text-[1.3rem] capitalize leading-tight lg:leading-normal tracking-normal text-[var(--dark-blue)] my-6 lg:mt-3">
      Dash Payroll Services takes the complexity out of payroll processing. With our reliable third-party services, you can count on accuracy, compliance, and peace of mind, allowing you to dedicate more time to growing your business. We’ll handle the timesheets while you lead your team to success.
      </h4>
      <div className="flex flex-col lg:flex-row w-full justify-between">
        {SolutionCard.map((Card, index) => (
          <div key={index} className="flex flex-col items-center w-full bg-orange-50 rounded-[30px] w-[90%] mx-auto lg:w-1/4 lg:mx-3 my-4">
            <img className="w-full h-[30vh] lg:h-[35vh] object-cover object-top mb-4 rounded-t-[30px]" src={Card.image} alt={`Card ${Card.head}`} />
            <h3 className="text-[1.5rem] font-semibold text-[var(--dark-blue)] mb-2">{Card.head}</h3>
            <p className="text-[1.1rem] leading-tight tracking-wide text-[var(--black)] px-2 pb-6">{Card.description}</p>
          </div>
        ))}
      </div>
      <HashLink 
      smooth
      className='text-[1.5rem] lg:text-[1.4rem] uppercase font-bold tracking-wider mt-[5%] lg:mt-4 px-[1.5rem] py-[0.3rem] rounded-xl shadow-lg bg-[var(--black)] text-[var(--orange)] transition-transform ease-in-out duration-[0.3s] hover:scale-[1.05]' 
      to='#contact-section'
      >
        To link with us
      </HashLink>
    </div>
  );
};

export default HomeSection2;
