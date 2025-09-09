import React from 'react';
import { Instagram, Facebook, Twitter, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section-container">
        <div className="footer-grid">
          <div className="mb-8 md:mb-0">
            <h3 className="footer-title">Connect With Us</h3>
            <div className="footer-social">
              <a 
                href="https://www.instagram.com/family__dental_center/" 
                className="footer-link p-2 hover:bg-gray-800 rounded-lg transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              {/* <a 
                href="#" 
                className="footer-link p-2 hover:bg-gray-800 rounded-lg transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="footer-link p-2 hover:bg-gray-800 rounded-lg transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a> */}
            </div>
          </div>
          
          <div className="mb-8 md:mb-0">
            <h3 className="footer-title">Contact Info</h3>
            <div className="space-y-3">
              <p className="flex items-start text-sm md:text-base">
                <MapPin className="mr-2 mt-1 flex-shrink-0 h-4 w-4" /> 
                <span>H.No. 8 Block 11, Spring Field Colony, Faridabad, Haryana 121003</span>
              </p>
              <p className="flex items-center text-sm md:text-base">
                <Phone className="mr-2 flex-shrink-0 h-4 w-4" />
                <a href="" className="hover:text-blue-400 transition-colors">
                  098994 24426
                </a>
              </p>
            </div>
          </div>
          
          <div className="mb-8 md:mb-0">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="footer-link text-sm md:text-base hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="footer-link text-sm md:text-base hover:text-blue-400 transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="footer-link text-sm md:text-base hover:text-blue-400 transition-colors">
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>
          
          <div className="mb-8 md:mb-0">
            <h3 className="footer-title">Opening Hours</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li className="leading-relaxed">
                <strong>Tuesday - Sunday:</strong><br />
                10:00 AM - 2:00 PM<br />
                5:00 PM - 8:00 PM
              </li>
              <li className="text-red-400 font-medium">
                <strong>Monday:</strong> Closed
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-copyright">
          <p className="text-sm md:text-base">&copy; Family Dental Centre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;