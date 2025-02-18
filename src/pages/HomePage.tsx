import React from 'react';
import { EventCard } from '../components/EventCard';
import { Event } from '../types';
import { Search, Filter, Calendar, Users, MapPin, Star } from 'lucide-react';

const categories = ['All', 'Conference', 'Music', 'Business', 'Sports', 'Workshop'];

const sampleEvents: Event[] = [
  {
    id: '1',
    title: 'Sri Lanka Tech Conference 2024',
    description: 'Join us for the biggest tech conference in Sri Lanka this year.',
    date: '2024-04-15',
    time: '09:00 AM',
    location: 'Colombo, Sri Lanka',
    price: 299,
    category: 'Conference',
    organizer: 'Tech Sri Lanka',
    imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    availableTickets: 100
  },
  {
    id: '2',
    title: 'Sri Lankan Summer Music Festival',
    description: 'A weekend of amazing live music performances by Sri Lankan artists.',
    date: '2024-07-20',
    time: '12:00 PM',
    location: 'Galle, Sri Lanka',
    price: 150,
    category: 'Music',
    organizer: 'Sri Lanka Music Co',
    imageUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    availableTickets: 500
  },
  {
    id: '3',
    title: 'Sri Lankan Business Leadership Summit',
    description: 'Learn from top industry leaders in Sri Lanka.',
    date: '2024-05-10',
    time: '10:00 AM',
    location: 'Kandy, Sri Lanka',
    price: 399,
    category: 'Business',
    organizer: 'Sri Lanka Business Network',
    imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    availableTickets: 200
  }
];

const features = [
  { icon: <Calendar className="w-6 h-6" />, title: 'Easy Booking', description: 'Book your favorite events in just a few clicks' },
  { icon: <Users className="w-6 h-6" />, title: 'Large Community', description: 'Join thousands of event enthusiasts' },
  { icon: <MapPin className="w-6 h-6" />, title: 'Worldwide Events', description: 'Access events from around the globe' },
  { icon: <Star className="w-6 h-6" />, title: 'Quality Assurance', description: 'All events are verified for quality' }
];

export function HomePage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const handleBookEvent = (eventId: string) => {
    console.log('Booking event:', eventId);
  };

  return (
    <div className="space-y-16">
      <div className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="Event background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Your Next Great Event Awaits</h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Discover and book the most exciting events happening around you. From concerts to conferences, we've got everything you need for an unforgettable experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search events..."
                className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900"
              />
            </div>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center gap-2 justify-center">
              Search Events
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Browse by Category</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full whitespace-nowrap ${selectedCategory === category ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Featured Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleEvents.map((event) => (
            <EventCard key={event.id} event={event} onBook={handleBookEvent} />
          ))}
        </div>
      </div>
    </div>
  );
}
