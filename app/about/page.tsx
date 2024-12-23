import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-reserve-black py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-reserve-cream">About Us</h1>
            <p className="text-lg text-reserve-cream/80 max-w-2xl mx-auto">
              Your trusted partner in concrete and asphalt solutions
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
                src="/images/about/team.jpg"
                alt="Our Team"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-reserve-black">
                Our Story
              </h2>
              <p className="text-reserve-brown mb-6">
                With years of experience in the construction industry, Alexis Concrete has established itself 
                as a leader in providing high-quality concrete and asphalt solutions. Our commitment to excellence 
                and customer satisfaction has made us the preferred choice for both residential and commercial projects.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-reserve-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-reserve-brown">Over 20 years of experience</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-reserve-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-reserve-brown">Licensed and insured professionals</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-reserve-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-reserve-brown">Commitment to quality and safety</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-reserve-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-reserve-cream text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 text-reserve-gold">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-reserve-cream">Quality</h3>
              <p className="text-reserve-cream/80">We never compromise on quality</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 text-reserve-gold">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-reserve-cream">Integrity</h3>
              <p className="text-reserve-cream/80">Honest and transparent service</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 text-reserve-gold">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-reserve-cream">Innovation</h3>
              <p className="text-reserve-cream/80">Always improving our methods</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-reserve-cream py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-reserve-black">
            Ready to Work with Us?
          </h2>
          <p className="text-reserve-brown mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project needs
          </p>
          <Link
            href="/contact"
            className="inline-block bg-reserve-gold text-reserve-black px-8 py-3 rounded-lg font-semibold hover:bg-reserve-gold-light transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  )
}
