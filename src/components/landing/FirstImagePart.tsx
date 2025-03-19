import image from '../../images/interior8.avif';
export const FirstImagePart = () => {
  return (
    <>
      <div className=' mt-12 xl:mt-24 flex justify-center'>
        <div className='md:mx-12 mx-3'>
          <img src={image} alt='' />
        </div>
      </div>
    </>
  );
};
