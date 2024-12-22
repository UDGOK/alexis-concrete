'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import ContactForm from '../../../components/ContactForm'

export default function StripingServices() {
  const services = [
    {
      title: 'Parking Lot Striping',
      description: 'Professional line striping for parking lots, including space markers, directional arrows, and handicap symbols.',
    },
    {
      title: 'ADA Compliance',
      description: 'Ensure your property meets all ADA requirements with proper handicap parking spaces and access symbols.',
    },
    {
      title: 'Fire Lane Marking',
      description: 'Clear and visible fire lane markings to ensure emergency vehicle access and compliance with safety regulations.',
    },
    {
      title: 'Loading Zone Marking',
      description: 'Designated loading zone areas with clear markings for efficient commercial operations.',
    },
  ]

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-[70vh] relative flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/striping-hero.jpg"
            alt="Parking lot striping service"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Parking Lot Striping
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-xl md:text-2xl max-w-2xl mx-auto"
          >
            Professional line striping services for clear and compliant parking lots
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Striping Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Get a Free Quote</h2>
          <ContactForm />
        </div>
      </section>
    </div>
  )
}
