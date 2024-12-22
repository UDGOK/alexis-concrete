import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <Head>
        <title>Alexis Concrete | Professional Concrete Services</title>
        <meta name="description" content="Expert concrete services for residential and commercial projects. Quality workmanship and reliable service." />
      </Head>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="max-w-4xl"
          >
            <h1 className="text-7xl md:text-8xl font-light mb-8">
              Building concrete excellence
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl">
              Transforming spaces with innovative concrete solutions and exceptional craftsmanship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative h-[70vh] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="text-3xl font-light text-white mb-2">{project.title}</h3>
                    <p className="text-gray-200 font-light">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            viewport={{ once: true }}
            className="max-w-4xl mb-20"
          >
            <h2 className="text-6xl font-light mb-8">Our Services</h2>
            <p className="text-xl text-gray-600">
              We provide comprehensive concrete solutions for both residential and commercial projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: [0.76, 0, 0.24, 1] }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative h-[400px] mb-6 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-light mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              viewport={{ once: true }}
            >
              <h2 className="text-6xl font-light mb-8">Let's Work Together</h2>
              <p className="text-xl text-gray-400 mb-12">
                Ready to start your project? Contact us for a consultation and free estimate.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
              viewport={{ once: true }}
            >
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-light mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-transparent border border-white/30 text-white placeholder-white/50 focus:border-white focus:ring-0 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-transparent border border-white/30 text-white placeholder-white/50 focus:border-white focus:ring-0 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-light mb-2">Project Details</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 bg-transparent border border-white/30 text-white placeholder-white/50 focus:border-white focus:ring-0 transition-colors"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full px-8 py-4 border border-white text-lg font-light hover:bg-white hover:text-black transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

const projects = [
  {
    title: "Modern Driveway Design",
    description: "Custom concrete driveway with modern patterns and finishes",
    image: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?q=80&w=1200"
  },
  {
    title: "Commercial Plaza",
    description: "Large-scale commercial concrete installation",
    image: "https://images.unsplash.com/photo-1590579491624-f98f36d4c763?q=80&w=1200"
  }
]

const services = [
  {
    title: "Residential Concrete",
    description: "Custom driveways, patios, and walkways designed to enhance your home's beauty and value.",
    image: "https://images.unsplash.com/photo-1578662996442-48f1845937b7?q=80&w=800"
  },
  {
    title: "Commercial Concrete",
    description: "Large-scale solutions for businesses, including foundations, floors, and parking structures.",
    image: "https://images.unsplash.com/photo-1584467541268-b040f83be3fd?q=80&w=800"
  },
  {
    title: "Decorative Concrete",
    description: "Stamped, stained, and polished concrete options to create unique and beautiful surfaces.",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800"
  }
]
