'use client'

import { useState, useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'
import { TESTIMONIALS, PARTNER_UNIVERSITIES, COUNSELLORS } from '@/constants/mockData'

function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true)
    }, { threshold })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, visible }
}

function TestimonialCard({ testimonial, delay }) {
  const { ref, visible } = useReveal()

  return (
    <div
      ref={ref}
      className={cn(
        'bg-white border border-neutral-200 rounded-[16px] p-6 flex flex-col gap-4 reveal',
        visible && 'visible'
      )}
      style={{
        transitionDelay: visible ? `${delay}ms` : '0ms'
      }}
    >
      {/* Stars */}
      <div className="text-amber-400 text-sm">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>

      {/* Quote */}
      <p className="text-sm text-neutral-700 leading-relaxed italic flex-1">
        "{testimonial.quote}"
      </p>

      {/* Outcome badge */}
      <div
        className={cn(
          'flex items-center gap-1.5 text-xs font-semibold w-fit',
          testimonial.outcomeType === 'success'
            ? 'text-green-700 bg-green-50 border border-green-200'
            : 'text-amber-700 bg-amber-50 border border-amber-200',
          'px-2.5 py-1.5 rounded'
        )}
      >
        <div
          className={cn(
            'w-1.5 h-1.5 rounded-full',
            testimonial.outcomeType === 'success' ? 'bg-green-700' : 'bg-amber-700'
          )}
        />
        {testimonial.outcome}
      </div>

      {/* Author */}
      <div className="border-t border-neutral-100 pt-3 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#1e3a8a] text-white text-sm font-semibold flex items-center justify-center">
          {testimonial.avatar}
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-neutral-900">{testimonial.name}</p>
          <p className="text-xs text-neutral-500">{testimonial.destination}</p>
        </div>
      </div>
    </div>
  )
}

function VisaTicker() {
  const { ref, visible } = useReveal()

  const recentVisas = [
    { name: "Arjun P.", country: "🇨🇦 Canada", time: "2 hrs ago" },
    { name: "Sofia M.", country: "🇬🇧 UK", time: "5 hrs ago" },
    { name: "David K.", country: "🇦🇺 Australia", time: "1 day ago" },
  ]

  return (
    <div
      ref={ref}
      className={cn(
        'bg-white border border-neutral-200 rounded-[16px] p-6 reveal',
        visible && 'visible'
      )}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-green-500 ring-4 ring-green-500/20" />
        <p className="text-sm font-semibold text-neutral-800">Recent visa approvals</p>
      </div>

      {/* Percentage */}
      <div className="text-4xl font-bold text-[#1e3a8a] mb-1">98.2%</div>
      <p className="text-xs text-neutral-400 mb-5">visa success rate — last 6 months</p>

      {/* Approvals list */}
      <div className="space-y-2">
        {recentVisas.map((visa, i) => (
          <div
            key={i}
            className={cn(
              'flex justify-between items-center bg-neutral-50 rounded-[10px] p-3 reveal',
              visible && 'visible'
            )}
            style={{
              transitionDelay: visible ? `${i * 200}ms` : '0ms'
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center">
                <Check size={14} className="text-green-600" strokeWidth={3} />
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-800">{visa.name}</p>
                <p className="text-xs text-neutral-500">{visa.country}</p>
              </div>
            </div>
            <p className="text-xs text-neutral-400">{visa.time}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function CounsellorsCard() {
  const { ref, visible } = useReveal()

  return (
    <div
      ref={ref}
      className={cn(
        'bg-white border border-neutral-200 rounded-[16px] p-5 reveal',
        visible && 'visible'
      )}
    >
      <p className="text-sm font-semibold text-neutral-800 mb-4">Available counsellors today</p>

      <div className="space-y-3">
        {COUNSELLORS.map((counsellor) => {
          const isScarce = counsellor.slots <= 2

          return (
            <div
              key={counsellor.name}
              className="flex items-center justify-between bg-neutral-50 rounded-[10px] p-4"
            >
              <div className="flex items-center gap-3 flex-1">
                <div className="w-12 h-12 rounded-full bg-[#1e3a8a] text-white text-sm font-semibold flex items-center justify-center flex-shrink-0">
                  {counsellor.avatar}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-neutral-800">{counsellor.name}</p>
                  <p className="text-xs text-neutral-500">{counsellor.specialty}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 flex-shrink-0">
                <div
                  className={cn(
                    'text-[11px] font-bold px-2 py-1 rounded',
                    isScarce
                      ? 'bg-red-50 text-red-600'
                      : 'bg-green-50 text-green-600'
                  )}
                >
                  {counsellor.slots} slots
                </div>
                <button className="text-[#1e3a8a] text-xs underline decoration-dotted cursor-pointer hover:text-[#0f1f4d]">
                  Book now
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function TrustMatrix() {
  const headerReveal = useReveal()

  return (
    <section className="bg-neutral-50 py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div
          ref={headerReveal.ref}
          className={cn(
            'text-center max-w-2xl mx-auto mb-16 reveal',
            headerReveal.visible && 'visible'
          )}
        >
          <p className="text-sm font-semibold tracking-[0.1em] uppercase text-amber-500 mb-3">
            Social Proof
          </p>
          <h2 className="text-[clamp(28px,4vw,44px)] font-bold text-neutral-900 leading-[1.15]">
            Real outcomes.
            <br />
            Real students.
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-4">
          {/* Left — Testimonials */}
          <div className="col-span-8 grid grid-cols-3 gap-4">
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                delay={index * 150}
              />
            ))}
          </div>

          {/* Right — Visa + Counsellors */}
          <div className="col-span-4 flex flex-col gap-4">
            <VisaTicker />
            <CounsellorsCard />
          </div>
        </div>

        {/* Partner Universities */}
        <div className="mt-16 text-center">
          <p className="text-xs uppercase tracking-widest text-neutral-400 mb-6">
            Partner universities
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {PARTNER_UNIVERSITIES.map((university) => (
              <button
                key={university.name}
                className="bg-white border border-neutral-200 rounded-[10px] px-5 py-2.5 cursor-pointer hover:border-[#1e3a8a] hover:shadow-sm transition-all grayscale hover:grayscale-0"
              >
                <p className="text-[13px] font-semibold text-neutral-700">{university.name}</p>
                <p className="text-[11px] text-neutral-400">{university.country} • Rank #{university.rank}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
