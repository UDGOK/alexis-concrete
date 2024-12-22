import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Alexis Concrete | Professional Concrete Services</title>
        <meta name="description" content="Expert concrete services for residential and commercial projects. Quality workmanship and reliable service." />
      </Head>

      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center bg-gradient-to-b from-gray-100 to-white">
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              Transforming spaces with concrete excellence
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl">
              We specialize in creating durable, beautiful concrete solutions for residential and commercial projects.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="#contact" className="px-8 py-4 bg-black text-white text-lg rounded-lg hover:bg-gray-800 transition-colors">
                Start Your Project
              </a>
              <a href="#services" className="px-8 py-4 border-2 border-black text-lg rounded-lg hover:bg-black hover:text-white transition-colors">
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-16">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl">
                <div className="relative h-[600px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-200">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="relative h-[400px] mb-6 overflow-hidden rounded-xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-8">Let's Work Together</h2>
            <p className="text-xl text-gray-600 mb-12">
              Ready to start your project? Contact us for a consultation and free estimate.
            </p>
            <div className="bg-white p-12 rounded-2xl shadow-xl">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:ring-0 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:ring-0 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:ring-0 transition-colors"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button type="submit" className="w-full px-8 py-4 bg-black text-white text-lg rounded-lg hover:bg-gray-800 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const projects = [
  {
    title: "Modern Driveway Design",
    description: "Custom concrete driveway with modern patterns and finishes",
    image: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?q=80&w=1200"
  },
  {
    title: "Commercial Plaza",
    description: "Large-scale commercial concrete installation",
    image: "https://images.unsplash.com/photo-1590579491624-f98f36d4c763?q=80&w=1200"
  }
]

const services = [
  {
    title: "Residential Concrete",
    description: "Custom driveways, patios, and walkways designed to enhance your home's beauty and value.",
    image: "https://images.unsplash.com/photo-1578662996442-48f1845937b7?q=80&w=800"
  },
  {
    title: "Commercial Concrete",
    description: "Large-scale solutions for businesses, including foundations, floors, and parking structures.",
    image: "https://images.unsplash.com/photo-1584467541268-b040f83be3fd?q=80&w=800"
  },
  {
    title: "Decorative Concrete",
    description: "Stamped, stained, and polished concrete options to create unique and beautiful surfaces.",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800"
  }
]
