import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="section-container">
        <div className="nav-container">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6">
            {/* Mobile Menu Button - Left Side */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>

            {/* Desktop Logo and Navigation */}
            <div className="hidden md:flex items-center min-w-0 flex-1">
              <Link to="/" className="nav-logo flex-shrink-0 mr-4" onClick={closeMobileMenu}>
                {/* <Tooth className="nav-logo-icon" /> */}
                <span className="nav-logo-text">Family Dental Centre</span>
              </Link>

              {/* Desktop Navigation */}
              <div className="nav-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">About Us</Link>
                <Link to="/services" className="nav-link">Services</Link>
                <Link to="/doctors" className="nav-link">Meet the Doctors</Link>
                <Link to="/contact" className="nav-link">Contact Us</Link>
              </div>
            </div>

            {/* Mobile Logo - Center/Right */}
            <div className="md:hidden flex-1 flex justify-center mr-2">
              <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
                <span className="nav-logo-text text-lg font-semibold text-gray-800 truncate max-w-[180px]">
                  Family Dental Centre
                </span> 
              </Link>
            </div>

            {/* WhatsApp Button - Always Visible */}
            <div className="flex items-center flex-shrink-0">
              <a href="https://wa.me/9899424426" className="whatsapp-button flex items-center bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg transition-colors text-sm">
                <Phone className="h-5 w-5 mr-2" />
                <span className="hidden sm:inline">WhatsApp</span>
                <span className="sm:hidden">Call</span>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t z-40">
            <div className="px-4 py-2 space-y-1">
              <Link
                to="/"
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
              <Link
                to="/doctors"
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                onClick={closeMobileMenu}
              >
                Meet the Doctors
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>

              {/* Mobile WhatsApp Button */}
              <div className="px-4 py-3">
                <a
                  href="https://wa.me/9899424426"
                  className="whatsapp-button w-full justify-center"
                  onClick={closeMobileMenu}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}