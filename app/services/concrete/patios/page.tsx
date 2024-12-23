import Image from 'next/image'
import Link from 'next/link'

export default function ConcretePatiosPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-reserve-black py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-reserve-cream">Concrete Patios</h1>
            <p className="text-lg text-reserve-cream/80 max-w-2xl mx-auto">
              Transform your outdoor living space with custom-designed concrete patios
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
                src="/images/services/patios.jpg"
                alt="Concrete Patio"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-reserve-black">
                Custom Patio Solutions
              </h2>
              <p className="text-reserve-brown mb-6">
                Our concrete patios are designed to extend your living space outdoors, creating the perfect area for 
                relaxation and entertainment. We combine durability with aesthetic appeal to deliver patios that enhance 
                your property's value and functionality.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-reserve-brown">
                  <svg className="w-6 h-6 text-reserve-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Customizable designs and patterns
                </li>
                <li className="flex items-center text-reserve-brown">
                  <svg className="w-6 h-6 text-reserve-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Weather-resistant materials
                </li>
                <li className="flex items-center text-reserve-brown">
                  <svg className="w-6 h-6 text-reserve-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Expert installation
                </li>
                <li className="flex items-center text-reserve-brown">
                  <svg className="w-6 h-6 text-reserve-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Easy maintenance
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

      {/* Features Section */}
      <section className="py-20 bg-reserve-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-reserve-cream text-center">
            Patio Design Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 text-reserve-gold">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-reserve-cream">Custom Sizes</h3>
              <p className="text-reserve-cream/80">Tailored to your space and needs</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 text-reserve-gold">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-reserve-cream">Color Options</h3>
              <p className="text-reserve-cream/80">Wide range of colors and finishes</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 text-reserve-gold">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-reserve-cream">Texture Choices</h3>
              <p className="text-reserve-cream/80">Various patterns and textures</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-reserve-cream py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-reserve-black">
            Ready to Transform Your Outdoor Space?
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
