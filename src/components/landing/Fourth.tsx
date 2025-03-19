import { useState } from 'react';
import first from '../../images/fourth/first.webp';
import second from '../../images/fourth/second.jpg';
import third from '../../images/fourth/third.jpg';
import leftArrow from '../../images/left-arrow.svg';
const SlideShow = (props: { images: string[]; texts: string[] }) => {
  const [active, setActive] = useState(0);
  console.log('active: ', active);
  return (
    <div className=' border-solid border-[1px] mx-4 h-[250px] sm:h-auto border-[#000] lg:h-[250px] xl:h-[300px] 2xl:h-[450px] p-4 sm:p-8 xl:p-10 2xl:p-12 sm:mx-40 lg:mx-32 md:mt-16 mt-10 sm:mt-12 lg:mt-20 xl:mt-24'>
      <div className='flex flex-row h-full sm:flex-col lg:flex-row'>
        <div className='mr-4 rounded-sm sm:mr-0 lg:mr-12 aspect-square'>
          <img
            className='rounded-md'
            src={props.images[active]}
            alt='picture'
          />
        </div>
        <div className='relative flex flex-col justify-center mt-5 lg:mt-0'>
          <h3 className='lg:px-28 xl:px-24 mb-10 lg:mb-6 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl leading-[1.3] text-center font-[PlayfairDisplay] italic'>
            {props.texts[active]}
          </h3>
          <div className='absolute bottom-0 z-10 flex justify-between w-full h-16'>
            <div className='flex items-end gap-1'>
              {[0, 1, 2].map((_, i) => {
                return (
                  <div
                    key={_ + i}
                    className={` ${
                      active === i
                        ? 'bg-[#222222]'
                        : 'bg-[#A2A093] cursor-pointer'
                    } rounded-full w-4 h-4`}
                    onClick={() => {
                      setActive(i);
                    }}
                  />
                );
              })}
            </div>
            <div className='flex items-end gap-6'>
              <button
                onClick={() => {
                  setActive((prev) =>
                    prev === 0 ? props.images.length - 1 : prev - 1
                  );
                }}
                className=' rounded-full border-solid border-[1px] flex justify-center items-center xl:w-14 lg:w-10 xl:h-14 lg:h-10 2xl:w-16 2xl:h-16 border-[#000]'
              >
                <img className='w-6 xl:w-8' src={leftArrow} alt='leftArrow' />
              </button>
              <button
                onClick={() => {
                  setActive((prev) =>
                    prev === props.images.length - 1 ? 0 : prev + 1
                  );
                }}
                className=' rounded-full border-solid border-[1px] flex justify-center items-center xl:w-14 lg:w-10 xl:h-14 lg:h-10 2xl:w-16 2xl:h-16 border-[#000]'
              >
                <img
                  className='w-6 xl:w-8 scale-x-[-1]'
                  src={leftArrow}
                  alt='rightArrow'
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const Fourth = () => {
  const images = [first, second, third];
  const texts = [
    'Incredible service and product quality! I found everything I needed for my photography business.',
    'Outstanding customer support and exceptional products! I couldn’t be happier with the quality and how quickly I got everything I needed for my projects.',
    'A truly remarkable experience! The variety and quality of the products exceeded my expectations and helped me take my work to the next level.',
  ];
  return (
    <div className='py-14 sm:py-16 md:py-24 lg:py-32 bg-[#F6F4DE]'>
      <h1 className='flex items-center justify-center text-[#302f2d]'>
        <span className='text-center max-w-[800px] 2xl:text-8xl text-4xl xl:text-6xl font-semibold'>
          WHAT OUR CUSTOMERS SAY
        </span>
      </h1>
      <SlideShow images={images} texts={texts} />
      <div className='flex items-center justify-between h-12 mx-4 mt-4 sm:mx-40 sm:h-14 md:h-20 lg:h-24 xl:h-28 2xl:h-32 sm:mt-8 md:mt-12 lg:mt-14 xl:mt-20'>
        {[
          { first: '600+', second: 'SATISFIED CUSTOMERS' },
          { first: '9 of 10', second: 'RATE OUT SERVICE AS EXCELLENT' },
          { first: '97%', second: 'RECOMMEND OUR SHOP' },
        ].map((el) => {
          return (
            <div
              key={el.first}
              className='flex flex-col items-center justify-between h-full text-center'
            >
              <span className='text-base font-medium sm:text-lg md:text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl'>
                {el.first}
              </span>
              <span className='text-[#49494b] leading-none md:leading-6 lg:leading-8 text-xs md:text-sm xl:text-base 2xl:text-xl'>
                {el.second}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
