'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-4">
            <Link href="/" className="text-2xl font-light mb-6 block">
              Alexis Concrete
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional concrete and asphalt solutions for commercial and residential projects. Quality craftsmanship and exceptional service.
            </p>
          </div>

          {/* Services */}
          <div className="md:col-span-2 md:col-start-7">
            <h3 className="text-sm uppercase tracking-widest mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/services/asphalt" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Asphalt
                </Link>
              </li>
              <li>
                <Link href="/services/concrete" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Concrete
                </Link>
              </li>
              <li>
                <Link href="/services/striping" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Striping
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h3 className="text-sm uppercase tracking-widest mb-6">Contact</h3>
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
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-2">
            <h3 className="text-sm uppercase tracking-widest mb-6">Social</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-24 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              {new Date().getFullYear()} Alexis Concrete. All rights reserved.
            </p>
            <div className="space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
