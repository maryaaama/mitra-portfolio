// components/Footer.jsx
import { FaEnvelope, FaMapMarkerAlt, FaLinkedinIn, FaInstagram, FaDribbble, FaBehance, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0f172a] backdrop-blur-md py-16 relative z-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl text-white font-bold text-center mb-4">
          Get In <span className="text-indigo-300">Touch</span>
        </h2>
        <p className="text-center text-indigo-200 mb-16 max-w-2xl mx-auto">
          Have a project in mind or want to discuss potential collaboration? I'd love to hear from you.
        </p>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Form */}
          <div className="md:w-1/2">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-indigo-200">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-indigo-900 border border-indigo-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-indigo-200">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-indigo-900 border border-indigo-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-indigo-200">Your Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 bg-indigo-900 border border-indigo-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>
             <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full shadow-md hover:shadow-xl transition duration-300 transform hover:translate-y-[-2px] active:translate-y-[1px]">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="md:w-1/2">
            <div className="bg-indigo-900 p-8 rounded-xl h-full">
              <h3 className="text-xl font-bold mb-6 text-indigo-300">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-800 p-3 rounded-full">
                    <FaEnvelope className="text-indigo-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-indigo-300">Email</h4>
                    <p className="text-indigo-100">hello@designer.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-indigo-800 p-3 rounded-full">
                    <FaWhatsapp className="text-indigo-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-indigo-300">WhatsApp</h4>
                    <p className="text-indigo-100">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-indigo-800 p-3 rounded-full">
                    <FaMapMarkerAlt className="text-indigo-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-indigo-300">Location</h4>
                    <p className="text-indigo-100">New York, USA</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="font-bold text-indigo-300 mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 rounded-full bg-indigo-800 flex items-center justify-center hover:bg-indigo-700 transition">
                    <FaDribbble className="text-xl text-white" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-indigo-800 flex items-center justify-center hover:bg-indigo-700 transition">
                    <FaBehance className="text-xl text-white" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-indigo-800 flex items-center justify-center hover:bg-indigo-700 transition">
                    <FaInstagram className="text-xl text-white" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-indigo-800 flex items-center justify-center hover:bg-indigo-700 transition">
                    <FaLinkedinIn className="text-xl text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-indigo-800 mt-16 pt-8 text-center text-indigo-400">
          <p>© 2023 Creative Designer Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
