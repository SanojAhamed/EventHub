import React from 'react';
import { Calendar, User, Home, Briefcase, Mail, Users, Ticket } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Header({ onNavigate, currentPage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { label: 'Home', icon: Home, page: 'home' },
    { label: 'Events', icon: Ticket, page: 'events' },
    { label: 'Services', icon: Briefcase, page: 'services' },
    { label: 'Contact', icon: Mail, page: 'contact' },
    { label: 'About', icon: Users, page: 'about' },
    { label: 'My Bookings', icon: Ticket, page: 'bookings' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <button 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <Calendar className="w-8 h-8 text-orange-500" />
            <span className="text-xl font-bold">EventHub</span>
          </button>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`flex items-center space-x-1 text-sm font-medium transition-colors
                  ${currentPage === item.page ? 'text-orange-500' : 'text-gray-600 hover:text-orange-500'}`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => onNavigate('signin')}
              className="flex items-center space-x-1 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
            >
              <User className="w-4 h-4" />
              <span>Sign In</span>
            </button>

            <button
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-orange-500 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}