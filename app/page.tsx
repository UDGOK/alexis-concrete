'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60"></div>
          <Image
            src="/images/placeholder.jpg"
            alt="Concrete Construction"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-reserve-cream">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Quality Concrete Solutions
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Expert concrete services for residential and commercial projects in Tulsa and surrounding areas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="bg-reserve-gold text-reserve-black px-8 py-3 rounded-lg font-semibold hover:bg-reserve-gold-light transition-colors inline-block"
            >
              Get a Free Quote
            </Link>
            <Link
              href="#services"
              className="border-2 border-reserve-gold text-reserve-gold px-8 py-3 rounded-lg font-semibold hover:bg-reserve-gold hover:text-reserve-black transition-all inline-block"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-reserve-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-reserve-black">Our Services</h2>
            <p className="text-reserve-brown max-w-2xl mx-auto">
              We provide comprehensive concrete solutions for both residential and commercial projects
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/placeholder.jpg"
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-reserve-black">{service.title}</h3>
                  <p className="text-reserve-brown mb-4">{service.description}</p>
                  <Link
                    href="#contact"
                    className="text-reserve-gold font-semibold hover:text-reserve-gold-dark transition-colors inline-flex items-center"
                  >
                    Request Quote
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-reserve-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-reserve-cream/80 max-w-2xl mx-auto">
              Take a look at some of our recent work and see the quality we deliver
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-reserve-brown/10 rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[16/9] relative">
                  <Image
                    src="/images/placeholder.jpg"
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-reserve-gold">{project.title}</h3>
                  <p className="text-reserve-cream/80">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-reserve-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-reserve-black">About Us</h2>
              <p className="text-reserve-brown mb-8">
                With over 20 years of experience in the concrete industry, we take pride in delivering exceptional quality and craftsmanship in every project we undertake.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <h3 className="text-3xl font-bold text-reserve-gold mb-2">20+</h3>
                  <p className="text-reserve-brown">Years Experience</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <h3 className="text-3xl font-bold text-reserve-gold mb-2">500+</h3>
                  <p className="text-reserve-brown">Projects Completed</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <h3 className="text-3xl font-bold text-reserve-gold mb-2">100%</h3>
                  <p className="text-reserve-brown">Satisfaction</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <h3 className="text-3xl font-bold text-reserve-gold mb-2">10</h3>
                  <p className="text-reserve-brown">Year Warranty</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-reserve-brown">
                  <svg className="w-6 h-6 text-reserve-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Licensed & Insured
                </li>
                <li className="flex items-center text-reserve-brown">
                  <svg className="w-6 h-6 text-reserve-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Free Estimates
                </li>
                <li className="flex items-center text-reserve-brown">
                  <svg className="w-6 h-6 text-reserve-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Quality Guaranteed
                </li>
              </ul>
            </div>
            <div className="relative aspect-square">
              <Image
                src="/images/placeholder.jpg"
                alt="About Alexis Concrete"
                fill
                className="object-cover rounded-lg shadow-xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-reserve-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-reserve-cream">Contact Us</h2>
            <p className="text-reserve-cream/80 max-w-2xl mx-auto">
              Get in touch with us for a free quote or any questions about our services
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-reserve-cream font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-reserve-brown/10 border border-reserve-gold/20 text-reserve-cream rounded-lg focus:outline-none focus:ring-2 focus:ring-reserve-gold transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-reserve-cream font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-reserve-brown/10 border border-reserve-gold/20 text-reserve-cream rounded-lg focus:outline-none focus:ring-2 focus:ring-reserve-gold transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-reserve-cream font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-reserve-brown/10 border border-reserve-gold/20 text-reserve-cream rounded-lg focus:outline-none focus:ring-2 focus:ring-reserve-gold transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-reserve-cream font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-reserve-brown/10 border border-reserve-gold/20 text-reserve-cream rounded-lg focus:outline-none focus:ring-2 focus:ring-reserve-gold transition-colors"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-reserve-gold text-reserve-black px-6 py-3 rounded-lg font-semibold hover:bg-reserve-gold-light transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="space-y-8 text-reserve-cream">
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-reserve-gold mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold mb-1">Address</h4>
                      <p className="text-reserve-cream/80">123 Construction Ave, Tulsa, OK 74133</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-reserve-gold mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-reserve-cream/80">(918) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-reserve-gold mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-reserve-cream/80">info@alexisconcrete.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-reserve-cream/80">Monday - Friday</span>
                    <span className="font-medium">7:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-reserve-cream/80">Saturday</span>
                    <span className="font-medium">8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-reserve-cream/80">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

const services = [
  {
    title: 'Concrete Driveways',
    description: "Custom designed and expertly installed driveways that enhance your property's value and curb appeal.",
    image: '/images/services/driveways.jpg'
  },
  {
    title: 'Concrete Patios',
    description: 'Beautiful and durable outdoor living spaces that transform your backyard into an entertainment oasis.',
    image: '/images/services/patios.jpg'
  },
  {
    title: 'Foundation Work',
    description: 'Solid foundations for new construction and expert repairs for existing structures.',
    image: '/images/services/foundations.jpg'
  },
  {
    title: 'Concrete Floors',
    description: 'Polished, stained, or stamped concrete floors for both residential and commercial spaces.',
    image: '/images/services/floors.jpg'
  },
  {
    title: 'Retaining Walls',
    description: 'Engineered retaining walls that combine functionality with aesthetic appeal.',
    image: '/images/services/walls.jpg'
  },
  {
    title: 'Decorative Concrete',
    description: 'Custom decorative concrete solutions including stamping, staining, and exposed aggregate.',
    image: '/images/services/decorative.jpg'
  }
]

const projects = [
  {
    title: 'Modern Home Driveway',
    description: 'A contemporary exposed aggregate driveway with integrated lighting and drainage solutions.',
    image: '/images/projects/driveway1.jpg'
  },
  {
    title: 'Commercial Plaza',
    description: 'Large-scale commercial concrete installation with decorative patterns and custom coloring.',
    image: '/images/projects/commercial1.jpg'
  },
  {
    title: 'Backyard Transformation',
    description: 'Complete backyard renovation featuring a stamped concrete patio and built-in fire pit.',
    image: '/images/projects/patio1.jpg'
  },
  {
    title: 'Industrial Facility',
    description: 'High-performance concrete flooring solution for a manufacturing facility.',
    image: '/images/projects/industrial1.jpg'
  }
]
