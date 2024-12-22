import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <div className="min-h-screen pt-20">
      {/* Contact Header */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
              Let's discuss your project and create something great together
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <h3 className="text-xl font-bold mb-4">Call Us</h3>
              <p className="text-gray-600">
                <a href="tel:+1234567890" className="hover:text-black">
                  (123) 456-7890
                </a>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <h3 className="text-xl font-bold mb-4">Email Us</h3>
              <p className="text-gray-600">
                <a href="mailto:info@alexisconcrete.com" className="hover:text-black">
                  info@alexisconcrete.com
                </a>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <h3 className="text-xl font-bold mb-4">Visit Us</h3>
              <p className="text-gray-600">
                123 Construction Way<br />
                City, State 12345
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Send Us a Message
            </h2>
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] relative">
        <div className="absolute inset-0 bg-gray-200">
          {/* Add your Google Maps or other map integration here */}
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            Map Integration
          </div>
        </div>
      </section>
    </div>
  )
}
