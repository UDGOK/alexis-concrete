import { motion } from 'framer-motion'
import Image from 'next/image'
import ContactForm from '../../../components/ContactForm'

export default function StripingServices() {
  const services = [
    {
      title: 'Parking Lot Layout',
      description: 'Professional parking space layout and design for maximum efficiency.',
      image: '/images/striping-layout.jpg'
    },
    {
      title: 'Line Striping',
      description: 'Precise line striping for parking spaces, directional arrows, and more.',
      image: '/images/line-striping.jpg'
    },
    {
      title: 'ADA Compliance',
      description: 'Handicap parking spaces and accessibility markings that meet ADA requirements.',
      image: '/images/ada-compliance.jpg'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-[70vh] relative flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/striping-hero.jpg"
            alt="Parking Lot Striping Services"
            fill
            style={{ objectFit: 'cover' }}
            className="brightness-50"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Parking Lot Striping
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Professional parking lot striping and marking solutions
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="aspect-square relative overflow-hidden mb-6">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
          >
            Benefits of Professional Striping
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: 'Enhanced Safety',
                description: 'Clear markings help guide traffic flow and prevent accidents.'
              },
              {
                title: 'ADA Compliance',
                description: 'Ensure your property meets all accessibility requirements.'
              },
              {
                title: 'Maximum Efficiency',
                description: 'Optimize your parking lot layout for maximum space utilization.'
              },
              {
                title: 'Professional Appearance',
                description: 'Fresh striping enhances your property's curb appeal.'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-xl font-bold">{index + 1}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            Get a Free Quote
          </motion.h2>
          <ContactForm />
        </div>
      </section>
    </div>
  )
}
