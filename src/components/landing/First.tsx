export const First = () => {
  return (
    <>
      <div className='mt-6 2xl:mt-24 flex text-center font-normal justify-center '>
        <div className='flex flex-col text-[#302f2d] items-center'>
          <h3 className=' text-4xl mb-10 '>We are ShutterShopX</h3>
          <h2 className='  font-semibold text-2xl md:text-4xl xl:text-8xl leading-[1.12] '>
            FOR ALL THINGS PHOTOGRAPHY
          </h2>
          <p className='text-lg md:text-xl xl:text-2xl font-normal text-[#49494b] mt-6'>
            Discover high-quality cameras, lenses, and accessories to elevate
            your photography. Capture life's beautiful moments with the best
            gear and services designed for professionals and enthusiasts alike.
          </p>
          <div className='flex justify-between w-[300px] xl:w-[360px] 2xl:w-[700px] mt-5 2xl:mt-14'>
            <button className='flex justify-center text-center items-center hover:bg-[#161616] active:bg-[#0a0a0a] text-[#f6f4de] py-2 px-6  xl:px-8 xl:py-4 2xl:px-16 2xl:py-8 2xl:text-4xl bg-[#413f3e] '>
              <span>CART</span>
            </button>
            <button className=' border-[#6f6c67] hover:bg-white transition-colors  duration-300  py-2 px-6  xl:px-8 xl:py-4 2xl:px-16 2xl:py-8 2xl:text-4xl outline outline-1 '>
              EXPLORE SERVICES
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
