import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import img2 from '../../Images/home-1.jpg';
import img2mob from '../../Images/home-1-mob.jpg';
import img1mob from '../../Images/home-2-mob.jpg';
import img1 from '../../Images/home-2.jpg';

// Slide container styles
const SlideContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

// Individual slide styles with transient prop ($active)
const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${props => props.src}) no-repeat center center;
  background-size: cover;
  opacity: ${props => (props.$active ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;



// Pagination bullet container
const PaginationContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 2;
`;

const Bullet = styled.div`
  width: 25px;
  height: 2px;
  border-radius: 5px;
  background-color: ${props => (props.$active ? 'var(--slider-btns-color-two)' : 'var(--slider-btns-color-one)')};
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: var(--slider-btns-color-two);
  }
`;

const Slideshow = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  // Handle bullet click to jump to the selected slide
  const handleBulletClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <SlideContainer>
      <img src={images[0]} alt="" className='h-[80vh] lg:h-[86vh]' style={{ width: '0%' }} />
      {images.map((image, index) => (
        <Slide
          key={index}
          src={image.src}
          $active={index === currentIndex} // Use transient prop $active
        >
          <div className='flex flex-col justify-end lg:justify-end pb-[10%] lg:pb-[0%] w-full h-full z-10 bg-[#0000003f] '>
            <div className='flex flex-col w-[90%] h-full text-center lg:pb-[5%] justify-end lg:text-center lg:w-[90%] mx-auto lg:my-auto'>
              <h3 className='text-[1.6rem] lg:text-[2rem] font-bold text-[#ffffff] tracking-wider leading-tight uppercase'>{image.head}</h3>
              <h5 className='text-[1rem] leading-tight lg:leading-normal lg:text-[1.3rem] font-[500] capitalize text-[#ffffff] tracking-wide'>{image.description}</h5>
            </div>
          </div>
        </Slide>
      ))}

      {/* Pagination Bullets */}
      <PaginationContainer>
        {images.map((_, index) => (
          <Bullet
            key={index}
            $active={index === currentIndex} // Use transient prop $active
            onClick={() => handleBulletClick(index)}
          />
        ))}
      </PaginationContainer>
    </SlideContainer>
  );
};

const HomeSlider = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const images = [
    {
      src: isMobile ? img1mob: img1,
      head: 'Streamlined Payroll Services for Expanding Businesses',
      description: 'Enhance your payroll processes with our streamlined solutions tailored for growing businesses. We provide timely, accurate, and stress-free payroll management, enabling you to concentrate on scaling your company with ease and confidence.'
    },
    {
      src: isMobile ? img2mob :img2,
      head: 'Simplify Your Payroll Process with Assurance',
      description: 'Manage your payroll effortlessly with precision and confidence. Our optimized payroll process guarantees accuracy, compliance, and efficiency, freeing up your time while delivering complete peace of mind.'
    }
  ];

  return (
    <div>
      <Slideshow images={images} interval={8000} />
    </div>
  );
};

export default HomeSlider;
