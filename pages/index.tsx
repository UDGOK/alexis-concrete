import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Alexis Concrete | Professional Concrete & Asphalt Services</title>
      </Head>
      
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
          <div className="container mx-auto flex-grow flex items-center">
            <div className="max-w-3xl">
              <motion.h1 
                className="text-5xl md:text-7xl font-light text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Building Tomorrow's Infrastructure Today
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Professional concrete and asphalt solutions for commercial and residential projects.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-light text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Concrete Services"
              description="Expert concrete installation, repair, and maintenance for all your needs."
              image="/concrete-service.jpg"
              href="/services/concrete"
              delay={0}
            />
            <ServiceCard
              title="Asphalt Solutions"
              description="Professional asphalt paving and maintenance services."
              image="/asphalt-service.jpg"
              href="/services/asphalt"
              delay={0.2}
            />
            <ServiceCard
              title="Striping Services"
              description="Precise parking lot striping and marking solutions."
              image="/striping-service.jpg"
              href="/services/striping"
              delay={0.4}
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
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="group relative overflow-hidden"
    >
      <Link href={href}>
        <div className="relative h-96">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/50 transition-opacity duration-500 group-hover:opacity-75" />
          <div className="absolute inset-0 p-8 flex flex-col justify-end">
            <h3 className="text-2xl font-light text-white mb-2">{title}</h3>
            <p className="text-gray-300">{description}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
