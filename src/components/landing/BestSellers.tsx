import { productType } from '../../types';
import { BestSellerProductBox } from './BestSellerProductBox';
export const BestSellers = (props: {
  name: string;
  products: productType[];
}) => {
  return (
    <>
      <div className='flex flex-col text-[#f6f4de] bg-[#161616] items-center'>
        <h3 className='mt-32 text-4xl'>Best Sellers</h3>
        <h2 className='my-6 text-8xl'>{props.name}</h2>
        <div className='flex flex-col gap-10 mx-6 my-4 lg:mx-12 lg:flex-row lg:justify-between'>
          {props.products.map((product, _) => {
            return <BestSellerProductBox key={_} product={product} />;
          })}
        </div>
        <button className='bg-[#f6f4de] py-4 px-8 mb-32 xl:py-8 xl:px-16 text-2xl mt-2 xl:mt-8 hover:bg-[#ffffff] transition-colors duration-200 text-[#413f3e]'>
          VIEW ALL {props.name}
        </button>
      </div>
    </>
  );
};
