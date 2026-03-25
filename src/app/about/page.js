'use client'

import { CheckCircle, Zap, Heart, Globe } from 'lucide-react'

const team = [
  { name: "Anika Verma", role: "Founder & CEO", specialty: "UK & Europe", experience: 12 },
  { name: "James Okafor", role: "Counselor", specialty: "Canada & USA", experience: 11 },
  { name: "Mei Lin", role: "Counselor", specialty: "Australia & NZ", experience: 8 },
]

const values = [
  {
    icon: Heart,
    title: "Student-Centric",
    description: "Your success is our mission. Every decision we make prioritizes your aspirations and well-being."
  },
  {
    icon: Zap,
    title: "Excellence",
    description: "We maintain the highest standards in guidance, support, and ethical practices at every step."
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Our partnerships with 850+ universities worldwide give you unparalleled access to opportunities."
  },
]

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section
        className="text-white py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(112deg, rgba(16,79,154,0.78), rgba(23,111,208,0.58)), url('https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Team</h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Empowering students to achieve their global education dreams since 2012.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#ff6b35] font-semibold text-sm tracking-widest uppercase mb-4">
                Our Story
              </p>
              <h2 className="text-3xl font-bold text-[#003366] mb-6">
                Why We Started Team
              </h2>
              <p className="text-[#666666] mb-4 leading-relaxed">
                Founded in 2012 by Anika Verma, Team was born from a simple observation: thousands of talented students didn't know where to begin their international education journey. Complex applications, visa processes, and scholarship searches created barriers to entry.
              </p>
              <p className="text-[#666666] mb-4 leading-relaxed">
                We decided to change that. Today, with a team of 12 expert counselors and partnerships across 45 countries, we've helped over 50,000 students pursue world-class education.
              </p>
              <p className="text-[#666666] leading-relaxed">
                Our success is measured not in applications submitted, but in dreams realized and lives transformed.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#003366] to-[#005299] rounded-lg p-8 text-white h-96 flex flex-col justify-center">
              <div className="space-y-6">
                <div>
                  <p className="text-4xl font-bold mb-2">12+</p>
                  <p className="text-blue-100">Years of Experience</p>
                </div>
                <div>
                  <p className="text-4xl font-bold mb-2">50K+</p>
                  <p className="text-blue-100">Students Guided</p>
                </div>
                <div>
                  <p className="text-4xl font-bold mb-2">850+</p>
                  <p className="text-blue-100">Partner Universities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">Our Values</h2>
            <p className="text-[#666666] max-w-2xl mx-auto">
              These principles guide every interaction and decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
                <div key={idx} className="bg-white rounded-lg p-8">
                  <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} className="text-[#003366]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#003366] mb-3">{value.title}</h3>
                  <p className="text-[#666666]">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">Meet Our Team</h2>
            <p className="text-[#666666] max-w-2xl mx-auto">
              Experienced counselors dedicated to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 border border-[#e0e0e0] text-center">
                <div className="w-20 h-20 bg-[#003366] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-lg font-semibold text-[#003366] mb-1">{member.name}</h3>
                <p className="text-sm text-[#ff6b35] font-semibold mb-3">{member.role}</p>
                <p className="text-sm text-[#666666] mb-3">{member.specialty}</p>
                <div className="flex items-center justify-center gap-1 text-sm text-[#999999]">
                  <CheckCircle size={16} className="text-[#28a745]" />
                  <span>{member.experience} years experience</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
