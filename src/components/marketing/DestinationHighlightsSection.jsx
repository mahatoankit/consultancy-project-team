'use client'

import Image from 'next/image'
import { useState } from 'react'
import { DESTINATIONS } from '@/constants/mockData'

const destinationImages = {
  'United Kingdom': 'https://images.unsplash.com/photo-1488747279002-c8523379faaa?auto=format&fit=crop&w=900&q=80',
  Canada: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=900&q=80',
  Australia: 'https://images.unsplash.com/photo-1523428461295-92770e70d7ae?auto=format&fit=crop&w=900&q=80',
  USA: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=900&q=80',
  Germany: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=900&q=80',
  'New Zealand': 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80',
}

export default function DestinationHighlightsSection() {
  const featured = DESTINATIONS.slice(0, 4)
  const [imageErrors, setImageErrors] = useState({})

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-[#ff6b35] font-semibold text-sm tracking-widest uppercase mb-3">Choose your destination</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#003366] mb-4">Your academic goals are waiting to be achieved</h2>
          <p className="text-[#5b677c] leading-relaxed">
            Compare leading study destinations based on tuition range, university availability, and long-term career outcomes. Our team helps you shortlist options that fit your academic profile and financial plan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((dest) => (
            <article key={dest.country} className="rounded-xl overflow-hidden border border-[#e4e8f0] shadow-sm bg-white">
              <div className="h-32 relative bg-gradient-to-br from-[#dfeafe] to-[#b9d2ff]">
                {!imageErrors[dest.country] && (
                  <Image
                    src={destinationImages[dest.country]}
                    alt={`Study in ${dest.country}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    onError={() => setImageErrors((prev) => ({ ...prev, [dest.country]: true }))}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-black/5" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-[#173a70]">Study in {dest.country}</h3>
                  <span className="text-xl" role="img" aria-label={dest.country}>{dest.flag}</span>
                </div>
                <p className="text-sm text-[#5f6b80] mb-4 leading-relaxed">
                  Explore institutions with strong global rankings and student support ecosystems in {dest.country}.
                </p>
                <div className="text-xs text-[#5f6b80] space-y-1">
                  <p><span className="font-semibold text-[#2a436f]">Universities:</span> {dest.universities}+</p>
                  <p><span className="font-semibold text-[#2a436f]">Average tuition:</span> {dest.avgTuition}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
