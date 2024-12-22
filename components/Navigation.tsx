'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Alexis Concrete
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/#services" className="text-gray-600 hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link href="/#projects" className="text-gray-600 hover:text-blue-600 transition-colors">
              Projects
            </Link>
            <Link href="/#about" className="text-gray-600 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link 
              href="/#contact" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/#services"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/#projects"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/#about"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/#contact"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-block text-center"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
