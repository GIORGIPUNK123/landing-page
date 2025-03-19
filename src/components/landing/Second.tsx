import { productType } from '../../types';
import { BestSellers } from './BestSellers';
import firstCameraImg1 from '../../images/cameras/first/camera_1.avif';
import secondCameraImg1 from '../../images/cameras/second/camera_1.avif';
import thirdCameraImg1 from '../../images/cameras/third/camera_1.avif';

import firstLenseImg1 from '../../images/lenses/first/lense_1.avif';
import secondLenseImg1 from '../../images/lenses/second/lense_1.avif';
import thirdLenseImg1 from '../../images/lenses/third/lense_1.avif';
const cameras: productType[] = [
  {
    name: 'Canon Nas',
    description: 'High-resolution camera for stunning image quality.',
    price: 300,
    images: [firstCameraImg1],
  },
  {
    name: 'Sony FE 24',
    description: 'Premium lens for sharp images and beautiful bokeh.',
    price: 450,
    images: [secondCameraImg1],
  },
  {
    name: 'Nikon A9',
    description: 'Exceptional performance and versatility for professionals.',
    price: 999,
    images: [thirdCameraImg1],
  },
];
const lenses: productType[] = [
  {
    name: 'OldeView Classic 135mm f/2.8 Telephoto Lens',
    description:
      'A vintage telephoto lens renowned for its smooth focus and distinctive character.',
    price: 349,
    images: [firstLenseImg1],
  },
  {
    name: 'RetroFlex Vintage 50mm f/1.8 Prime Lens',
    description:
      'A classic 50mm prime lens offering timeless image quality with a nostalgic touch.',
    price: 299,
    images: [secondLenseImg1],
  },
  {
    name: 'Canon EF 50mm f/1.8 STM Lens',
    description:
      'A compact and versatile prime lens ideal for portraits and low-light photography.',
    price: 125,
    images: [thirdLenseImg1],
  },
];

export const Second = () => {
  return (
    <>
      <div className='h-20' />
      <BestSellers name='CAMERAS' products={cameras} />
      <div className='h-[1px] bg-[#f6f4de]' />
      <BestSellers name='LENSES' products={lenses} />
    </>
  );
};
