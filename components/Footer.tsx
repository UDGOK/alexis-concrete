'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold">Alexis Concrete</span>
            </Link>
            <p className="text-gray-400 max-w-md mb-8">
              Building excellence in concrete and asphalt solutions. 
              Quality craftsmanship for every project.
            </p>
            <div className="flex space-x-6">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm uppercase tracking-wider mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  href="/services/asphalt" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Asphalt
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/concrete" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Concrete
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/striping" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Striping
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm uppercase tracking-wider mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:+1234567890" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  (123) 456-7890
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@alexisconcrete.com" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  info@alexisconcrete.com
                </a>
              </li>
              <li className="text-gray-400">
                123 Construction Way<br />
                City, State 12345
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              {new Date().getFullYear()} Alexis Concrete. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link 
                href="/privacy" 
                className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
