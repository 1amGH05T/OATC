import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="mt-16 text-gray-700 dark:text-white border-t border-black ">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col space-y-4">
          <Link to="/" className="flex items-center space-x-3">
            <img src="/logo.jpg" alt="Redeem Church logo" className="w-10 h-10 rounded-full" />
            <span className="text-xl font-bold">Overcomers Assembly Teens Church</span>
          </Link>
          <p className="text-sm">Building community through worship, service and discipleship. Join us Sundays at 10:00 AM.</p>
          <p>Give us a follow on our social media handles</p>
          <div className="flex space-x-3 text-sm">
            <a href="#" aria-label="Facebook" className="hover:text-indigo-600">Facebook</a>
            <a href="#" aria-label="Instagram" className="hover:text-indigo-600">Instagram</a>
            <a href="#" aria-label="YouTube" className="hover:text-indigo-600">YouTube</a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-indigo-600">Home</Link></li>
            <li><Link to="/about" className="hover:text-indigo-600">About</Link></li>
            <li><Link to="/visits" className="hover:text-indigo-600">Plan Your Visit</Link></li>
            <li><Link to="/events" className="hover:text-indigo-600">Events</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Connect</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="mailto:info@redeemchurch.org" className="hover:text-indigo-600">oatc@gmail.com</a></li>
            <li><a href="tel:+1234567890" className="hover:text-indigo-600">+1 (234) 567-890</a></li>
            <li className="text-sm">123 Church St, City, State</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Support</h4>
          <p className="text-sm mb-3">Your gifts make ministry possible. Thank you for partnering with us.</p>
          <Link to="/giving" className="bg-indigo-600 hover:bg-indigo-700 transition text-white px-4 py-2 rounded-full font-semibold">Give Online</Link>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <span>© {new Date().getFullYear()} Redeem Church. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
