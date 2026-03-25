'use client'

import { PROCESS_STEPS } from '@/constants/mockData'
import { UserCheck, Building2, FileText, CreditCard, Plane, Check } from 'lucide-react'

const ICON_MAP = {
  UserCheck,
  Building2,
  FileText,
  CreditCard,
  Plane,
}

export default function ProcessSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#ff6b35] font-semibold text-sm tracking-widest uppercase mb-4">
            Our Process
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#003366] mb-6">
            Five Steps to Your Success
          </h2>
          <p className="text-lg text-[#666666] max-w-2xl mx-auto">
            We guide you through each phase of your study abroad journey with expert support and careful planning.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = ICON_MAP[step.icon]
            const isLast = idx === PROCESS_STEPS.length - 1

            return (
              <div key={step.id} className="flex gap-6 mb-8">
                {/* Timeline connector */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#003366] text-white flex items-center justify-center font-bold border-4 border-white shadow-md">
                    {Icon ? <Icon size={24} /> : step.id}
                  </div>
                  {!isLast && (
                    <div className="w-1 h-24 bg-[#e0e0e0] my-2"></div>
                  )}
                </div>

                {/* Content */}
                <div className="pb-8 flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-[#003366]">{step.title}</h3>
                    <span className="text-xs bg-blue-50 text-[#003366] font-semibold px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-[#666666] mb-4 leading-relaxed">{step.description}</p>
                  
                  {/* Documents */}
                  <div>
                    <p className="text-xs font-semibold text-[#999999] uppercase tracking-wider mb-2">
                      Required Documents
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {step.docs.map((doc, docIdx) => (
                        <span
                          key={docIdx}
                          className="text-xs bg-blue-50 text-[#003366] px-3 py-1.5 rounded border border-blue-100"
                        >
                          • {doc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
