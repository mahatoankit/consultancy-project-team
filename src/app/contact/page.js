'use client'

import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    alert('Thank you for your message. We will get back to you soon!')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <main className="bg-white">
      {/* Hero */}
      <section
        className="text-white py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(112deg, rgba(16,79,154,0.78), rgba(23,111,208,0.58)), url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Have questions? We're here to help. Contact us today.
          </p>
        </div>
      </section>

      {/* Contact methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="bg-neutral-50 rounded-lg p-8 border border-[#e0e0e0] text-center">
              <div className="bg-blue-50 w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone size={28} className="text-[#003366]" />
              </div>
              <h3 className="text-lg font-semibold text-[#003366] mb-2">Call Us</h3>
              <a href="tel:+18001234567" className="text-[#666666] hover:text-[#003366] transition-colors">
                +1 (800) 123-4567
              </a>
              <p className="text-xs text-[#999999] mt-2">Available 9 AM - 6 PM EST</p>
            </div>

            {/* Email */}
            <div className="bg-neutral-50 rounded-lg p-8 border border-[#e0e0e0] text-center">
              <div className="bg-blue-50 w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail size={28} className="text-[#003366]" />
              </div>
              <h3 className="text-lg font-semibold text-[#003366] mb-2">Email Us</h3>
              <a href="mailto:hello@team.consulting" className="text-[#666666] hover:text-[#003366] transition-colors">
                hello@team.consulting
              </a>
              <p className="text-xs text-[#999999] mt-2">We respond within 24 hours</p>
            </div>

            {/* Location */}
            <div className="bg-neutral-50 rounded-lg p-8 border border-[#e0e0e0] text-center">
              <div className="bg-blue-50 w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin size={28} className="text-[#003366]" />
              </div>
              <h3 className="text-lg font-semibold text-[#003366] mb-2">Visit Us</h3>
              <p className="text-[#666666]">123 Education Avenue</p>
              <p className="text-[#666666]">New York, NY 10001</p>
            </div>
          </div>

          <div className="bg-neutral-50 rounded-lg border border-[#e0e0e0] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Form */}
              <div className="lg:col-span-2 p-8 lg:p-12">
                <h2 className="text-2xl font-bold text-[#003366] mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-[#e0e0e0] rounded-lg focus:outline-none focus:border-[#003366]"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-[#e0e0e0] rounded-lg focus:outline-none focus:border-[#003366]"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-[#e0e0e0] rounded-lg focus:outline-none focus:border-[#003366]"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-[#e0e0e0] rounded-lg focus:outline-none focus:border-[#003366]"
                    >
                      <option value="">Select a topic</option>
                      <option value="consultation">Free Consultation</option>
                      <option value="programs">Program Information</option>
                      <option value="universities">University Information</option>
                      <option value="visa">Visa Support</option>
                      <option value="scholarship">Scholarship Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-2.5 border border-[#e0e0e0] rounded-lg focus:outline-none focus:border-[#003366] resize-none"
                      placeholder="Tell us more about your inquiry..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    Send Message
                  </button>
                </form>
              </div>

              {/* Info */}
              <div className="bg-[#003366] text-white p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-6">Quick Info</h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm font-semibold text-blue-100 mb-1">Hours of Operation</p>
                      <p className="text-white">Monday - Friday: 9 AM - 6 PM EST</p>
                      <p className="text-white">Saturday: 10 AM - 4 PM EST</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-blue-100 mb-1">Response Time</p>
                      <p className="text-white">We typically respond within 24 hours</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-blue-100 mb-1">Average Response</p>
                      <p className="text-white">Business hours: Within 1-2 hours</p>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-[#ff6b35] text-white font-semibold py-3 rounded-lg hover:bg-[#e55b25] transition-colors">
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
