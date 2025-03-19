import logoSvg from '../images/ShutterShop.svg';
import cartSvg from '../images/Cart.svg';
export const Header = (props: { setBurgerClicked: any }) => {
  return (
    <>
      <div className='h-[88px] w-full  flex justify-center border-b-2 border-[#b8b8b8]'>
        <div className='h-full items-center flex justify-between xl:px-16 px-4  max-w-[1596px] w-full'>
          <a href='#'>
            <img src={logoSvg} className='h-10 logo w-[220px]' />
          </a>
          <div className='flex items-center'>
            <ul className='xl:flex hidden text-[#302f2d] w-[336px] items-center justify-between font-medium text-lg'>
              {['Services', 'About', 'Blog', 'Contact', 'Shop'].map((x) => (
                <li
                  key={x}
                  className='duration-200 border-black border-solid cursor-pointer hover:border-b-2'
                >
                  {x}
                </li>
              ))}
            </ul>
            <div className='hidden ml-6 md:flex'>
              <button className='h-10 xl:h-14 px-4 xl:px-8 border-[#6f6c67] hover:bg-white transition-colors  duration-300 outline outline-1 '>
                GET TEMPLATE
              </button>
              <button className='h-10 xl:h-14 flex items-center hover:bg-[#161616] active:bg-[#0a0a0a] text-[#f6f4de] ml-6 px-4 xl:px-8 bg-[#413f3e] '>
                <img className='w-6 mr-1' src={cartSvg} alt='cart' />
                <span>CART</span>
                <div className='rounded-full bg-[#f6f4de] w-5 h-5 ml-2 text-black text-sm'>
                  3
                </div>
              </button>
            </div>
            <div
              onClick={() => {
                props.setBurgerClicked((prevState: boolean) => !prevState);
              }}
              className='flex flex-col justify-between w-8 h-8 ml-4 cursor-pointer xl:hidden aspect-square'
            >
              <div className='w-full rounded-sm h-2 bg-[#413f3e]' />
              <div className='w-full rounded-sm h-2 bg-[#413f3e]' />
              <div className='w-full rounded-sm h-2 bg-[#413f3e]' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
