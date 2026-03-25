'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#101114] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#ff6b35] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <div>
                <p className="text-lg font-bold">Team</p>
                <p className="text-xs text-blue-200">Study Abroad</p>
              </div>
            </div>
            <p className="text-blue-100 text-sm mb-4">
              Your trusted partner in pursuing quality education abroad.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">
                LinkedIn
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">
                Twitter
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">
                Facebook
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/programs" className="hover:text-white transition-colors">Programs</Link></li>
              <li><Link href="/universities" className="hover:text-white transition-colors">Universities</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Resources</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Profile Assessment</a></li>
              <li><a href="#" className="hover:text-white transition-colors">University Selection</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Application Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Visa Guidance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Scholarship Search</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-blue-100 text-sm">
              <div className="flex gap-2">
                <Phone size={16} className="flex-shrink-0 mt-0.5" />
                <span>+1 (800) 123-4567</span>
              </div>
              <div className="flex gap-2">
                <Mail size={16} className="flex-shrink-0 mt-0.5" />
                <span>hello@team.consulting</span>
              </div>
              <div className="flex gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>Team Education Consultancy, Kathmandu Nepal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-700 pt-8"></div>

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row items-center justify-between text-blue-100 text-sm">
          <p>&copy; {currentYear} Team. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
