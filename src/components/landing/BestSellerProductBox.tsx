import { productType } from '../../types';

export const BestSellerProductBox = (props: { product: productType }) => {
  return (
    <>
      <div className='flex flex-col p-8 border border-gray-300 border-solid'>
        <div
          style={{ backgroundImage: `url(${props.product.images[0]})` }}
          className='bg-cover bg-no-repeat bg-center aspect-[4/3] lg:aspect-[6/8] w-full'
        />
        {/* <img src={props.product.images[0]} alt='product image' /> */}
        <h4 className='mt-4 text-3xl'>{props.product.name}</h4>
        <span className='mt-2 mb-4 text-xl'>{props.product.description}</span>
        <span className='text-xl'>$ {props.product.price}.00 USD</span>
      </div>
    </>
  );
};
