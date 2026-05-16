import logo from "../assets/mg.logo.jpg"; 
import { SiTiktok, SiWhatsapp, SiInstagram } from "react-icons/si";

const Footer = () => {
    return (
      <footer className="bg-white text-gray-700 ">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-0">
            {/* Left Column */}
            <div className="md:w-1/3">
              <div className="flex items-center mb-3">
                <div className=" rounded-md p-2 mr-2">
                <img src={logo} alt="MG Rental" className="logo" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">MG Rental </h2>
              </div>
             
            </div>
  
      <div className="flex flex-col">

      <p className="text-sm text-gray-600 mb-4 max-w-xs">
                Albania-first car rental marketplace with verified hosts, transparent pricing, and secure booking. Expanding across Europe.
              </p>
              <div className="flex space-x-3">
                {/* Social Buttons */}
                <a href="https://www.tiktok.com/@mgrental?_r=1&_t=ZS-9476tAfUWUm" aria-label="TikTok" className="bg-gray-100 p-2 rounded-md hover:bg-gray-200 transition">
                    <SiTiktok className="h-5 w-5 text-gray-700" />
                </a>
                <a href="https://api.whatsapp.com/send/?phone=355692555505&text&type=phone_number&app_absent=0" aria-label="WhatsApp" className="bg-gray-100 p-2 rounded-md hover:bg-gray-200 transition">
                    <SiWhatsapp className="h-5 w-5 text-gray-700" />
                </a>
                <a href="https://www.instagram.com/mg.rental?igsh=aGF0OGpjdjg0bzg0" aria-label="Instagram" className="bg-gray-100 p-2 rounded-md hover:bg-gray-200 transition">
                    <SiInstagram className="h-5 w-5 text-gray-700" />
                </a>
              </div>
      </div>


  
            {/* Right Column - Contact Us */}
            <div className="md:w-1/3">
              <h3 className="font-semibold text-gray-900 mb-4">Contact Us</h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 10l1.5-1.5a1 1 0 011.4 0l1.6 1.6a11.047 11.047 0 005.5 5.5l1.6-1.6a1 1 0 011.4 0L21 17"
                    />
                  </svg>
                  <a href="tel:+355692555505" className="hover:text-gray-900">
                    +355692555505
                  </a>
                </li>
  
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 12h1.5a2.5 2.5 0 010 5h-9a2.5 2.5 0 010-5H8"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16v1m0-8v1m0-4v1"
                    />
                  </svg>
                  <a
                    href="mailto:support@mgrental.com"
                    className="hover:text-gray-900"
                  >
                    auto.mg24@outlook.com
                  </a>
                </li>
  
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 2a7 7 0 017 7c0 7-7 13-7 13s-7-6-7-13a7 7 0 017-7z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9a2 2 0 110 4 2 2 0 010-4z"
                    />
                  </svg>
                  <span>Multiple Locations</span>
                </li>
  
    
              </ul>
            </div>
          </div>
  
          <hr className="border-gray-200 my-8" />
  
          {/* Bottom copyright and links */}
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-3 md:space-y-0">
            <div>© 2026 MG Rental Auto. All rights reserved.</div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-gray-700">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-700">
                Terms of Service
              </a>
              <a href="#" className="hover:text-gray-700">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
