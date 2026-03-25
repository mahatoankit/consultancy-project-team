'use client'

import { FileCheck, Building2, Plane, GraduationCap, BookOpen, Award } from 'lucide-react'

const services = [
  {
    icon: FileCheck,
    title: "Profile Assessment",
    description: "Comprehensive evaluation of your academic background, work experience, and career goals to identify the best-fit universities."
  },
  {
    icon: Building2,
    title: "University Selection",
    description: "Personalized recommendations from 850+ partner universities across 45 countries based on your profile and preferences."
  },
  {
    icon: BookOpen,
    title: "Application Support",
    description: "End-to-end guidance for university applications, essay writing, statement of purpose, and recommendation letters."
  },
  {
    icon: Plane,
    title: "Visa Guidance",
    description: "Complete visa documentation preparation, interview coaching, and post-approval support for smooth travel."
  },
  {
    icon: Award,
    title: "Scholarship Search",
    description: "Identification and application support for scholarships, grants, and financial aid opportunities worldwide."
  },
  {
    icon: GraduationCap,
    title: "Pre-Departure",
    description: "Orientation and guidance on accommodation, travel insurance, SIM cards, and settling into your new country."
  }
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#ff6b35] font-semibold text-sm tracking-widest uppercase mb-4">
            What We Offer
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#003366] mb-6">
            Comprehensive Study Abroad Services
          </h2>
          <p className="text-lg text-[#666666] max-w-2xl mx-auto">
            We provide end-to-end support from initial counseling to settling into your new academic home.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                className="bg-white rounded-lg p-8 border border-[#e0e0e0] hover:border-[#003366] hover:shadow-lg transition-all group"
              >
                <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#003366] transition-colors">
                  <Icon size={24} className="text-[#003366] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-[#003366] mb-3">{service.title}</h3>
                <p className="text-[#666666] leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
