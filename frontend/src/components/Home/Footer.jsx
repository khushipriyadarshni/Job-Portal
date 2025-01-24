import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto flex flex-wrap justify-between px-4">
        <div className="w-full md:w-1/4">
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-sm">
            We are a company dedicated to providing the best services and solutions.
            Our mission is to innovate and inspire with our expertise.
          </p>
        </div>
        <div className="w-full md:w-1/4">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <div className="text-sm space-y-2">
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Email: contact@company.com
            </p>
            <p>
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
              Phone: +123-456-7890
            </p>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              Address: 123 Main Street, City, Country
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/4">
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <div className="text-sm space-y-2">
            <p>
              <a href="/" className="hover:underline">
                Home
              </a>
            </p>
            <p>
              <a href="/jobs" className="hover:underline">
                Jobs
              </a>
            </p>
            <p>
              <a href="/browse" className="hover:underline">
                Browse
              </a>
            </p>
          </div>
        </div>
        
        <div className="w-full md:w-1/4">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500"
            >
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400"
            >
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-6 border-t border-white pt-2 flex justify-center">
        <p className="text-md text-center">
          &copy; 2024 NestHire. All Rights Reserved.<br />
          Design By: <span className="text-[#6A38C2] font-bold text-lg">Khushi Priyadarshni</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;