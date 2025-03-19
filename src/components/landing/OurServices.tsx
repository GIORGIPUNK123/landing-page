const myArr = [
  {
    name: 'Camera Repair',
    description:
      'Get your camera back in action with our expert repair services.',
  },
  {
    name: 'Film Development',
    description:
      'Preserve your memories with professional film development and digitization.',
  },
  {
    name: 'Photography Workshops',
    description:
      'Enhance your skills with our hands-on workshops for all levels.',
  },
];
export const OurServices = () => {
  return (
    <>
      <div className='py-20 md:py-40 text-[#302f2d]'>
        <h2 className='text-4xl font-bold text-center md:text-8xl'>
          OUR SERVICES
        </h2>
        <div className='flex flex-col justify-center px-24 mt-12 md:mt-24 lg:flex-row'>
          {myArr.map((x, i) => {
            return (
              <div
                key={i}
                className={`py-12 ${
                  i === 1
                    ? 'lg:border-l-0 lg:border-r-0 lg:border-b-[1px] lg:border-t-[1px] border-b-0 border-t-0'
                    : ''
                } border-solid border-[1px] w-full lg:w-[500px] border-[#6f6c67] flex flex-col justify-between h-[250px] md:h-[300px] lg:h-[350px] 2xl:h-[300px] items-center text-center`}
              >
                <h3 className='px-4 text-2xl md:text-4xl'>{x.name}</h3>
                <p className='text-wrap text-md md:text-lg px-4 text-[#49494b]'>
                  {x.description}
                </p>
                <button className='md:px-8 px-4 py-2 md:py-4 cursor-pointer border-solid border-[1px] border-[#6f6c67] hover:bg-[#ffffff] duration-200'>
                  LEARN MORE
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
