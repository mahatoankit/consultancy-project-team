'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function HeroSection() {
  return (
    <section
      className="pt-10 md:pt-14 pb-16 bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(92deg, rgba(255,255,255,0.86) 0%, rgba(255,255,255,0.74) 45%, rgba(255,255,255,0.56) 100%), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <p className="text-[#ff6b35] font-semibold text-sm tracking-widest uppercase mb-4">
              Your pathway to success
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#003366] mb-6 leading-tight">
              Study at Top Universities Worldwide
            </h1>
            <p className="text-lg text-[#666666] mb-8 leading-relaxed">
              Get expert guidance on program selection, applications, visa processing, and scholarship opportunities. Our counselors help you navigate every step of your study abroad journey.
            </p>

            <p className="text-sm text-[#4c5b72] mb-8 leading-relaxed max-w-2xl">
              Team supports students with a practical roadmap: identifying the right destination, building a competitive profile, preparing strong applications, and handling visa documentation with clarity and confidence.
            </p>

            {/* Key benefits */}
            <div className="space-y-3 mb-8">
              {[
                'Expert counselors with 8+ years experience',
                '98.2% visa approval success rate',
                'Partnerships with 850+ universities',
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-[#28a745] flex-shrink-0" />
                  <span className="text-[#1a1a1a]">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary inline-flex items-center justify-center gap-2">
                Start Your Journey
                <ArrowRight size={18} />
              </button>
              <Link
                href="/about"
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                Learn More
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#003366] to-[#005299] rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur rounded-lg p-6 border border-white/20">
                  <p className="text-sm font-semibold text-blue-100 mb-2">50,000+</p>
                  <p className="text-2xl font-bold">Students Placed</p>
                  <p className="text-blue-100 text-sm mt-2">Successfully pursuing their dreams globally</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                    <p className="text-xs font-semibold text-blue-100">Countries</p>
                    <p className="text-xl font-bold mt-1">45+</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                    <p className="text-xs font-semibold text-blue-100">Universities</p>
                    <p className="text-xl font-bold mt-1">850+</p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur rounded-lg p-6 border border-white/20">
                  <p className="text-sm font-semibold text-blue-100 mb-3">Success Metrics</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Visa Approval</span>
                      <span className="font-bold">98.2%</span>
                    </div>
                    <div className="w-full bg-blue-900 rounded-full h-2">
                      <div className="bg-[#ff6b35] h-2 rounded-full" style={{ width: '98.2%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
