'use client'

import { useState, useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'
import { 
  GraduationCap, Building2, Globe, BadgeCheck, Check,
  UserCheck, FileText, CreditCard, Plane
} from 'lucide-react'
import { STATS, DESTINATIONS } from '@/constants/mockData'

const ICON_MAP = {
  GraduationCap,
  Building2,
  Globe,
  BadgeCheck,
  UserCheck,
  FileText,
  CreditCard,
  Plane,
  Check,
}

const DEGREE_OPTIONS = [
  "Undergraduate (UG)", "Postgraduate (PG)", "PhD / Research",
  "Diploma / Certificate", "Foundation Year", "MBA / Management",
]

const INTAKE_OPTIONS = [
  "Jan / Feb 2025", "Sep / Oct 2025", "Jan / Feb 2026",
  "Sep / Oct 2026", "Flexible"
]

function useCountUp(target, duration = 2200) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasStarted) {
        setHasStarted(true)
      }
    }, { threshold: 0.15 })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    const startTime = Date.now()
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      setCount(target * progress)
    }, 16)

    return () => clearInterval(interval)
  }, [hasStarted, target, duration])

  return { count, ref }
}

function StatPill({ stat }) {
  const { count, ref } = useCountUp(stat.value, 2200)
  const IconComponent = ICON_MAP[stat.icon]

  return (
    <div
      ref={ref}
      className="bg-white/12 backdrop-blur-sm border border-white/20 rounded-[10px] p-4 flex flex-col items-center text-center"
    >
      {IconComponent && <IconComponent size={24} className="text-amber-300 mb-2" />}
      <div className="text-2xl font-bold text-white">
        {stat.suffix === '%' 
          ? count.toFixed(1)
          : Math.round(count)}
        {stat.suffix}
      </div>
      <div className="text-xs text-white/70 mt-1">{stat.label}</div>
    </div>
  )
}

function QuickFinderWidget() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [animating, setAnimating] = useState(false)

  const handleDegreeSelect = (degree) => {
    setAnswers({ ...answers, degree })
    setAnimating(true)
    setTimeout(() => {
      setStep(1)
      setAnimating(false)
    }, 300)
  }

  const handleCountrySelect = (country) => {
    setAnswers({ ...answers, country })
    setAnimating(true)
    setTimeout(() => {
      setStep(2)
      setAnimating(false)
    }, 300)
  }

  const handleIntakeSelect = (intake) => {
    setAnswers({ ...answers, intake })
  }

  const progressPercentage = Math.round((step / 3) * 100)

  return (
    <div className="bg-white rounded-[24px] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)] max-w-2xl w-full">
      {/* Progress bar */}
      <div className="flex gap-1 mb-8">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={cn(
              'h-1 flex-1 rounded-full transition-colors duration-300',
              i <= step ? 'bg-[#1e3a8a]' : 'bg-neutral-200'
            )}
          />
        ))}
      </div>

      {/* Step label */}
      <div className="text-xs text-neutral-400 font-semibold tracking-widest uppercase mb-4">
        Step {step + 1} of 3
      </div>

      {/* Step content */}
      <div className={cn(
        'transition-all duration-300',
        animating && 'opacity-0 translate-x-2'
      )}>
        {step === 0 && (
          <div>
            <h3 className="text-xl font-semibold text-neutral-800 mb-6">
              What's your degree level?
            </h3>
            <div className="flex flex-wrap gap-2">
              {DEGREE_OPTIONS.map((degree) => (
                <button
                  key={degree}
                  onClick={() => handleDegreeSelect(degree)}
                  className={cn(
                    'border rounded-[10px] px-4 py-2 text-sm font-medium transition-all',
                    answers.degree === degree
                      ? 'bg-[#1e3a8a] text-white border-[#1e3a8a]'
                      : 'border-neutral-200 text-neutral-700 hover:border-neutral-300'
                  )}
                >
                  {degree}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 1 && (
          <div>
            <h3 className="text-xl font-semibold text-neutral-800 mb-6">
              Which country interests you?
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {DESTINATIONS.map((dest) => (
                <button
                  key={dest.country}
                  onClick={() => handleCountrySelect(dest.country)}
                  className={cn(
                    'border rounded-[10px] px-4 py-2.5 text-sm font-medium transition-all',
                    answers.country === dest.country
                      ? 'bg-blue-50 border-[#1e3a8a] text-[#1e3a8a] font-semibold'
                      : 'border-neutral-200 text-neutral-700 hover:border-neutral-300'
                  )}
                >
                  <span className="mr-2">{dest.flag}</span>
                  {dest.country}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 className="text-xl font-semibold text-neutral-800 mb-6">
              When are you planning to apply?
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {INTAKE_OPTIONS.map((intake) => (
                <button
                  key={intake}
                  onClick={() => handleIntakeSelect(intake)}
                  className={cn(
                    'border rounded-[10px] px-4 py-2 text-sm font-medium transition-all',
                    answers.intake === intake
                      ? 'bg-[#1e3a8a] text-white border-[#1e3a8a]'
                      : 'border-neutral-200 text-neutral-700 hover:border-neutral-300'
                  )}
                >
                  {intake}
                </button>
              ))}
            </div>

            {answers.intake && (
              <div className="bg-amber-50 border border-amber-200 rounded-[10px] p-5 transition-all">
                <p className="text-sm text-neutral-600 mb-4">
                  We found <strong>47 matching programmes</strong> for you.
                </p>
                <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-[10px] py-3.5 transition-colors">
                  Check my eligibility — free →
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default function GuidedDiscoveryHero() {
  const [isAnimated, setIsAnimated] = useState(false)

  useEffect(() => {
    setIsAnimated(true)
  }, [])

  return (
    <section className="relative min-h-[92vh] w-full flex items-center justify-center bg-gradient-to-br from-[#0f1f4d] via-[#1e3a8a] to-[#3b5fc0] overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-right opacity-5 pointer-events-none w-[500px] h-[500px] rounded-full bg-white -right-40 -top-40" />
      <div className="absolute bottom-left opacity-5 pointer-events-none w-[400px] h-[400px] rounded-full bg-white -left-32 -bottom-32" />

      <div className={cn(
        'relative z-10 w-full max-w-4xl px-6 flex flex-col items-center transition-all duration-700',
        isAnimated ? 'animate-fade-in animate-slide-up' : 'opacity-0 translate-y-6'
      )}>
        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-400/30 rounded-full px-4 py-1.5 mb-8">
          <span className="text-amber-300 text-sm">✦</span>
          <span className="text-amber-300 text-sm font-medium">
            Trusted by 250,000+ students across 45 countries
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-white font-bold tracking-tight leading-[1.1] max-w-3xl text-center mb-6"
          style={{
            fontSize: 'clamp(40px, 5vw, 56px)'
          }}
        >
          Study your dream degree{' '}
          <span className="text-amber-400">abroad.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-white/75 text-lg max-w-xl text-center mb-10">
          Get expert guidance on university selection, applications, visas, and landing in your new country.
        </p>

        {/* Quick Finder Widget */}
        <QuickFinderWidget />

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
          {STATS.map((stat) => (
            <StatPill key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
