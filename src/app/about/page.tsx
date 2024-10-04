import Image from 'next/image'
import about1 from "../../../src/app/public/images/about1.jpeg"
const AboutUs = () => {
    return (
      <section className="bg-white-400 py-12">
        <div className="container mx-auto px-6">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2 mb-6 lg:mb-0">
            <Image
              src={about1}// Ye path public folder se directly access karta hai
              alt="About Us Image"
              className="rounded-lg shadow-lg object-cover w-full h-64 lg:h-96 hover:scale-105 mt-9 border-4 border-orange-900"
              width={500} // Aapki image ka desired width
              height={300} // Aapki image ka desired height
            />              
            </div>
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-4xl font-extrabold text-orange-900 mb-4 ml-8">About Us</h2>
              <p className="text-orange-900 text-lg mb-6 ml-8">
              Our company’s mission is to provide you with the best products and services              </p>
              <p className="text-orange-900 text-lg mb-6 ml-8">
              We focus on innovation and quality.

Our team is professional and experienced, dedicated to providing you with the best quality and support. With us, you will always benefit.
              </p>
              <a
                href="https://www.linkedin.com/in/alishba-rehman-29074821a/"
                className="bg-orange-900 text-white px-6 py-3 rounded-full font-bold hover:bg-orange-700 transition ml-8"
              >
                Learn More
              </a>
            </div>
          </div>


        </div>
      </section>
    );
  };
  
  export default AboutUs;

