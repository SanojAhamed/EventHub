import { Calendar, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div>
            <button 
              className="flex items-center space-x-2 mb-6"
              onClick={() => onNavigate('home')}
            >
              <Calendar className="w-6 h-6 text-orange-500" />
              <span className="text-xl font-bold text-white">EventHub</span>
            </button>
            <p className="text-gray-400 mb-6">
              Making event planning and booking seamless for everyone. Join thousands of satisfied customers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => onNavigate('about')} className="text-gray-400 hover:text-white transition-colors"> About Us </button>
              </li>
              <li>
                <button onClick={() => onNavigate('events')} className="text-gray-400 hover:text-white transition-colors"> Browse Events </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="text-gray-400 hover:text-white transition-colors"> Services </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gallery')} className="text-gray-400 hover:text-white transition-colors"> Gallery</button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="text-gray-400 hover:text-white transition-colors"> Contact </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500" /> <span>support@eventhub.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500" />
                <span>+94 77 777 7777</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-orange-500" />
                <span>123, Colombo - 12</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates and exclusive offers.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} EventHub. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button onClick={() => onNavigate('privacy')} className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </button>
              <button onClick={() => onNavigate('terms')} className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </button>
              <button onClick={() => onNavigate('cookies')} className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
