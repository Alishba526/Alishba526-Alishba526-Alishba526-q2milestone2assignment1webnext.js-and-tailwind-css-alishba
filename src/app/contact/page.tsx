
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;

const ContactSection = () => {
  return (
    <section className="bg-yellow-500 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-orange-900 mb-4">Get In Touch</h2>
          <p className="text-orange-900 text-lg">
            We are here to help you with any inquiries. Feel free to contact us for more information.
          </p>
        </div>
        <div className="lg:flex lg:justify-between lg:items-start">
          {/* Contact Form */}
          <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg mb-8 lg:mb-0">
            <h3 className="text-2xl font-bold text-orange-900 mb-6">Send Us a Message</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-orange-900 text-sm font-bold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  aria-label="Your Name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-orange-900 text-sm font-bold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  aria-label="Email Address"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-orange-900 text-sm font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  aria-label="Your Message"
                  placeholder="Enter your message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  rows={5}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-900 text-yellow-500 px-6 py-3 rounded-full font-bold hover:bg-orange-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
          {/* Contact Information */}
          <div className="lg:w-1/2 lg:pl-16 text-center lg:text-left">
            <h3 className="text-2xl font-bold text-orange-900 mb-6">Contact Information</h3>
            <p className="text-orange-900 text-lg mb-4">
              <span className="font-bold">Phone:</span> 03320405516
            </p>
            <p className="text-orange-900 text-lg mb-4">
              <span className="font-bold">Email:</span> alishbarehman526@gmail.com
            </p>
            <p className="text-orange-900 text-lg mb-4">
              <span className="font-bold">Address:</span> Karachi
            </p>
            <h3 className="text-2xl font-bold text-orange-900 mt-8 mb-4">Follow Us</h3>
            <div className="flex justify-center lg:justify-start space-x-4">
              <a href="https://www.linkedin.com/in/alishba-rehman-29074821a/" className="text-orange-900 hover:text-yellow-900 transition">
                <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
