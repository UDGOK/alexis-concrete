'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-20 bg-black text-white border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-light mb-6">Alexis Concrete</h3>
            <p className="text-gray-400 mb-6 font-light">
              Building quality foundations and structures since 2000. Your trusted partner in concrete solutions.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Facebook
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-light mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-light mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Concrete Installation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Concrete Repair
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Decorative Concrete
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-light mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="text-gray-400">
                123 Construction Way<br />
                City, State 12345
              </li>
              <li>
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors duration-300">
                  (123) 456-7890
                </a>
              </li>
              <li>
                <a href="mailto:info@alexisconcrete.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                  info@alexisconcrete.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <p className="text-gray-400 text-center font-light">
            {new Date().getFullYear()} Alexis Concrete. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
