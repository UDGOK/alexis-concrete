import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="Concrete work"
            fill
            style={{ objectFit: 'cover' }}
            className="opacity-50"
          />
        </div>
        <div className="z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            Building Strong Foundations
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Professional Concrete & Asphalt Solutions
          </p>
          <Link 
            href="/contact"
            className="bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/asphalt-service.jpg"
                  alt="Asphalt Services"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold mt-4">Asphalt</h3>
              <p className="mt-2 text-gray-600">
                Complete asphalt solutions including paving, repair, and resurfacing
              </p>
            </div>
            <div className="group cursor-pointer">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/concrete-service.jpg"
                  alt="Concrete Services"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold mt-4">Concrete</h3>
              <p className="mt-2 text-gray-600">
                Expert concrete work for parking lots, driveways, and custom projects
              </p>
            </div>
            <div className="group cursor-pointer">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/striping-service.jpg"
                  alt="Parking Lot Striping"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold mt-4">Parking Lot Striping</h3>
              <p className="mt-2 text-gray-600">
                Professional parking lot striping and marking services
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
