import Image from 'next/image'; // Use next/image
import image0 from '../../../../src/app/public/images/image0.png';
import image1 from '../../../../src/app/public/images/images1.jpg';
import image2 from '../../../../src/app/public/images/image2.webp';
import image3 from '../../../../src/app/public/images/image3.webp';
import image4 from '../../../../src/app/public/images/image4.jpg';
import image5 from '../../../../src/app/public/images/image5.jpg';
import image6 from '../../../../src/app/public/images/images6.png';
function Hero() {
  return (
    <main className="p-4 bg-yellow-500">
      <div className="bg-yellow-500 p-5 sm:p-8 md:p-10 rounded flex flex-col lg:flex-row lg:items-center">
        <Image
          src={image0}
          alt="img"
          className="mt-3 mb-10 h-64 w-[100%] sm:h-80 md:h-96 lg:w-[53%] lg:mr-8 border-red-900 border-8"
        />
        
        {/* Text section on the right */}
        <div className="flex flex-col">
          <h1 className="text-orange-900 text-right text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            HOME AGENCY WEBSITE
          </h1>
          <p className="text-right text-lg sm:text-xl md:text-2xl">
            Digital Silk is a full-service agency comprised of leading web
            designers from around the globe. Whether building a website from
            scratch or redesigning your current digital presence, our web
            design services include:
          </p>
        </div>
      </div>

      <h2 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl mb-5 mt-10">
        watch Now
      </h2>

       {/* Flexbox layout for images */}
       <div className="flex flex-wrap justify-center gap-5 p-2 sm:p-4 w-full object-cover rounded border-8 border-orange-900">  
        <Image // Use Image component for external images
          src={image1}
          alt="Image 1"
          className="h-40 sm:h-48 md:h-64 w-full sm:w-[48%] md:w-[45%] object-cover rounded border-8 border-orange-900 ease-in-out hover:scale-105"
          width={500} // Add width
          height={500} // Add height
        />
        <Image
src={image2}          alt="Image 2"
          className="h-40 sm:h-48 md:h-64 w-full sm:w-[48%] md:w-[45%] object-cover rounded border-8 border-orange-900 ease-in-out hover:scale-105"
          width={500} // Add width
          height={500} // Add height
        />
        <Image
src={image3}          alt="Image 3"
          className="h-40 sm:h-48 md:h-64 w-full sm:w-[48%] md:w-[45%] object-cover rounded border-8 border-orange-900 ease-in-out hover:scale-105"
          width={500} // Add width
          height={500} // Add height
        />
        <Image
src={image4}          alt="Image 4"
          className="h-40 sm:h-48 md:h-64 w-full sm:w-[48%] md:w-[45%] object-cover rounded border-8 border-orange-900 ease-in-out hover:scale-105"
          width={500} // Add width
          height={500} // Add height
        />
        <Image
src={image5}          alt="Image 5"
          className="h-40 sm:h-48 md:h-64 w-full sm:w-[48%] md:w-[45%] object-cover rounded border-8 border-orange-900 ease-in-out hover:scale-105"
          width={500} // Add width
          height={500} // Add height
        />
        <Image
src={image6}          alt="Image 6"
          className="h-40 sm:h-48 md:h-64 w-full sm:w-[48%] md:w-[45%] object-cover rounded border-8 border-orange-900 ease-in-out hover:scale-105"
          width={500} // Add width
          height={500} // Add height
        />
</div>

    </main>
  );
}

export default Hero;










