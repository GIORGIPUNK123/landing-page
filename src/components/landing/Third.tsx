import centerImg from '../../images/third/center.avif';
import topLeftImg from '../../images/third/top-left.avif';
import topRightImg from '../../images/third/top-right.avif';
import bottomLeftImg from '../../images/third/bottom-left.avif';
import bottomRightImg from '../../images/third/bottom-right.avif';

const ImagesGrid = (props: { images: string[] }) => {
  return (
    <div className='grid w-full grid-cols-2 gap-4 px-20 sm:grid-cols-3 md:gap-6 xl:gap-8'>
      <div className='relative flex items-end h-48 overflow-hidden bg-gray-100 rounded-lg shadow-lg group md:h-80'>
        <img
          src={props.images[0]}
          loading='lazy'
          alt='Photo by Minh Pham'
          className='absolute inset-0 object-cover object-center w-full h-full transition duration-200 group-hover:scale-110'
        />

        <div className='absolute inset-0 opacity-50 pointer-events-none bg-gradient-to-t from-gray-800 via-transparent to-transparent'></div>
      </div>

      <div className='relative flex items-end h-48 overflow-hidden bg-gray-100 rounded-lg shadow-lg group md:col-span-2 md:h-80'>
        <img
          src={props.images[1]}
          loading='lazy'
          alt='Photo by Magicle'
          className='absolute inset-0 object-cover object-center w-full h-full transition duration-200 group-hover:scale-110'
        />

        <div className='absolute inset-0 opacity-50 pointer-events-none bg-gradient-to-t from-gray-800 via-transparent to-transparent'></div>
      </div>

      <div className='relative flex items-end h-48 overflow-hidden bg-gray-100 rounded-lg shadow-lg group md:col-span-2 md:h-80'>
        <img
          src={props.images[2]}
          loading='lazy'
          alt='Photo by Martin Sanchez'
          className='absolute inset-0 object-cover object-center w-full h-full transition duration-200 group-hover:scale-110'
        />

        <div className='absolute inset-0 opacity-50 pointer-events-none bg-gradient-to-t from-gray-800 via-transparent to-transparent'></div>
      </div>

      <div className='relative flex items-end h-48 overflow-hidden bg-gray-100 rounded-lg shadow-lg group md:h-80'>
        <img
          src={props.images[3]}
          loading='lazy'
          alt='Photo by Lorenzo Herrera'
          className='absolute inset-0 object-cover object-center w-full h-full transition duration-200 group-hover:scale-110'
        />

        <div className='absolute inset-0 opacity-50 pointer-events-none bg-gradient-to-t from-gray-800 via-transparent to-transparent'></div>
      </div>
    </div>
  );
};

export const Third = () => {
  return (
    <>
      <div className='text-center flex flex-col items-center text-[#f6f4de] py-20 md:py-40 bg-[#161616]'>
        <h2 className='max-w-2xl text-4xl font-semibold md:text-8xl'>
          We Value Unique Quality
        </h2>
        <span className='max-w-2xl px-4 mt-10 text-xl md:px-0 md:text-3xl '>
          At Photography Shop, we believe in capturing moments with a unique
          touch. Our curated selection of equipment and services helps you
          express your creativity and style.
        </span>
        <button className=' w-36 h-16 text-[#413f3e] mt-8 bg-[#f6f4de]'>
          SHOP NOW
        </button>
        <div className='relative flex flex-col items-center w-full mx-20 mt-12 h-fit'>
          <img
            className=' w-[250px] sm:w-[400px] md:w-[600px] lg:w-[800px] xl:w-auto'
            src={centerImg}
            alt='centerImg'
          />
          <div className='max-[1080px]:hidden'>
            <img
              className='min-[2000px]:left-24 min-[1750px]:left-16 left-4 absolute min-[1750px]:top-52 min-[1440px]:top-24 top-12 w-72 min-[1440px]:w-96'
              src={topLeftImg}
              alt='topLeftImg'
            />
            <img
              className=' absolute right-4 min-[1200px]:right-24 top-24 w-64 aspect-[3/4]'
              src={topRightImg}
              alt='topRightImg'
            />
            <img
              className='absolute left-8 min-[2000px]:left-[440px] min-[1750px]:left-[330px] min-[1440px]:left-[200px] bottom-24 w-80 aspect-[3/4]'
              src={bottomLeftImg}
              alt='bottomLeftImg'
            />
            <img
              className='absolute right-24 min-[2000px]:right-[440px] min-[1750px]:right-[330px] min-[1440px]:right-[200px] bottom-44 w-80 aspect-[3/4]'
              src={bottomRightImg}
              alt='bottomRightImg'
            />
          </div>
          <div className='max-[1080px]:block hidden w-full mt-24'>
            <ImagesGrid
              images={[topLeftImg, centerImg, topRightImg, bottomLeftImg]}
            />
          </div>
        </div>
      </div>
    </>
  );
};
