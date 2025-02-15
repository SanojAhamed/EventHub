import { Search } from 'lucide-react';

export function HomePage() {
  return (
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
          Discover and book the most exciting events happening around you. From concerts to conferences, 
          we've got everything you need for an unforgettable experience.
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
  );
}
