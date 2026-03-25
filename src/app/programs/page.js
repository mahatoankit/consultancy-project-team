'use client'

import { DEGREES } from '@/constants/mockData'
import { Briefcase, Users, Book, Award, TrendingUp } from 'lucide-react'

const programDetails = [
  {
    icon: Book,
    title: "Undergraduate (UG)",
    description: "3-4 year degree programs for high school graduates. Explore broad disciplines before specializing."
  },
  {
    icon: TrendingUp,
    title: "Postgraduate (PG)",
    description: "Master's programs for graduates. Specialize your knowledge and advance your career."
  },
  {
    icon: Award,
    title: "PhD / Research",
    description: "Doctoral programs for those pursuing advanced research and academic careers."
  },
  {
    icon: Briefcase,
    title: "MBA / Management",
    description: "Business administration programs designed for career advancement and leadership."
  },
]

export default function ProgramsPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section
        className="text-white py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(112deg, rgba(16,79,154,0.78), rgba(23,111,208,0.58)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Study Programmes</h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Explore degree programs across universities worldwide.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {programDetails.map((program, idx) => {
              const Icon = program.icon
              return (
                <div
                  key={idx}
                  className="bg-neutral-50 rounded-lg p-8 border border-[#e0e0e0] hover:border-[#003366] hover:shadow-lg transition-all"
                >
                  <div className="bg-blue-50 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={28} className="text-[#003366]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#003366] mb-3">{program.title}</h3>
                  <p className="text-[#666666] leading-relaxed mb-4">{program.description}</p>
                  <button className="text-[#003366] font-semibold text-sm hover:text-[#005299] transition-colors">
                    Learn More →
                  </button>
                </div>
              )
            })}
          </div>

          {/* All Degrees */}
          <div className="bg-neutral-50 rounded-lg p-12">
            <h2 className="text-2xl font-bold text-[#003366] mb-8">Available Degree Levels</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {DEGREES.map((degree, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg p-6 border border-[#e0e0e0] hover:border-[#003366] transition-colors"
                >
                  <p className="text-[#003366] font-semibold">{degree}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Choose */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#003366] mb-6">How to Choose the Right Programme</h2>
              <ul className="space-y-4">
                {[
                  "Assess your academic background and career goals",
                  "Research universities that match your interests",
                  "Consider program length, cost, and location",
                  "Evaluate scholarship and financial aid options",
                  "Review admission requirements carefully",
                  "Consult with our experts for personalized advice"
                ].map((point, idx) => (
                  <li key={idx} className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#28a745] text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      ✓
                    </div>
                    <span className="text-[#1a1a1a]">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#003366] to-[#005299] rounded-lg p-8 text-white h-96 flex flex-col justify-between">
              <div>
                <p className="text-[#ff6b35] font-semibold text-sm mb-3">Need guidance?</p>
                <h3 className="text-2xl font-bold mb-3">Our experts can help</h3>
                <p className="text-blue-100 mb-6">We assess your profile and recommend programs tailored to your goals.</p>
              </div>
              <button className="w-full bg-[#ff6b35] text-white font-semibold py-3 rounded-lg hover:bg-[#e55b25] transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
