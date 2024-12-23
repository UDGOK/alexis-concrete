import Image from 'next/image'
import Link from 'next/link'

const concreteServices = [
  {
    title: 'Concrete Driveways',
    description: 'Custom-designed driveways that enhance your home\'s curb appeal and value',
    image: 'https://images.unsplash.com/photo-1597309792995-1d77b591e614?q=80&w=1200',
    link: '/services/concrete/driveways'
  },
  {
    title: 'Concrete Patios',
    description: 'Beautiful outdoor living spaces designed for comfort and durability',
    image: 'https://images.unsplash.com/photo-1617850687395-620757feb1f3?q=80&w=1200',
    link: '/services/concrete/patios'
  },
  {
    title: 'Foundations',
    description: 'Solid foundations for residential and commercial buildings',
    image: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=1200',
    link: '/services/concrete/foundations'
  },
  {
    title: 'Stamped Concrete',
    description: 'Decorative concrete solutions for unique and beautiful surfaces',
    image: 'https://images.unsplash.com/photo-1578862973944-aa4f4d7a5791?q=80&w=1200',
    link: '/services/concrete/stamped'
  },
  {
    title: 'Swimming Pools',
    description: 'Custom pool designs that transform your backyard into a paradise',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1200',
    link: '/services/concrete/pools'
  }
]

export default function ConcreteServicesPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-reserve-black py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-reserve-cream">Concrete Services</h1>
            <p className="text-lg text-reserve-cream/80 max-w-2xl mx-auto">
              Expert concrete solutions for residential and commercial projects
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-reserve-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {concreteServices.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="group block bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-3 text-reserve-black group-hover:text-reserve-gold transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-reserve-brown">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-reserve-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-reserve-cream">
              Why Choose Our Concrete Services?
            </h2>
            <p className="text-reserve-cream/80 max-w-2xl mx-auto">
              We deliver excellence in every concrete project with our expertise and dedication
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 text-reserve-gold">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-reserve-cream">Quality Guaranteed</h3>
              <p className="text-reserve-cream/80">Premium materials and expert craftsmanship in every project</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 text-reserve-gold">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-reserve-cream">On-Time Completion</h3>
              <p className="text-reserve-cream/80">We value your time and stick to project schedules</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 text-reserve-gold">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-reserve-cream">Expert Team</h3>
              <p className="text-reserve-cream/80">Skilled professionals with years of concrete experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-reserve-cream py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-reserve-black">Ready to Start Your Concrete Project?</h2>
          <p className="text-reserve-brown mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and estimate
          </p>
          <Link
            href="/contact"
            className="inline-block bg-reserve-gold text-reserve-black px-8 py-3 rounded-lg font-semibold hover:bg-reserve-gold-light transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </main>
  )
}
