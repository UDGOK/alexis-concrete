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
      <section className="relative h-screen flex items-center">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-display font-bold mb-8">
              Building foundations for tomorrow
            </h1>
            <p className="text-h3 text-secondary mb-12">
              Expert concrete solutions for residential and commercial projects
            </p>
            <div className="flex gap-6">
              <a href="#services" className="btn btn-primary">
                Our Services
              </a>
              <a href="#contact" className="btn btn-outline">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1590579491624-f98f36d4c763?q=80&w=2000"
            alt="Concrete work"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section bg-gray-50">
        <div className="container">
          <h2 className="text-h1 font-bold mb-16 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="rounded-xl mb-6"
                />
                <h3 className="text-h3 font-bold mb-4">{service.title}</h3>
                <p className="text-body text-secondary">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-h1 font-bold mb-8">
                Crafting Excellence in Concrete
              </h2>
              <p className="text-body text-secondary mb-6">
                With over two decades of experience, Alexis Concrete has established itself as a leader in the concrete industry. Our commitment to quality and customer satisfaction has earned us a reputation for excellence.
              </p>
              <p className="text-body text-secondary mb-8">
                We take pride in our work and ensure that every project, regardless of size, receives the same level of attention to detail and professional service.
              </p>
              <a href="#contact" className="btn btn-primary">
                Work With Us
              </a>
            </div>
            <div className="relative h-[600px]">
              <Image
                src="https://images.unsplash.com/photo-1583029901628-8039767c7ad0?q=80&w=1000"
                alt="About Alexis Concrete"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-gray-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-h1 font-bold mb-8">Get in Touch</h2>
            <p className="text-body text-secondary mb-12">
              Ready to start your project? Contact us today for a free consultation and estimate.
            </p>
            <div className="bg-white p-8 rounded-2xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
                />
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
                ></textarea>
                <button type="submit" className="btn btn-primary w-full">
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

const services = [
  {
    title: "Concrete Installation",
    description: "Professional concrete installation for driveways, patios, and foundations. We ensure durability and aesthetic appeal.",
    image: "https://images.unsplash.com/photo-1578662996442-48f1845937b7?q=80&w=800"
  },
  {
    title: "Concrete Repair",
    description: "Expert repair services for cracks, settling, and other concrete damage. Restore your concrete to its original condition.",
    image: "https://images.unsplash.com/photo-1584467541268-b040f83be3fd?q=80&w=800"
  },
  {
    title: "Decorative Concrete",
    description: "Transform your space with our decorative concrete solutions, including stamped, stained, and polished concrete.",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800"
  }
]
