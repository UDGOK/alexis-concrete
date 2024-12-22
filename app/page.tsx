'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="Concrete work"
            fill
            priority
            style={{ objectFit: 'cover' }}
            className="opacity-40"
          />
        </div>
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-responsive font-light mb-6">
            Building Strong<br />Foundations
          </h1>
          <p className="text-xl md:text-2xl font-light mb-12">
            Professional Concrete & Asphalt Solutions
          </p>
          <Link 
            href="/contact"
            className="btn-primary inline-block"
          >
            Start Your Project
          </Link>
        </motion.div>
      </section>

      {/* Services Preview */}
      <section className="py-32">
        <div className="container-custom">
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-light mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl">
              Expert solutions for all your concrete and asphalt needs. We deliver quality craftsmanship and exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div 
              className="group"
              initial={fadeIn.initial}
              whileInView={fadeIn.animate}
              viewport={{ once: true }}
              transition={{ ...fadeIn.transition, delay: 0.2 }}
            >
              <Link href="/services/asphalt" className="block">
                <div className="aspect-[4/3] relative overflow-hidden mb-6">
                  <Image
                    src="/asphalt-service.jpg"
                    alt="Asphalt Services"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transform transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-light mb-3">Asphalt</h3>
                <p className="text-gray-600">
                  Complete asphalt solutions including paving, repair, and resurfacing
                </p>
              </Link>
            </motion.div>

            <motion.div 
              className="group"
              initial={fadeIn.initial}
              whileInView={fadeIn.animate}
              viewport={{ once: true }}
              transition={{ ...fadeIn.transition, delay: 0.4 }}
            >
              <Link href="/services/concrete" className="block">
                <div className="aspect-[4/3] relative overflow-hidden mb-6">
                  <Image
                    src="/concrete-service.jpg"
                    alt="Concrete Services"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transform transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-light mb-3">Concrete</h3>
                <p className="text-gray-600">
                  Expert concrete work for parking lots, driveways, and custom projects
                </p>
              </Link>
            </motion.div>

            <motion.div 
              className="group"
              initial={fadeIn.initial}
              whileInView={fadeIn.animate}
              viewport={{ once: true }}
              transition={{ ...fadeIn.transition, delay: 0.6 }}
            >
              <Link href="/services/striping" className="block">
                <div className="aspect-[4/3] relative overflow-hidden mb-6">
                  <Image
                    src="/striping-service.jpg"
                    alt="Parking Lot Striping"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transform transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-light mb-3">Striping</h3>
                <p className="text-gray-600">
                  Professional parking lot striping and marking services
                </p>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
