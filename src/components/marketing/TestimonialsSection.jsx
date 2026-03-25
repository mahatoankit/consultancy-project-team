'use client'

import { TESTIMONIALS } from '@/constants/mockData'
import { Quote, Star } from 'lucide-react'

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#ff6b35] font-semibold text-sm tracking-widest uppercase mb-4">
            Success Stories
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#003366] mb-6">
            What Our Students Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg p-8 border border-[#e0e0e0] hover:shadow-lg transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <div className="flex gap-2 mb-6">
                <Quote size={20} className="text-[#ff6b35] flex-shrink-0" />
                <p className="text-[#1a1a1a] italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Outcome Badge */}
              <div className="mb-6 pb-6 border-b border-[#e0e0e0]">
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-semibold ${
                    testimonial.outcomeType === 'success'
                      ? 'bg-green-50 text-green-700 border border-green-200'
                      : 'bg-amber-50 text-amber-700 border border-amber-200'
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      testimonial.outcomeType === 'success'
                        ? 'bg-green-700'
                        : 'bg-amber-700'
                    }`}
                  />
                  {testimonial.outcome}
                </div>
              </div>

              {/* Author */}
              <div>
                <p className="font-semibold text-[#003366]">{testimonial.name}</p>
                <p className="text-sm text-[#666666]">{testimonial.destination}</p>
                <p className="text-xs text-[#999999] mt-2">{testimonial.flag} {testimonial.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
