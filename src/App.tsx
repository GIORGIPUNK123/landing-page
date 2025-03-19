import { useState } from 'react';
import { Header } from './components/Header';
import { First } from './components/landing/First';
import { OutsideBurgerBar } from './components/landing/OutsideBurgerBar';
import { FirstImagePart } from './components/landing/FirstImagePart';
import { Second } from './components/landing/Second';
import { OurServices } from './components/landing/OurServices';
import { Third } from './components/landing/Third';
import { Fourth } from './components/landing/Fourth';

export const App = () => {
  const [burgerClicked, setBurgerClicked] = useState(false);
  return (
    <>
      <div className='bg-[#f6f4de]'>
        <Header setBurgerClicked={setBurgerClicked} />
        <OutsideBurgerBar clicked={burgerClicked} />
        <First />
        <FirstImagePart />
        <Second />
        <OurServices />
        <Third />
        <Fourth />
      </div>
    </>
  );
};
