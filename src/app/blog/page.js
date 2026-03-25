'use client'

import { Calendar, User, ArrowRight } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: "Complete Guide to UK University Applications",
    excerpt: "Step-by-step process for applying to universities in the United Kingdom, including UCAS, personal statements, and interviews.",
    author: "Anika Verma",
    date: "March 15, 2025",
    category: "Guides",
    image: "🇬🇧"
  },
  {
    id: 2,
    title: "Top Scholarships for Indian Students",
    excerpt: "Discover the most generous scholarship programs available for Indian students studying abroad. Updated for 2025.",
    author: "James Okafor",
    date: "March 12, 2025",
    category: "Scholarships",
    image: "🎓"
  },
  {
    id: 3,
    title: "Canada Visa Application: Everything You Need to Know",
    excerpt: "Complete breakdown of Canada study permit requirements, processing times, and best practices for approval.",
    author: "Mei Lin",
    date: "March 8, 2025",
    category: "Visas",
    image: "🇨🇦"
  },
  {
    id: 4,
    title: "Best Universities in Australia for Engineering",
    excerpt: "Top engineering institutions in Australia, their specializations, and why they're excellent choices for international students.",
    author: "Anika Verma",
    date: "March 1, 2025",
    category: "Programs",
    image: "🇦🇺"
  },
  {
    id: 5,
    title: "5 Mistakes to Avoid in Your University Application",
    excerpt: "Common errors that could hurt your applications and how to ensure your submissions stand out to admissions officers.",
    author: "James Okafor",
    date: "February 25, 2025",
    category: "Tips",
    image: "⚠️"
  },
  {
    id: 6,
    title: "Living Expenses Guide: Cost of Living by Country",
    excerpt: "Detailed breakdown of monthly expenses in popular study destinations to help you plan your budget.",
    author: "Mei Lin",
    date: "February 20, 2025",
    category: "Guides",
    image: "💰"
  }
]

export default function BlogPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section
        className="text-white py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(112deg, rgba(16,79,154,0.78), rgba(23,111,208,0.58)), url('https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Resources & Guides</h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Expert advice, tips, and guides to help you succeed in your study abroad journey.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          <div className="mb-16 bg-gradient-to-r from-blue-50 to-neutral-50 rounded-lg p-8 border border-[#e0e0e0]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <div className="inline-block bg-[#ff6b35] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  Featured
                </div>
                <h2 className="text-3xl font-bold text-[#003366] mb-4">
                  Complete Guide to UK University Applications
                </h2>
                <p className="text-[#666666] mb-6 leading-relaxed">
                  Everything you need to know about applying to universities in the United Kingdom. Learn about UCAS, writing personal statements, preparing for interviews, and navigating the UK education system.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:items-center text-sm text-[#999999] mb-6">
                  <div className="flex items-center gap-1">
                    <User size={16} />
                    <span>Anika Verma</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>March 15, 2025</span>
                  </div>
                </div>
                <button className="text-[#003366] font-semibold inline-flex items-center gap-2 hover:text-[#005299] transition-colors">
                  Read More <ArrowRight size={18} />
                </button>
              </div>
              <div className="bg-gradient-to-br from-[#003366] to-[#005299] rounded-lg p-12 flex items-center justify-center h-64">
                <span className="text-6xl">🇬🇧</span>
              </div>
            </div>
          </div>

          {/* All Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-neutral-50 rounded-lg overflow-hidden border border-[#e0e0e0] hover:border-[#003366] hover:shadow-lg transition-all"
              >
                <div className="bg-gradient-to-br from-blue-50 to-neutral-100 h-40 flex items-center justify-center">
                  <span className="text-5xl">{post.image}</span>
                </div>

                <div className="p-6">
                  <div className="inline-block bg-blue-50 text-[#003366] text-xs font-semibold px-2.5 py-1 rounded mb-3">
                    {post.category}
                  </div>

                  <h3 className="text-lg font-semibold text-[#003366] mb-3 hover:text-[#005299] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-sm text-[#666666] mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-[#999999] mb-4 pb-4 border-t border-[#e0e0e0]">
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <a href="#" className="text-[#003366] font-semibold text-sm inline-flex items-center gap-1 hover:text-[#005299] transition-colors">
                    Read Article <ArrowRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-[#003366] text-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-blue-100 mb-8">
            Subscribe to our newsletter for the latest guides, tips, and updates about studying abroad.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none text-[#1a1a1a]"
              required
            />
            <button
              type="submit"
              className="bg-[#ff6b35] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#e55b25] transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
