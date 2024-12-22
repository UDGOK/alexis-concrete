import { motion } from 'framer-motion'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'

export default function ConcreteServices() {
  const services = [
    {
      title: 'Parking Lots',
      description: 'Custom concrete parking lot solutions designed for durability and longevity.',
      image: '/images/concrete-parking.jpg'
    },
    {
      title: 'Driveways',
      description: 'Beautiful and durable concrete driveways with various finishing options.',
      image: '/images/concrete-driveway.jpg'
    },
    {
      title: 'Home Pavers',
      description: 'Decorative concrete pavers for walkways, patios, and outdoor living spaces.',
      image: '/images/concrete-pavers.jpg'
    },
    {
      title: 'Fiber & Rebar Solutions',
      description: 'Advanced reinforcement solutions for enhanced structural integrity.',
      image: '/images/concrete-rebar.jpg'
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
            src="/images/concrete-hero.jpg"
            alt="Concrete Services"
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
            Concrete Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Expert concrete services for commercial and residential projects
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="aspect-video relative overflow-hidden mb-6">
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

      {/* Features Section */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
          >
            Why Choose Our Concrete Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Quality Materials',
                description: 'We use only the highest grade concrete and reinforcement materials.'
              },
              {
                title: 'Expert Installation',
                description: 'Our team of skilled professionals ensures perfect execution every time.'
              },
              {
                title: 'Long-lasting Results',
                description: 'Our concrete solutions are built to withstand time and heavy use.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
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
            Request a Quote
          </motion.h2>
          <ContactForm />
        </div>
      </section>
    </div>
  )
}
