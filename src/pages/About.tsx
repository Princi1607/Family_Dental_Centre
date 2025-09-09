import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Stethoscope, Microscope, Users, Clock } from 'lucide-react';


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

export default function About() {

  const handleScheduleVisit = () => {
    const phoneNumber = '9899424426';

    if (navigator.userAgent.match(/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i)) {
      // 📱 Mobile → open dialer
      window.location.href = `tel:+91${phoneNumber}`;
    } else {
      // 🖥️ Desktop → go to contact section
      window.location.href = '/contact#contact-cards';
    }
  };
  const features = [
    {
      image: "/State-of-the-art-facility.jpg",
      title: "State-of-the-Art Technology",
      description: "Our clinic is equipped with the latest dental technology including 3D imaging, digital X-rays, and laser dentistry equipment to provide precise and comfortable treatments.",
      icon: Microscope  
    },
    {
      image: "/ProfessionalCare.jpg",
      title: "Comprehensive Care",
      description: "From routine check-ups to advanced procedures, we offer a full range of dental services to meet all your oral health needs under one roof.",
      icon: Stethoscope
    },
    {
      image: "/DentalProcedures.png",
      title: "Patient-First Approach",
      description: "We prioritize patient comfort and satisfaction, ensuring a relaxing environment and personalized care for every visit.",
      icon: Users
    }
  ];

  return (
    <div className="pt-16 bg-gray-50">
      {/* Achievement Banner */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[400px] sm:h-[450px] md:h-[500px] overflow-hidden"
      >
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80"
            alt="Dental Clinic"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90" />
        </div>
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center mb-4 sm:mb-6"
            >
              <Shield className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-yellow-400" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 px-2"
            >
              10+ Years of Excellence
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-8 text-base sm:text-lg md:text-xl"
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400">1000+</div>
                <div className="text-sm sm:text-base md:text-lg">Happy Patients</div>
              </div>
              {/* <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400">15+</div>
                <div className="text-sm sm:text-base md:text-lg">Expert Staff</div>
              </div> */}
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400">99%</div>
                <div className="text-sm sm:text-base md:text-lg">Success Rate</div>
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute -bottom-12 sm:-bottom-14 md:-bottom-16 left-1/2 -translate-x-1/2"
        >
          <div className="bg-white rounded-full p-6 sm:p-7 md:p-8 shadow-xl">
            <Sparkles className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-yellow-400" />
          </div>
        </motion.div>
      </motion.div>

      {/* About Content */}
      <div className="py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16 sm:mb-20 md:mb-24 last:mb-0"
            >
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]"
                  >
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </motion.div>
                </div>
                <div className={`${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center md:text-left"
                  >
                    <feature.icon className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mb-4 sm:mb-6 mx-auto md:mx-0" />
                    <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 px-2 md:px-0">{feature.title}</h2>
                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed px-2 md:px-0">{feature.description}</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Final Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative py-16 sm:py-20 md:py-24 bg-blue-600"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629909615184-74f495363b67')] bg-cover bg-center" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2">
              Your Journey to a Perfect Smile Starts Here
            </h2>
            <p className="text-base sm:text-lg md:text-xl opacity-90 mb-6 sm:mb-8 px-2 leading-relaxed">
              Join thousands of satisfied patients who have transformed their smiles with us. Experience the perfect blend of expertise, technology, and care.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-50 transition-colors"
                onClick={handleScheduleVisit}   // 👈 add this

            >
              Schedule Your Visit
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}