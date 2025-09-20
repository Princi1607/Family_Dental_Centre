import React from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Star, MapPin, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleBookAppointment = () => {
    const phoneNumber = '9899424426';
    
    // Check if device supports tel: links (mobile devices)
    if (navigator.userAgent.match(/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i)) {
    // Mobile device - directly initiate call
      window.location.href = `tel:+91${phoneNumber}`;
    } else {
    // Desktop - redirect to Contact page
      navigate('/contact#contact-cards');
    }
  };

  useEffect(() => {
    // Simple approach - just add the widget div
    const widgetContainer = document.getElementById('elfsight-reviews');
    if (widgetContainer && !widgetContainer.hasChildNodes()) {
      widgetContainer.innerHTML = '<div class="elfsight-app-518b1950-00f8-4bbd-a79b-f2a0f35ce664" data-elfsight-app-lazy></div>';
      
      // Try to initialize if available
      const checkAndInit = () => {
        if (window.eapps?.initialize) {
          window.eapps.initialize();
        }
      };
      
      // Try immediately and also after a short delay
      checkAndInit();
      setTimeout(checkAndInit, 1000);
    }
  }, []);

  // Alternative: Load widget after Elfsight script loads
  useEffect(() => {
    const handleScriptLoad = () => {
      const widgetContainer = document.getElementById('elfsight-reviews');
      if (widgetContainer && window.eapps?.initialize) {
        window.eapps.initialize();
      }
    };

    // Listen for the script to load
    const script = document.querySelector('script[src*="elfsight.com"]');
    if (script) {
      script.addEventListener('load', handleScriptLoad);
      return () => script.removeEventListener('load', handleScriptLoad);
    }
  }, []);

  const galleryImages = [
    {
      url: "/ModernEquipment.jpg",
      title: "Modern Equipment"
    },
    {
      url: "/ComfortableEnvironment.png",
      title: "Comfortable Environment"
    },
    {
      url: "/ProfessionalCare.jpg",
      title: "Professional Care"
    },
    {
      url: "/State-of-the-art-facility.jpg",
      title: "State-of-the-art Facility"
    },
    {
      url: "/DentalProcedures.png",
      title: "Dental Procedures"
    },
    {
      url: "/ExpertTeam.jpg",
      title: "Expert Team"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="hero-section">
        <img
          src=".\backgroundImage1.jpg"
          alt="Modern Dental Clinic"
          className="hero-image blur-[1px]"
        />
        <div className="hero-overlay">
          <div className="hero-content">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-title"
            >
              Welcome to Family Dental Centre
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-subtitle"
            >
              Your Smile Is Our Priority
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              onClick={handleBookAppointment}
              className="hero-button"
            >
              {/* <Phone className="w-5 h-5 mr-2" /> */}
              Book an Appointment
            </motion.button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="feature-card"
            >
              <Calendar className="feature-icon" />
              <h3 className="text-lg sm:text-xl font-bold mb-2">Easy Scheduling</h3>
              <p className="text-gray-600 text-sm sm:text-base">Book your appointment online anytime</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="feature-card"
            >
              <Star className="feature-icon" />
              <h3 className="text-lg sm:text-xl font-bold mb-2">Expert Care</h3>
              <p className="text-gray-600 text-sm sm:text-base">Experienced and caring dental professionals</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="feature-card"
            >
              <Clock className="feature-icon" />
              <h3 className="text-lg sm:text-xl font-bold mb-2">Flexible Hours</h3>
              <p className="text-gray-600 text-sm sm:text-base">Open early and late for your convenience</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Opening Hours */}
      <div className="opening-hours">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="opening-hours-text"
          >
            <p>
              Open Tuesday to Sunday : 10:00 AM - 2:00 PM & 5:00 PM - 8:00 PM | Monday: Closed
            </p>
          </motion.div>
        </div>
      </div>

      {/* Gallery Section (Replacing Appointment Form) */}
      <div className="gallery-section py-12 sm:py-16 bg-white">
        <div className="section-container">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 px-4">Experience Our Modern Facility</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-xl shadow-lg aspect-square mx-2 sm:mx-0"
              >
                {/* ⬇️ Image is now positioned and brought on top */}
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover relative z-[1]"
                />

                {/* ⬇️ Overlay stays below because it has default z-index (auto or 0) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white text-lg sm:text-xl font-semibold p-4 sm:p-6">{image.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonials-section">
        <div className="section-container">
          {/* <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">What Our Patients Say</h2> */}
          {/* Google Reviews Widget */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center px-2 sm:px-4"
          >
            <div className="w-full max-w-4xl" id="elfsight-reviews">
              {/* Elfsight widget will be loaded here */}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Location */}
      <div className="location-section">
        <div className="section-container">
          <div className="location-grid gap-6 lg:gap-8">
            <div className="px-4 sm:px-0">
              <h2 className="location-text">You're Just a Little Distance Away</h2>
              <p className="location-description">
                Visit us at our state-of-the-art facility. We're conveniently located in the heart of the city.
              </p>
              <div className="flex items-start sm:items-center text-blue-600 text-sm sm:text-base">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mr-2 mt-1 sm:mt-0 flex-shrink-0" />
                <span className="leading-relaxed">H.No. 8 Block 11, Spring Field Colony, Faridabad, Haryana 121003</span>
              </div>
            </div>
            <div className="map-container mx-4 sm:mx-0">
              <div className="w-full h-full rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d112254.12941725354!2d77.23205788595061!3d28.451178480282046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390ce7619af32a8b%3A0x115651886d9d8d19!2sH.No.%208%20Block%2011%2C%20Spring%20Field%20Colony%2C%20Faridabad%2C%20Haryana%20121003!3m2!1d28.4512033!2d77.3144593!5e0!3m2!1sen!2sin!4v1752749945044!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{
                    border: 0,
                    width: "100%",
                    height: "300px"
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map - Faridabad Location"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;