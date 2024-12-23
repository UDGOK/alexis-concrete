'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const heroRef = useRef(null)
  const servicesRef = useRef(null)

  useEffect(() => {
    // Hero Animation
    gsap.fromTo(
      '.hero-text',
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.2 }
    )

    // Services Animation
    gsap.fromTo(
      '.service-card',
      { 
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: servicesRef.current,
          start: 'top center+=100',
          end: 'bottom center',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }, [])

  return (
    <main className="relative">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center bg-black overflow-hidden"
      >
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
          >
            <source src="/videos/concrete-pour.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="hero-text text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8">
            Building
            <span className="block">Tomorrow's</span>
            <span className="block">Foundations</span>
          </h1>
          <p className="hero-text text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto">
            Expert concrete and asphalt solutions for residential and commercial projects
          </p>
          <Link
            href="/contact"
            className="hero-text inline-block px-8 py-4 text-lg border border-white text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            Start Your Project
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-8 h-14 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        ref={servicesRef}
        className="py-32 bg-white"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-20 text-center">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Concrete Services */}
            <div className="service-card group">
              <Link href="/services/concrete" className="block relative aspect-[4/3] mb-8 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1597309792995-1d77b591e614?q=80&w=1200"
                  alt="Concrete Services"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </Link>
              <h3 className="text-2xl font-bold mb-4">Concrete Solutions</h3>
              <p className="text-gray-600 mb-6">
                From driveways to foundations, we deliver premium concrete solutions that stand the test of time.
              </p>
              <Link 
                href="/services/concrete"
                className="inline-flex items-center text-black hover:opacity-70 transition-opacity"
              >
                Explore Services
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Asphalt Services */}
            <div className="service-card group">
              <Link href="/services/asphalt" className="block relative aspect-[4/3] mb-8 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200"
                  alt="Asphalt Services"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </Link>
              <h3 className="text-2xl font-bold mb-4">Asphalt Solutions</h3>
              <p className="text-gray-600 mb-6">
                Professional asphalt services for driveways, parking lots, and commercial projects.
              </p>
              <Link 
                href="/services/asphalt"
                className="inline-flex items-center text-black hover:opacity-70 transition-opacity"
              >
                Explore Services
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-32 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-0">Featured Projects</h2>
            <Link 
              href="/projects"
              className="inline-flex items-center text-white hover:opacity-70 transition-opacity"
            >
              View All Projects
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project previews will be added here */}
            <div className="aspect-[4/5] bg-gray-900 animate-pulse"></div>
            <div className="aspect-[4/5] bg-gray-900 animate-pulse"></div>
            <div className="aspect-[4/5] bg-gray-900 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Start?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Let's discuss your project and create something extraordinary together.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 text-lg border border-black text-black hover:bg-black hover:text-white transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  )
}
