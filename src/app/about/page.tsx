'use client'
import Image from 'next/image';
import about1 from '../../app/public/imagess/image5.webp';
import about3 from '../../app/public/imagess/image7.png';

const AboutUs = () => {
  return (
    <section className='bg-white py-12'>
      <div className='container mx-auto px-6'>
        
        {/* First Section: Image on Top, Text Below for Mobile */}
        <div className='lg:flex lg:items-center lg:justify-between mb-10 mt-20'>
          <div className='mb-6 lg:w-1/2 lg:mb-0'>
            <Image
              src={about1} // Path for the first image
              alt='About Us Image'
              className='rounded-lg shadow-lg object-cover w-full h-64 lg:h-96 hover:scale-105 border-4 border-orange-900'
              width={500}
              height={300}
            />
          </div>
          <div className='lg:w-1/2 lg:ml-11 text-center lg:text-left'>
            <h2 className='text-3xl lg:text-4xl font-extrabold text-orange-900 mb-4'>
              About Us
            </h2>
            <p className='text-orange-900 text-lg mb-4'>
              Our company’s mission is to provide you with the best products and services.
            </p>
            <p className='text-orange-900 text-lg mb-7'>
              We focus on innovation and quality. Our team is professional and experienced, dedicated to providing you with the best quality and support. With us, you will always benefit.
            </p>
            <a
              href='https://www.linkedin.com/in/alishba-rehman-29074821a/'
              className='bg-orange-900 text-white mr-9 px-6 py-3 rounded-full font-bold hover:bg-orange-700 transition'
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Second Section: Image on Top, Text Below for Mobile */}
        <div className='lg:flex lg:items-center lg:justify-between mb-10 mt-20'>
          <div className='mb-6 lg:w-1/2 lg:mb-0'>
            <Image
              src={about3} // Path for the second image
              alt='About Us Image'
              className='rounded-lg shadow-lg object-cover w-full h-64 lg:h-96 hover:scale-105 border-4 border-orange-900'
              width={500}
              height={300}
            />
          </div>
          <div className='lg:w-1/2 lg:ml-11 text-center lg:text-left'>
            <h2 className='text-3xl lg:text-4xl font-extrabold text-orange-900 mb-4'>
              About Us
            </h2>
            <p className='text-orange-900 text-lg mb-4'>
              Our company’s mission is to provide you with the best products and services.
            </p>
            <p className='text-orange-900 text-lg mb-7'>
              We focus on innovation and quality. Our team is professional and experienced, dedicated to providing you with the best quality and support. With us you will always benefit.
            </p>
            <a
              href='https://www.linkedin.com/in/alishba-rehman-29074821a/'
              className='bg-orange-900 text-white px-6 py-3 rounded-full font-bold hover:bg-orange-700 transition'
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Additional Section */}
        <div className='mt-12 text-center'>
          <img
            src='https://www.wallpapertip.com/wmimgs/54-541872_home-images-house-design-image-photos-pics-picture.jpg'
            className='rounded object-cover border-4 border-orange-900 h-96 w-[90%] mx-auto'
          />
          <h2 className='text-orange-900 mt-3 font-bold text-2xl'>Hello</h2>
          <p className='mt-3 text-orange-900 font-semibold text-base'>
            Home Selling. Maximize your propertys potential with our tailored marketing strategies. We’ll help you stage, list, and sell your home quickly and for the best price. Rental Services. Looking for a rental Our extensive database of properties means we can help you find the perfect rental to meet your needs. Featured Properties Section: Headline. Featured Listings Content: Property Card Example. Image Title: Beautiful 3-Bedroom Home in This stunning home features spacious living areas, modern amenities, and a beautifully landscaped yard. Perfect for families!
          </p>
        </div>
      </div>

      {/* Mobile-specific styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .lg\\:flex {
            flex-direction: column;
          }
          .lg\\:ml-11 {
            margin-left: 0
          }
          h2 {
            font-size: 1.75rem;
          }
          p {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutUs;
