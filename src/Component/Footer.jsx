import React from 'react';
import { FaTwitter,  FaInstagram ,FaYoutube , FaFacebook} from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 py-20 px-6 text-white overflow-hidden relative">
      
      <div 
        className="absolute inset-0 bg-teal-900/40 opacity-70 blur-3xl rounded-[40%_60%_70%_30%_/_30%_30%_70%_70%] 
                   animate-fluid-movement"
        style={{
          animation: 'fluid-movement 30s ease-in-out infinite alternate', 
          backgroundColor: 'rgba(23, 169, 150, 0.4)' 
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="flex flex-col md:flex-row justify-between items-center border-b border-teal-700 pb-10 mb-10">
           <h1 className="text-6xl font-bold tracking-tight text-[#0A0A0A]">
              SK<span className="font-light text-slate-500">Tech</span>
            </h1>
          <a
            href="/login"
            className="mt-6 md:mt-0 px-8 py-3 bg-teal-500 text-gray-900 font-bold text-lg rounded-full 
                       hover:bg-teal-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-teal-500/50"
          >
            Start Your Transformation
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          
          <div className="col-span-2 md:col-span-2">
            <h3 className="text-xl  mb-4 text-teal-300 ">About Us</h3>
            <p className="text-gray-400 md:text-lg text-sm font-light">
             We guide students from basics to advanced computer mastery through PGDCA, DCA, ADCA, and CCC, preparing them for job opportunities and a successful tech career.
            </p>
          </div>

          <div>
            <h3 className="text-lg f mb-4 text-white">Platform</h3>
            <ul className="space-y-3 text-gray-400 font-light">
              <li><a href="/services" className="hover:text-teal-400 transition-colors duration-200 group relative block">Courses <span className="absolute left-0 bottom-0 w-full  bg-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span></a></li>
              <li><a href="/pricing" className="hover:text-teal-400 transition-colors duration-200 group relative block">Pricing <span className="absolute left-0 bottom-0 w-full  bg-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span></a></li>
              <li><a href="/community" className="hover:text-teal-400 transition-colors duration-200 group relative block">Community <span className="absolute left-0 bottom-0 w-full  bg-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span></a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg  mb-4 text-white">Legal</h3>
            <ul className="space-y-3 text-gray-400 font-light">
              <li><a href="/privacy" className="hover:text-teal-400 transition-colors duration-200 group relative block">Privacy <span className="absolute left-0 bottom-0 w-full  bg-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span></a></li>
              <li><a href="/term" className="hover:text-teal-400 transition-colors duration-200 group relative block">Terms <span className="absolute left-0 bottom-0 w-full  bg-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span></a></li>
              <li><a href="/contact" className="hover:text-teal-400 transition-colors duration-200 group relative block">Sitemap <span className="absolute left-0 bottom-0 w-full  bg-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span></a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg  mb-4 text-white">Connect</h3>
            <div className="flex gap-4 text-2xl">
              <a href="#" className="text-teal-400 hover:text-white transition-colors duration-200">
                <FaTwitter />
              </a>
              <a href="#" className="text-teal-400 hover:text-white transition-colors duration-200">
                <FaInstagram/>
              </a>
              <a href="#" className="text-teal-400 hover:text-white transition-colors duration-200">
                <FaYoutube/>
              </a>
              <a href="#" className="text-teal-400 hover:text-white transition-colors duration-200">
                <FaFacebook/>
              </a>
            </div>
            
          </div>
        </div>

        <p className="text-center md:flex  justify-center items-center gap-2 text-gray-500 mt-12 text-sm  border-t border-gray-800 pt-6">
          <h1 className="text-xl font-bold tracking-tight text-[#0A0A0A]">
           SK<span className="font-light text-xl text-slate-500">Tech</span> 
         </h1>

       <p className="text-gray-500  text-sm">
           ©  System {new Date().getFullYear()} All Rights Reserved
       </p>
        </p>
      </div>
    </footer>
  );
};

export default Footer;