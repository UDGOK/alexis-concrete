import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollDirection, setScrollDirection] = useState('up')
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      setIsScrolled(currentScrollY > 50)
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up')
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1]
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  }

  const containerVariants = {
    closed: {
      height: 0,
      transition: {
        duration: 0.7,
        ease: [0.76, 0, 0.24, 1]
      }
    },
    open: {
      height: "100vh",
      transition: {
        duration: 0.7,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  }

  const menuItems = [
    { name: 'Services', href: '/#services' },
    { name: 'Projects', href: '/#projects' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' }
  ]

  return (
    <>
      <nav className={`fixed w-full z-50 mix-blend-difference transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
        <div className="container mx-auto px-6">
          {/* Top Bar - Only visible when not scrolled */}
          <AnimatePresence>
            {!isScrolled && scrollDirection === 'up' && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
                className="flex justify-between items-center mb-6 text-white text-base font-normal"
              >
                <div className="flex items-center space-x-8">
                  <a href="tel:+1234567890" className="hover:text-gray-300 transition-colors">
                    (123) 456-7890
                  </a>
                  <a href="mailto:info@alexisconcrete.com" className="hover:text-gray-300 transition-colors">
                    info@alexisconcrete.com
                  </a>
                </div>
                <div className="flex items-center space-x-8">
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    Instagram
                  </a>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    Facebook
                  </a>
                  <span className="w-px h-4 bg-white/30"></span>
                  <a href="#services" className="hover:text-gray-300 transition-colors font-medium">
                    Get a Quote
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Navigation */}
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className="text-3xl font-medium text-white"
              onClick={() => setIsOpen(false)}
            >
              Alexis Concrete
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <span className="sr-only">Menu</span>
              <div className="flex flex-col items-end space-y-1.5">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="block h-0.5 w-6 bg-white transform origin-center transition-transform duration-300"
                ></motion.span>
                <motion.span
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block h-0.5 w-4 bg-white transition-opacity duration-300"
                ></motion.span>
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="block h-0.5 w-6 bg-white transform origin-center transition-transform duration-300"
                ></motion.span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={containerVariants}
            className="fixed inset-0 bg-black z-40"
          >
            <div className="container mx-auto px-6 h-full flex items-center">
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                className="w-full"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                  <div className="space-y-8">
                    {menuItems.map((item, index) => (
                      <div key={index}>
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="group inline-block text-white text-6xl md:text-8xl font-medium hover:text-gray-400 transition-colors duration-300"
                        >
                          {item.name}
                          <span className="block h-0.5 w-0 group-hover:w-full bg-white transition-all duration-300"></span>
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="text-white space-y-12">
                    <div>
                      <h3 className="text-xl font-medium mb-4">Contact</h3>
                      <a href="tel:+1234567890" className="text-3xl font-medium hover:text-gray-400 transition-colors duration-300">
                        (123) 456-7890
                      </a>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-4">Email</h3>
                      <a href="mailto:info@alexisconcrete.com" className="text-3xl font-medium hover:text-gray-400 transition-colors duration-300">
                        info@alexisconcrete.com
                      </a>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-4">Follow</h3>
                      <div className="flex space-x-8">
                        <a href="#" className="text-3xl font-medium hover:text-gray-400 transition-colors duration-300">
                          Instagram
                        </a>
                        <a href="#" className="text-3xl font-medium hover:text-gray-400 transition-colors duration-300">
                          Facebook
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
