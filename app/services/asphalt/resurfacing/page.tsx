import Image from 'next/image'
import Link from 'next/link'

export default function AsphaltResurfacingPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-reserve-black py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-reserve-cream">Asphalt Resurfacing</h1>
            <p className="text-lg text-reserve-cream/80 max-w-2xl mx-auto">
              Restore and protect your existing asphalt surfaces
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
                src="/images/services/asphalt-resurfacing.jpg"
                alt="Asphalt Resurfacing"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-reserve-black">
                Professional Resurfacing Solutions
              </h2>
              <p className="text-reserve-brown mb-6">
                Our asphalt resurfacing services extend the life of your existing pavement while improving its 
                appearance and functionality. We use premium materials and proven techniques to ensure lasting results.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-reserve-brown">
                  <svg className="w-6 h-6 text-reserve-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Cost-effective solution
                </li>
                <li className="flex items-center text-reserve-brown">
                  <svg className="w-6 h-6 text-reserve-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Extends pavement life
                </li>
                <li className="flex items-center text-reserve-brown">
                  <svg className="w-6 h-6 text-reserve-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Improves appearance
                </li>
                <li className="flex items-center text-reserve-brown">
                  <svg className="w-6 h-6 text-reserve-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Quick completion
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

      {/* Process Section */}
      <section className="py-20 bg-reserve-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-reserve-cream text-center">
            Our Resurfacing Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 text-reserve-gold">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-reserve-cream">Inspection</h3>
              <p className="text-reserve-cream/80">Surface evaluation</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 text-reserve-gold">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-reserve-cream">Preparation</h3>
              <p className="text-reserve-cream/80">Surface cleaning</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 text-reserve-gold">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-reserve-cream">Application</h3>
              <p className="text-reserve-cream/80">New surface layer</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 text-reserve-gold">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-reserve-cream">Finishing</h3>
              <p className="text-reserve-cream/80">Final inspection</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-reserve-cream py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-reserve-black">
            Ready to Restore Your Asphalt?
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
