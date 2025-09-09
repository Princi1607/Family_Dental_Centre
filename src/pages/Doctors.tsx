import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Stethoscope, Clock, X } from 'lucide-react';

export default function Doctors() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const doctors = [
    {
      name: "Dr. Deepanshu Nigam",
      title: "Lead Dental Surgeon",
      image: "/Doc1.jpg",
      experience: "13+ years of experience",
      specialization: "Orthodontics and Dentofacial Orthopaedics",
      education: "BDS in 2012 , MDS in 2016",
      achievements: "Delivered exceptional patient outcomes in Orthodontics and Dentofacial Orthopaedics through advanced techniques and interdisciplinary expertise.",
    },
    {
      name: "Dr. Gunjan Puri",
      title: "Periodontics and Implantology Specialist",
      image: "/Doc2.jpg",
      experience: "13+ years of experience",
      specialization: "Periodontics and Implantology",
      education: "Passed BDS in 2013 , MDS in 2017",
      achievements: "Delivered exceptional patient outcomes in Periodontics and Implantology through advanced surgical techniques and evidence-based clinical practice.",
    },
    {
      name: "Dr. Sarthak Dahiya",
      title: "Dental Consultant",
      image: "/Con1.jpg",
      experience: "12+ years of experience",
      specialization: "Oral and Maxillofacial Surgery (Mumbai) , AOCMF Fellowship in Head and Neck Oncosurgery(Bangalore)",
      education: "BDS , MDS",
      achievements: "Attending Consultant - Batra Hospital, National Heart Institute, Delhi Heart & Lung Hospital",
    },
    {
      name: "Dr. Gargi Madiwale(Ex-Lecturer)",
      title: "Dental Consultant",
      image: "/Con2.jpg",
      experience: "12+ years of experience , Senior Lecturer - Manav Rachna Dental College",
      specialization: "Oral and Maxillofacial Surgery (Mumbai)",
      education: "BDS , MDS",
      achievements: "Facial Aesthetics(U.S.A)",
    }
  ];

  const clinicImages = [
    "https://images.unsplash.com/photo-1629909615184-74f495363b67",
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09",
    "https://images.unsplash.com/photo-1606811841689-23dfddce3e95"
  ];

  return (
    <div className="pt-16 bg-gray-50">
      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
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
              alt="Doctor full view"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* Animated Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-blue-600 to-blue-800 py-12 sm:py-16 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4"
        >
          Meet Our Expert Doctors
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-16 sm:w-24 h-1 bg-white mx-auto rounded-full"
        />
      </motion.div>

      {/* Doctors Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16">
        {doctors.map((doctor, index) => (
          <motion.div
            key={doctor.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden mb-8 sm:mb-12 md:mb-16 last:mb-0"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-6 md:gap-8">
              {/* Doctor Image */}
              <div className="relative h-80 sm:h-96 md:h-[400px] w-full max-w-xs mx-auto sm:max-w-sm order-1">
                <motion.img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover object-center cursor-pointer hover:scale-105 transition-transform duration-300 rounded-lg"
                  onClick={() => setSelectedImage(doctor.image)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg" />
                <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8 text-white">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2"
                  >
                    {doctor.name}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-sm sm:text-lg md:text-xl"
                  >
                    {doctor.title}
                  </motion.p>
                </div>
                {/* Click indicator */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>

              {/* Doctor Details */}
              <div className="p-4 sm:p-6 md:p-8 order-2">
                <div className="space-y-4 sm:space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex items-center"
                  >
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{doctor.experience}</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex items-center"
                  >
                    <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{doctor.specialization}</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex items-center"
                  >
                    <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{doctor.education}</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex items-center"
                  >
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{doctor.achievements}</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Clinic Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative py-16 sm:py-20 md:py-24 overflow-hidden"
      >
        <div className="absolute inset-0 flex">
          {clinicImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="w-1/3"
            >
              <img
                src={image}
                alt="Clinic Interior"
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/80" />
        <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
          >
            Experience World-Class Dental Care
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
          >
            Our state-of-the-art facility combines advanced technology with comfortable care to give you the perfect smile you deserve.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}