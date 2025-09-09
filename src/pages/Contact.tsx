import React, { useEffect , useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Calendar } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function Contact() {

  const contactCardsRef = useRef<HTMLDivElement>(null);

  const handleBookAppointment = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // Open dialer on mobile
      window.location.href = "tel:+919899424426"; // replace with your number
    } else {
      // Scroll to contact-cards section on desktop
      contactCardsRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const contactInfo = [
    {
      title: "Visit Us",
      icon: MapPin,
      content: [
        "H.No. 8 Block 11",
        "Spring Field Colony",
        "Faridabad, Haryana 121003",
        "India"
      ],
      color: "from-purple-500 to-blue-500"
    },
    {
      title: "Call Us",
      icon: Phone,
      content: [
        "+91 9899424426",
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Email Us",
      icon: Mail,
      content: [
        "Nigam.deepanshu88@gmail.com",
      ],
      color: "from-cyan-500 to-teal-500"
    },
    {
      title: "Opening Hours",
      icon: Clock,
      content: [
        "Tuesday - Sunday: ",
        "10:00 AM - 2:00 PM & 5:00 PM - 8:00 PM",
        "Monday: Closed"
      ],
      color: "from-teal-500 to-green-500"
    }
  ];

  return (
    <div className="pt-16 bg-gray-50">
      {/* Contact Banner */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[500px] overflow-hidden"
      >
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80"
            alt="Dental Office"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-blue-900/90" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl font-bold text-white mb-6">
                We're Here for Your Smile
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Your dental health is our priority. Reach out to us for appointments, 
                inquiries, or emergency dental care. We're always here to help.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={handleBookAppointment}
              >
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book an Appointment
                </div>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Contact Cards */}
      <div  id="contact-cards" ref={contactCardsRef} className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${info.color} rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl group-hover:scale-[1.02] transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <info.icon className="w-8 h-8 mr-3" />
                    <h3 className="text-xl font-bold">{info.title}</h3>
                  </div>
                  <div className="space-y-2">
                    {info.content.map((item, i) => (
                      <p key={i} className="text-gray-600">{item}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 mt-16"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d112254.12941725354!2d77.23205788595061!3d28.451178480282046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390ce7619af32a8b%3A0x115651886d9d8d19!2sH.No.%208%20Block%2011%2C%20Spring%20Field%20Colony%2C%20Faridabad%2C%20Haryana%20121003!3m2!1d28.4512033!2d77.3144593!5e0!3m2!1sen!2sin!4v1752749945044!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}