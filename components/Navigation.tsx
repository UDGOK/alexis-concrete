'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

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

  const itemVariants = {
    closed: {
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1]
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  }

  return (
    <>
      <nav className={`fixed w-full z-100 mix-blend-difference ${
        isMenuOpen ? 'bg-transparent' : ''
      }`}>
        <div className="container mx-auto px-6 py-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link 
              href="/" 
              className={`text-2xl font-light tracking-tight ${isMenuOpen ? 'text-black' : 'text-white'}`}
            >
              Alexis Concrete
            </Link>

            {/* Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`z-100 ${isMenuOpen ? 'text-black' : 'text-white'} hover:opacity-70 transition-opacity duration-200`}
              aria-label="Toggle Menu"
            >
              <span className="text-sm uppercase tracking-widest font-light">
                {isMenuOpen ? 'Close' : 'Menu'}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-white z-50 overflow-auto"
          >
            <div className="container mx-auto px-6 min-h-screen py-32">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 h-full">
                <div className="col-span-1">
                  <motion.div
                    variants={itemVariants}
                    className="space-y-12"
                  >
                    <Link 
                      href="/services/asphalt"
                      className="block text-5xl md:text-7xl font-light hover:italic transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Asphalt
                    </Link>
                    <Link 
                      href="/services/concrete"
                      className="block text-5xl md:text-7xl font-light hover:italic transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Concrete
                    </Link>
                    <Link 
                      href="/services/striping"
                      className="block text-5xl md:text-7xl font-light hover:italic transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Striping
                    </Link>
                  </motion.div>
                </div>
                
                <div className="col-span-1">
                  <motion.div
                    variants={itemVariants}
                    className="space-y-12"
                  >
                    <div>
                      <h3 className="text-sm uppercase tracking-widest mb-6 font-light">Contact</h3>
                      <a 
                        href="tel:+1234567890"
                        className="block text-lg hover:italic transition-all duration-300"
                      >
                        (123) 456-7890
                      </a>
                      <a 
                        href="mailto:info@alexisconcrete.com"
                        className="block text-lg hover:italic transition-all duration-300"
                      >
                        info@alexisconcrete.com
                      </a>
                    </div>
                    
                    <div>
                      <h3 className="text-sm uppercase tracking-widest mb-6 font-light">Location</h3>
                      <p className="text-lg">
                        123 Construction Way<br />
                        City, State 12345
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm uppercase tracking-widest mb-6 font-light">Social</h3>
                      <div className="space-y-2">
                        <a 
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-lg hover:italic transition-all duration-300"
                        >
                          Instagram
                        </a>
                        <a 
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-lg hover:italic transition-all duration-300"
                        >
                          Facebook
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
