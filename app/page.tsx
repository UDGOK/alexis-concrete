'use client'

import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50"></div>
          <Image
            src="/images/placeholder.jpg"
            alt="Concrete Construction"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-white">
          <h1 className="text-6xl font-bold mb-4">
            Building Strong Foundations
          </h1>
          <p className="text-xl mb-8">
            Quality concrete solutions for residential and commercial projects.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/placeholder.jpg"
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-6">
                  <h3 className="text-2xl font-medium mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden"
              >
                <div className="aspect-[16/9] relative">
                  <Image
                    src="/images/placeholder.jpg"
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-6">
                  <h3 className="text-2xl font-medium mb-4">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">About Us</h2>
              <p className="text-xl text-gray-600 mb-6">
                With over 20 years of experience, Alexis Concrete has been delivering quality concrete solutions to residential and commercial clients.
              </p>
              <p className="text-xl text-gray-600 mb-6">
                Our team of skilled professionals ensures that every project is completed to the highest standards, on time and within budget.
              </p>
              <ul className="space-y-4 text-xl text-gray-600">
                <li>✓ Licensed and Insured</li>
                <li>✓ 20+ Years Experience</li>
                <li>✓ Quality Guaranteed</li>
                <li>✓ Free Estimates</li>
              </ul>
            </div>
            <div className="relative aspect-square">
              <Image
                src="/images/placeholder.jpg"
                alt="About Alexis Concrete"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-xl mb-8">
                Ready to start your project? Contact us for a free estimate or any questions you may have.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Address</h3>
                  <p className="text-gray-400">123 Construction Way<br />City, State 12345</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Contact</h3>
                  <p className="text-gray-400">
                    Phone: (123) 456-7890<br />
                    Email: info@alexisconcrete.com
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Hours</h3>
                  <p className="text-gray-400">
                    Monday - Friday: 7am - 6pm<br />
                    Saturday: 8am - 2pm<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white"
                  placeholder="Tell us about your project"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-white text-black font-medium hover:bg-gray-100 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
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
    title: 'Foundations',
    description: 'Solid foundations for residential and commercial buildings, ensuring long-lasting stability.',
    image: '/images/services/foundations.jpg'
  },
  {
    title: 'Decorative Concrete',
    description: 'Beautiful stamped and stained concrete solutions for patios, walkways, and interior floors.',
    image: '/images/services/decorative.jpg'
  },
  {
    title: 'Commercial Concrete',
    description: 'Large-scale concrete solutions for commercial and industrial projects.',
    image: '/images/services/commercial.jpg'
  },
  {
    title: 'Concrete Repair',
    description: 'Expert repair services for cracks, settling, and other concrete damage.',
    image: '/images/services/repair.jpg'
  },
  {
    title: 'Concrete Patios',
    description: 'Custom designed outdoor living spaces that blend beauty with durability.',
    image: '/images/services/patios.jpg'
  }
]

const projects = [
  {
    title: 'Modern Office Complex',
    description: 'Commercial foundation and parking structure for a 5-story office building.',
    image: '/images/projects/office.jpg'
  },
  {
    title: 'Luxury Home Development',
    description: 'Custom concrete solutions for a high-end residential development.',
    image: '/images/projects/residential.jpg'
  },
  {
    title: 'Shopping Center',
    description: 'Large-scale commercial concrete work for a new retail development.',
    image: '/images/projects/retail.jpg'
  },
  {
    title: 'Industrial Facility',
    description: 'Heavy-duty concrete flooring and foundations for an industrial complex.',
    image: '/images/projects/industrial.jpg'
  }
]
