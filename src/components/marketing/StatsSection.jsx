'use client'

import { TrendingUp, Globe, Award, Users } from 'lucide-react'

const stats = [
  {
    icon: Users,
    label: "Students Placed",
    value: "50,000+",
    description: "Pursuing education worldwide"
  },
  {
    icon: Globe,
    label: "Countries Covered",
    value: "45+",
    description: "Study destinations available"
  },
  {
    icon: Award,
    label: "Partner Universities",
    value: "850+",
    description: "Top-ranked institutions"
  },
  {
    icon: TrendingUp,
    label: "Success Rate",
    value: "98.2%",
    description: "Visa approval rate"
  }
]

export default function StatsSection() {
  return (
    <section
      className="bg-[#003366] py-16 bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(0,51,102,0.96), rgba(0,51,102,0.9)), url('https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1400&q=80')",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <h2 className="text-white text-3xl font-bold mb-3">Accelerating your academic growth overseas</h2>
          <p className="text-blue-100 text-sm leading-relaxed">
            Our counselors combine admissions expertise, visa compliance knowledge, and destination-specific planning to help students make informed decisions and progress confidently toward global careers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div key={idx} className="text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#ff6b35] p-3 rounded-lg">
                    <Icon size={24} />
                  </div>
                  <p className="text-sm text-blue-100">{stat.label}</p>
                </div>
                <p className="text-3xl font-bold mb-2">{stat.value}</p>
                <p className="text-blue-200 text-sm">{stat.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
