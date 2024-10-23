'use client'
import Image from 'next/image';
import image0 from '../../public/imagess/image7.png' ;
import image1 from '../../../app/public/imagess/image8.jpg' ; 
import image2 from '../../../app/public/imagess/image3.jpg' ;
import image3 from '../../../app/public/imagess/image4.jpg' ;
import image4 from '../../../app/public/imagess/image5.webp' ;
import image5 from '../../../app/public/imagess/imageh.jpg' ;
import image6 from '../../../app/public/imagess/image2.jpg' ; 
import backgroundImage from '../../public/imagess/image7.png' ; 

function Hero() {
  return (
    <main>
      {/* Background Image Section */}
      <div className='w-full relative h-screen flex items-center justify-center text-white border-4 border-orange-900' >
        <Image
          src={backgroundImage}
          alt=' Hero Background' 
          layout='fill' 
          objectFit='cover' 
          className=' absolute z-0' 
        />
        <div className=' relative z-10 text-center p-6' >
          <h1 className=' text-5xl lg:text-6xl font-extrabold mb-4' >
            Discover Your Dream Home
          </h1>
          <p className=' text-xl mb-6' >
            We provide the best properties to make your living experience
            perfect.
          </p>
          <a
            href=' https://www.linkedin.com/in/alishba-rehman-29074821a/' 
            className=' bg-orange-900 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-300' 
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className=' p-6 sm:p-8 md:p-10 rounded flex flex-col lg:flex-row lg:items-center' >
        <Image
          src={image0}
          alt=' img' 
          className=' mt-12 mb-14 h-80 w-[100%] sm:h-80 md:h-96 lg:w-[53%] lg:mr-8 border-red-900 border-8' 
        />

        {/* Text section on the right */}
        <div className='flex flex-col' >
          <h1 className=' text-orange-900 text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-6' >
            HOME AGENCY
          </h1>
          <p className='text-center text-lg sm:text-xl md:text-2xl mb-5' >
            Digital Silk is a full-service agency comprised of leading web
            designers from around the globe. Whether building a website from
            scratch or redesigning your current digital presence our web design
            services include.
          </p>
        </div>
      </div>

      <h2 className='text-center font-bold text-2xl sm:text-3xl md:text-4xl mb-5 mt-10 text-orange-900' >
        Watch Now
      </h2>

      {/* Flexbox layout for images */}
      <div className='flex flex-wrap justify-center gap-5 p-2 sm:p-4 w-full object-cover rounded border-8 border-orange-900' >
        <Image
          src={image1}
          alt=' Image 1' 
          className='h-40 sm:h-48 md:h-80 w-full sm:w-[48%] md:w-[45%] object-cover rounded border-8 border-orange-900 ease-in-out hover:scale-105' 
          width={500}
          height={500}
        />
        <Image
          src={image2}
          alt=' Image 2' 
          className='h-40 sm:h-48 md:h-80 w-full sm:w-[48%] md:w-[45%] object-cover rounded border-8 border-orange-900 ease-in-out hover:scale-105' 
          width={500}
          height={500}
        />
        <Image
          src={image3}
          alt=' Image 3' 
          className=' h-40 sm:h-48 md:h-80 w-full sm:w-[48%] md:w-[45%] object-cover rounded border-8 border-orange-900 ease-in-out hover:scale-105' 
          width={500}
          height={500}
        />
        <Image
          src={image4}
          alt=' Image 4' 
          className=' h-40 sm:h-48 md:h-80 w-full sm:w-[48%] md:w-[45%] object-cover rounded border-8 border-orange-900 ease-in-out hover:scale-105' 
          width={500}
          height={500}
        />
        <Image
          src={image5}
          alt=' Image 5' 
          className=' h-40 sm:h-48 md:h-80 w-full sm:w-[48%] md:w-[45%] object-cover rounded border-8 border-orange-900 ease-in-out hover:scale-105' 
          width={500}
          height={500}
        />
        <Image
          src={image6}
          alt=' Image 6' 
          className=' h-60 sm:h-48 md:h-[70%] w-full sm:w-[48%] md:w-[45%] object-cover rounded border-8 border-orange-900 ease-in-out hover:scale-105' 
          width={500}
          height={500}
        />
      </div>
    </main>
  );
}

export default Hero;








