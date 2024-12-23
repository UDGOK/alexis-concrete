import Image from 'next/image'
import Link from 'next/link'

export default function ConcreteFoundationsPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-reserve-black py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-reserve-cream">Concrete Foundations</h1>
            <p className="text-lg text-reserve-cream/80 max-w-2xl mx-auto">
              Strong, reliable foundations for residential and commercial buildings
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-reserve-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/services/foundations.jpg"
                alt="Concrete Foundation"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-reserve-black">
                Expert Foundation Solutions
              </h2>
              <p className="text-reserve-brown mb-6">
                Our concrete foundation services ensure your building starts with a solid base. We specialize in 
                creating durable, long-lasting foundations that meet all local building codes and specifications.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-reserve-brown">
                  <svg className="w-6 h-6 text-reserve-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Residential and commercial foundations
                </li>
                <li className="flex items-center text-reserve-brown">
                  <svg className="w-6 h-6 text-reserve-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Code-compliant construction
                </li>
                <li className="flex items-center text-reserve-brown">
                  <svg className="w-6 h-6 text-reserve-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Quality materials and reinforcement
                </li>
                <li className="flex items-center text-reserve-brown">
                  <svg className="w-6 h-6 text-reserve-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Professional installation
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-block bg-reserve-gold text-reserve-black px-8 py-3 rounded-lg font-semibold hover:bg-reserve-gold-light transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="py-20 bg-reserve-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-reserve-cream text-center">
            Foundation Types
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 text-reserve-gold">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-reserve-cream">Slab Foundations</h3>
              <p className="text-reserve-cream/80">Perfect for warmer climates</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 text-reserve-gold">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-reserve-cream">Crawl Space</h3>
              <p className="text-reserve-cream/80">Elevated foundation solution</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 text-reserve-gold">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-reserve-cream">Basement</h3>
              <p className="text-reserve-cream/80">Full basement foundations</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 text-reserve-gold">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-reserve-cream">Pier & Beam</h3>
              <p className="text-reserve-cream/80">Elevated construction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-reserve-cream py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-reserve-black">
            Start Your Foundation Project
          </h2>
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
