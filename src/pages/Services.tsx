import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smile, Star, Heart, Shield, Sparkles, Zap, Activity } from 'lucide-react';

export default function Services() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // ✅ Fixed handler (added missing closing brace)
  const handleBookConsultation = () => {
    const phoneNumber = '9899424426';

    if (
      navigator.userAgent.match(
        /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
      )
    ) {
      // 📱 Mobile → open dialer
      window.location.href = `tel:+91${phoneNumber}`;
    } else {
      // 🖥️ Desktop → go to contact section
      window.location.href = '/contact#contact-cards';
    }
  };

  const treatments = [
    'Orthodontic Treatment',
    'Invisible Braces',
    'Clear Aligners',
    'Gum Surgeries',
    'Invisalign Treatment',
    'Single Visit Root Canal',
    'Metal Free Bridges',
    'Complete Dentures',
    'Scaling and Policing',
    'Dental Fillings',
    'Teeth Whitening',
    'Dental Implants',
    'Dental Crowns & Bridges',
    'Flexible Dentures',
    'Implant Supported Dentures',
    'Metal Braces & Tooth colored Braces',
    'Painless Tooth Extractions',
    'Painless Root Canal Treatment',
    'Full Mouth Rehabilitation',
  ];

  // Array of dental-related icons to cycle through
  const dentalIcons = [Smile, Heart, Shield, Sparkles, Zap, Activity];

  const serviceDetails = [
    {
      service: 'Root Canal Treatment',
      description: 'Advanced endodontic treatment to save natural teeth',
      duration: '60-90 mins',
    },
    {
      service: 'Dental Implants',
      description: 'Permanent tooth replacement with titanium implants',
      duration: '2-3 hours',
    },
    {
      service: 'Invisalign Treatment',
      description: 'Clear aligner therapy for discreet orthodontic treatment',
      duration: '12-18 months',
    },
    {
      service: 'Teeth Whitening',
      description: 'Professional whitening for brighter, whiter teeth',
      duration: '45-60 mins',
    },
  ];

  const testimonials = [
    {
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787',
      text: 'The Invisalign treatment completely transformed my smile!',
      name: 'Sarah Johnson',
    },
    {
      image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe',
      text: 'Professional and painless root canal treatment.',
      name: 'Michael Chen',
    },
    {
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95',
      text: 'Amazing results with teeth whitening!',
      name: 'Emily Davis',
    },
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1598256989800-fe5f95da9787',
    'https://images.unsplash.com/photo-1609840114035-3c981b782dfe',
    'https://images.unsplash.com/photo-1606811841689-23dfddce3e95',
    'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b',
  ];

  return (
    <div className="pt-16 bg-gray-50">
      {/* Invisalign Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80"
            alt="Invisalign Treatment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/50 to-transparent" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4">
          <div className="h-full grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center md:text-left px-2 sm:px-0"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                Transform Your Smile with Invisalign®
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed">
                Experience the future of orthodontics with nearly invisible
                aligners. Straighten your teeth discreetly and comfortably.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-50 transition-colors"
                onClick={handleBookConsultation}
              >
                Book a Consultation
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden md:block relative"
            >
              <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe"
                  alt="Invisalign Aligners"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-white p-4 sm:p-6 rounded-full shadow-xl"
              >
                <Smile className="w-8 h-8 sm:w-12 sm:h-12 text-blue-600" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Services Section */}
      <div className="py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-2">
              Our Dental Services
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-blue-600 mx-auto rounded-full" />
          </motion.div>

          {/* Treatments Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 mb-16">
            {treatments.map((treatment, index) => (
              <motion.div
                key={treatment}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 cursor-pointer group"
              >
                <div className="text-center">
                  <div className="mb-3 sm:mb-4">
                    {React.createElement(
                      dentalIcons[index % dentalIcons.length],
                      {
                        className:
                          'w-8 h-8 sm:w-10 sm:h-10 text-blue-600 mx-auto group-hover:text-blue-700 transition-colors',
                      }
                    )}
                  </div>
                  <h3 className="text-xs sm:text-sm md:text-base font-semibold text-gray-800 leading-tight group-hover:text-blue-700 transition-colors">
                    {treatment}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Patient Testimonials - moved inside services section to remove spacing */}
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 mt-16 sm:mt-20"
          >
            <Smile className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-2">
              Smiles We've Transformed
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-blue-600 mx-auto rounded-full" />
          </motion.div>

          {/* Lightbox Modal */}
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage}
                  alt="Full size view"
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              '/HP1.png',
              '/HP2.png',
              '/HP3.png',
              '/HP4.png',
              '/HP5.png',
              '/HP6.png',
              '/HP7.png',
              '/HP8.png',
              '/HP9.jpg',
              '/HP10.jpg',
              '/HP11.jpg',
              '/HP12.jpg',
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative aspect-square rounded-xl overflow-hidden shadow-lg cursor-pointer group"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Smile transformation ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Keep testimonials section background white */}
      <div className="bg-white pb-16 sm:pb-20 md:pb-24"></div>
    </div>
  );
}
