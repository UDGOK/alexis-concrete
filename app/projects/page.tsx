import Image from 'next/image'
import Link from 'next/link'

export default function ProjectsPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-reserve-black py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-reserve-cream">Our Projects</h1>
            <p className="text-lg text-reserve-cream/80 max-w-2xl mx-auto">
              Explore our portfolio of completed concrete and asphalt projects
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-reserve-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project cards will be added here */}
            <div className="text-center p-8">
              <h2 className="text-2xl font-bold text-reserve-black">Coming Soon</h2>
              <p className="text-reserve-brown mt-4">
                Our project gallery is being updated. Check back soon to see our latest work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-reserve-black py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-reserve-cream">
            Ready to Start Your Project?
          </h2>
          <p className="text-reserve-cream/80 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your concrete or asphalt needs
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
