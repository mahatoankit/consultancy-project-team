'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="bg-[#003366] py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of students who have successfully pursued their education abroad with our expert guidance and support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-[#ff6b35] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#e55b25] transition-colors inline-flex items-center justify-center gap-2">
              Schedule Free Consultation
              <ArrowRight size={18} />
            </button>
            <Link
              href="/contact"
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-900 transition-colors inline-flex items-center justify-center gap-2"
            >
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Trust elements */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <CheckCircle size={24} className="text-[#ff6b35] mb-2" />
              <p className="text-sm text-blue-100">100% Free Consultation</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle size={24} className="text-[#ff6b35] mb-2" />
              <p className="text-sm text-blue-100">Expert Counselors</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle size={24} className="text-[#ff6b35] mb-2" />
              <p className="text-sm text-blue-100">Personalized Guidance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
