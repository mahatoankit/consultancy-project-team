'use client'

import { PARTNER_UNIVERSITIES, DESTINATIONS } from '@/constants/mockData'
import { MapPin, Users, DollarSign } from 'lucide-react'
import { useState } from 'react'

export default function UniversitiesPage() {
  const [selectedCountry, setSelectedCountry] = useState(null)

  return (
    <main className="bg-white">
      {/* Hero */}
      <section
        className="text-white py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(112deg, rgba(16,79,154,0.78), rgba(23,111,208,0.58)), url('https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Partner Universities</h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Access to 850+ universities across 45 countries worldwide.
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">Featured Partners</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PARTNER_UNIVERSITIES.map((uni, idx) => (
              <div
                key={idx}
                className="bg-neutral-50 rounded-lg p-6 border border-[#e0e0e0] hover:border-[#003366] hover:shadow-lg transition-all text-center"
              >
                <h3 className="text-lg font-semibold text-[#003366] mb-2">{uni.name}</h3>
                <p className="text-sm text-[#666666] mb-4">{uni.country}</p>
                <div className="bg-white rounded px-3 py-1 inline-block">
                  <p className="text-xs font-semibold text-[#ff6b35]">Global Rank #{uni.rank}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[#666666] mb-4">and 840+ more universities worldwide</p>
            <button className="btn-primary inline-flex items-center justify-center gap-2">
              Explore Full Directory
            </button>
          </div>
        </div>
      </section>

      {/* Countries */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">Study Destinations</h2>
            <p className="text-[#666666]">Click on a country to see available universities and details</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DESTINATIONS.map((dest, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedCountry(selectedCountry === dest.country ? null : dest.country)}
                className="bg-white rounded-lg cursor-pointer border border-[#e0e0e0] hover:border-[#003366] hover:shadow-lg transition-all overflow-hidden"
              >
                <div
                  className={`p-8 transition-colors ${
                    selectedCountry === dest.country
                      ? 'bg-[#003366] text-white'
                      : 'bg-gradient-to-br from-blue-50 to-neutral-100'
                  }`}
                >
                  <div className="text-4xl mb-3">{dest.flag}</div>
                  <h3 className={`text-xl font-semibold mb-4 ${selectedCountry === dest.country ? 'text-white' : 'text-[#003366]'}`}>
                    {dest.country}
                  </h3>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Users size={16} className={selectedCountry === dest.country ? 'text-[#ff6b35]' : 'text-[#003366]'} />
                      <span className={selectedCountry === dest.country ? 'text-blue-100' : 'text-[#666666]'}>
                        {dest.universities} Universities
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign size={16} className={selectedCountry === dest.country ? 'text-[#ff6b35]' : 'text-[#003366]'} />
                      <span className={selectedCountry === dest.country ? 'text-blue-100' : 'text-[#666666]'}>
                        Avg Tuition: {dest.avgTuition}
                      </span>
                    </div>
                  </div>
                </div>

                {selectedCountry === dest.country && (
                  <div className="p-6 border-t border-[#e0e0e0] bg-blue-50">
                    <p className="text-sm text-[#003366] font-semibold mb-3">Why {dest.country}?</p>
                    <ul className="text-xs text-[#666666] space-y-2">
                      <li>• World-class education system</li>
                      <li>• Strong employment opportunities</li>
                      <li>• Diverse cultural experience</li>
                      <li>• Post-study work opportunities</li>
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#003366] mb-4">Not sure which country is right for you?</h2>
          <p className="text-[#666666] mb-8 text-lg">
            Our counselors can evaluate your profile and recommend universities based on your goals, budget, and preferences.
          </p>
          <button className="btn-primary">
            Start Your Free Assessment
          </button>
        </div>
      </section>
    </main>
  )
}
