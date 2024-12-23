import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    title: 'Concrete Services',
    description: 'Expert concrete solutions for residential and commercial projects',
    image: '/images/services/concrete-main.jpg',
    link: '/services/concrete',
    services: [
      'Concrete Driveways',
      'Concrete Patios',
      'Foundations',
      'Stamped Concrete',
      'Swimming Pools'
    ]
  },
  {
    title: 'Asphalt Services',
    description: 'Professional asphalt paving and maintenance solutions',
    image: '/images/services/asphalt-main.jpg',
    link: '/services/asphalt',
    services: [
      'Asphalt Pavements',
      'Asphalt Resurfacing'
    ]
  }
]

export default function ServicesPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-reserve-black py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-reserve-cream">Our Services</h1>
            <p className="text-lg text-reserve-cream/80 max-w-2xl mx-auto">
              Comprehensive concrete and asphalt solutions for all your construction needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-reserve-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="group">
                <Link href={service.link} className="block">
                  <div className="relative aspect-[16/9] mb-6 overflow-hidden rounded-lg">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-reserve-black group-hover:text-reserve-gold transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-reserve-brown mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.services.map((item, i) => (
                      <li key={i} className="flex items-center text-reserve-brown">
                        <svg className="w-5 h-5 text-reserve-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-reserve-black py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-reserve-cream">Ready to Start Your Project?</h2>
          <p className="text-reserve-cream/80 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and estimate on your concrete or asphalt project
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
