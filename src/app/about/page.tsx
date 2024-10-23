
import Image from 'next/image';
import about1 from '../../app/public/imagess/image5.webp' ;
import about3 from '../../app/public/imagess/image7.png' ;

const AboutUs = () => {
  return (
    <section className=' bg-white py-12' >
      <div className=' container mx-auto px-6' >
        <div className=' lg:flex lg:items-center lg:justify-between' >
          {/* Left Image Section */}
          <div className=' lg:w-1/2 mb-6 lg:mb-0' >
            <Image
              src={about1} // Path for the first image
              alt='About Us Image'
              className=' rounded-lg shadow-lg object-cover w-full h-64 lg:h-96 hover:scale-105 mt-14 border-4 border-orange-900' 
              width={500} // Desired width for the image
              height={300} // Desired height for the image
            />
          </div>

          {/* Text Section - Right Aligned */}
          <div className='lg:w-1/2 ml-11'>
            <h2 className='text-4xl font-extrabold text-orange-900 '>
              About Us
            </h2>
            <p className=' text-orange-900 text-lg' >
              Our company’s mission is to provide you with the best products and
              services.
            </p>
            <p className=' text-orange-900 text-lg mb-7 ' >
              We focus on innovation and quality. Our team is professional and
              experienced, dedicated to providing you with the best quality and
              support. With us, you will always benefit.
            </p>
            <a
              href=' https://www.linkedin.com/in/alishba-rehman-29074821a/' 
              className=' bg-orange-900 text-white mr-9  px-6 py-3
               rounded-full font-bold hover:bg-orange-700 transition' 
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Image Section with Left Aligned Text */}
        <div className=' mt-10 lg:flex lg:justify-between' >
          {/* Left Aligned Text Section */}
          <div className=' lg:w-1/2 text-center lg:text-left' >
            <h2 className=' text-4xl  font-extrabold text-orange-900 mr-96 text-center mt-20' >
              About Us
            </h2>
            <p className=' text-orange-900 text-lg' >
              Our company’s mission is to provide you with the best products and
              services
            </p>
            <p className=' text-orange-900 text-lg mb-9' >
              We focus on innovation and quality. Our team is professional and
              experienced dedicated to providing you with the best quality and
              support. With us you will always benefit.
            </p>
            <a
              href=' https://www.linkedin.com/in/alishba-rehman-29074821a/' 
              className=' bg-orange-900  text-white ml-44 px-6 py-3 rounded-full font-bold hover:bg-orange-700 transition' 
            >
              Learn More
            </a>
          </div>

          {/* Right Image Section */}
          <div className=' lg:w-1/2 mb-6 lg:mb-0' >
            <Image
              src={about3} // Path for the second image
              alt=' About Us Image' 
              className=' rounded-lg shadow-lg object-cover w-full h-64 lg:h-96 hover:scale-105 border-4 border-orange-900' 
              width={500} // Desired width for the image
              height={300} // Desired height for the image
            />
          </div>
        </div>
      </div>
      <div>
        <img
          src=' https://www.wallpapertip.com/wmimgs/54-541872_home-images-house-design-image-photos-pics-picture.jpg' 
          className=' rounded object-cover border-4 border-orange-900 h-96 w-[90%] ml-16 mt-12 ' 
        />
        <h2 className=' text-center text-orange-900 mt-3 font-bold' >Hello</h2>
        <p className=' text-center mt-3 text-orange-900 font-semibold' >
          Home Selling.Maximize your propertys potential with our tailored
          marketing strategies. We’ll help you stage, list, and sell your home
          quickly and for the best price.  Rental Services.Looking for a
          rental.Our extensive database of properties means we can help you
          find the perfect rental to meet your needs.Featured Properties
          Section: Headline. Featured Listings Content: Property Card Example.
          Image Title: Beautiful 3-Bedroom Home in This stunning home
          features spacious living areas, modern amenities, and a beautifully
          landscaped yard. Perfect for families! 
        </p>
      </div>
    </section>
  );
};

export default AboutUs


