'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <span className="text-2xl font-bold">
              {isScrolled ? (
                <span className="text-black">Alexis Concrete</span>
              ) : (
                <span className="text-white">Alexis Concrete</span>
              )}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/services/asphalt" 
              className={`nav-link ${isScrolled ? 'text-black' : 'text-white'}`}
            >
              Asphalt
            </Link>
            <Link 
              href="/services/concrete" 
              className={`nav-link ${isScrolled ? 'text-black' : 'text-white'}`}
            >
              Concrete
            </Link>
            <Link 
              href="/services/striping" 
              className={`nav-link ${isScrolled ? 'text-black' : 'text-white'}`}
            >
              Striping
            </Link>
            <Link 
              href="/contact" 
              className={`nav-link ${isScrolled ? 'text-black' : 'text-white'}`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden z-50 p-2 ${
              isScrolled || isMenuOpen ? 'text-black' : 'text-white'
            }`}
          >
            <div className="w-6 flex flex-col space-y-1">
              <motion.span
                animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-current"
              />
              <motion.span
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-current"
              />
              <motion.span
                animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-current"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-white z-40 md:hidden"
          >
            <div className="container-custom h-full flex flex-col justify-center">
              <div className="space-y-8 text-center">
                <Link 
                  href="/services/asphalt"
                  className="block text-3xl font-light hover:font-normal transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Asphalt
                </Link>
                <Link 
                  href="/services/concrete"
                  className="block text-3xl font-light hover:font-normal transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Concrete
                </Link>
                <Link 
                  href="/services/striping"
                  className="block text-3xl font-light hover:font-normal transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Striping
                </Link>
                <Link 
                  href="/contact"
                  className="block text-3xl font-light hover:font-normal transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
