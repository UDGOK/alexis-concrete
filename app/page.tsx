'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-black">
          <Image
            src="/hero-bg.jpg"
            alt="Concrete work"
            fill
            priority
            className="object-cover opacity-50 mix-blend-soft-light"
          />
        </div>
        <div className="relative z-10 h-full flex flex-col">
          <div className="flex-grow flex items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="text-center"
            >
              <h1 className="text-white text-4xl md:text-7xl lg:text-8xl font-light mb-8">
                Building Strong<br />Foundations
              </h1>
              <p className="text-white text-lg md:text-xl font-light mb-12">
                Professional Concrete & Asphalt Solutions
              </p>
              <Link
                href="/contact"
                className="inline-block text-white border border-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300"
              >
                Start Your Project
              </Link>
            </motion.div>
          </div>
          <div className="text-white text-center pb-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <span className="block text-sm uppercase tracking-widest mb-4">Scroll</span>
              <div className="w-0.5 h-16 bg-white mx-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="max-w-3xl mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-light mb-8">Our Services</h2>
            <p className="text-gray-600 text-lg">
              Expert solutions for all your concrete and asphalt needs. We deliver quality craftsmanship and exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ServiceCard
              title="Asphalt"
              description="Complete asphalt solutions including paving, repair, and resurfacing."
              image="/asphalt-service.jpg"
              href="/services/asphalt"
              delay={0.2}
            />
            <ServiceCard
              title="Concrete"
              description="Expert concrete work for parking lots, driveways, and custom projects."
              image="/concrete-service.jpg"
              href="/services/concrete"
              delay={0.4}
            />
            <ServiceCard
              title="Striping"
              description="Professional parking lot striping and marking services."
              image="/striping-service.jpg"
              href="/services/striping"
              delay={0.6}
            />
          </div>
        </div>
      </section>
    </>
  )
}

function ServiceCard({ title, description, image, href, delay }: {
  title: string
  description: string
  image: string
  href: string
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 1, ease: [0.76, 0, 0.24, 1] }}
    >
      <Link href={href} className="group block">
        <div className="relative aspect-[4/3] overflow-hidden mb-6">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transform transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <h3 className="text-2xl font-light mb-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </Link>
    </motion.div>
  )
}
