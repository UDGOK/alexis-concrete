'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1]
      }
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  }

  const linkVariants = {
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1]
      }
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className={`text-2xl font-bold ${isOpen ? 'text-reserve-cream' : 'text-reserve-black'} transition-colors duration-300`}
          >
            Alexis Concrete
          </Link>

          {/* Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`flex flex-col items-end space-y-1.5 focus:outline-none ${isOpen ? 'text-reserve-cream' : 'text-reserve-black'}`}
            aria-label="Toggle Menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 bg-current transform origin-center transition-transform duration-300"
            ></motion.span>
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-0.5 w-4 bg-current transition-opacity duration-300"
            ></motion.span>
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 bg-current transform origin-center transition-transform duration-300"
            ></motion.span>
          </button>
        </div>
      </div>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-reserve-black z-40"
          >
            <div className="container mx-auto px-6 h-screen flex items-center">
              <div className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                  {/* Menu Links */}
                  <div className="space-y-8">
                    {[
                      { name: 'Services', href: '/#services' },
                      { name: 'Projects', href: '/#projects' },
                      { name: 'About', href: '/#about' },
                      { name: 'Contact', href: '/#contact' }
                    ].map((item, index) => (
                      <motion.div
                        key={item.name}
                        variants={linkVariants}
                        custom={index}
                        initial="closed"
                        animate="open"
                        exit="closed"
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="group inline-block text-reserve-cream text-6xl md:text-8xl font-medium hover:text-reserve-gold transition-colors duration-300"
                        >
                          {item.name}
                          <span className="block h-0.5 w-0 group-hover:w-full bg-reserve-gold transition-all duration-300"></span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Contact Information */}
                  <div className="text-reserve-cream space-y-12">
                    <motion.div
                      variants={linkVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                    >
                      <h3 className="text-xl font-medium mb-4">Contact</h3>
                      <a href="tel:+19181234567" className="text-3xl font-medium hover:text-reserve-gold transition-colors duration-300">
                        (918) 123-4567
                      </a>
                    </motion.div>

                    <motion.div
                      variants={linkVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                    >
                      <h3 className="text-xl font-medium mb-4">Email</h3>
                      <a href="mailto:info@alexisconcrete.com" className="text-3xl font-medium hover:text-reserve-gold transition-colors duration-300">
                        info@alexisconcrete.com
                      </a>
                    </motion.div>

                    <motion.div
                      variants={linkVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                    >
                      <h3 className="text-xl font-medium mb-4">Follow</h3>
                      <div className="flex space-x-8">
                        <a href="#" className="text-3xl font-medium hover:text-reserve-gold transition-colors duration-300">
                          Instagram
                        </a>
                        <a href="#" className="text-3xl font-medium hover:text-reserve-gold transition-colors duration-300">
                          Facebook
                        </a>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
