export const OutsideBurgerBar = (props: { clicked: boolean }) => {
  return props.clicked ? (
    <>
      <div className='absolute mt-[88px] bg-[#f6f4de] z-10 w-full top-0'>
        <ul className=' flex text-xl font-medium flex-col gap-2 items-center text-center'>
          <li className='h-12 cursor-pointer hover:underline underline-offset-4 border-[#413f3e] '>
            Cart
          </li>
          <li className='h-12 cursor-pointer hover:underline underline-offset-4 border-[#413f3e] '>
            Get Template
          </li>
          <li className='h-12 cursor-pointer hover:underline underline-offset-4 border-[#413f3e] '>
            Services
          </li>
          <li className='h-12 cursor-pointer hover:underline underline-offset-4 border-[#413f3e] '>
            About
          </li>
          <li className='h-12 cursor-pointer hover:underline underline-offset-4 border-[#413f3e] '>
            Blog
          </li>
          <li className='h-12 cursor-pointer hover:underline underline-offset-4 border-[#413f3e] '>
            Contact
          </li>
          <li className='h-12 cursor-pointer hover:underline underline-offset-4 border-[#413f3e] '>
            Shop
          </li>
        </ul>
      </div>
    </>
  ) : (
    <></>
  );
};
