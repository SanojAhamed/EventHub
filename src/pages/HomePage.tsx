import { Search } from 'lucide-react';

export function HomePage() {
  const features = [
    {
      icon: <Search />,
      title: 'Discover Events',
      description: 'Find the best events happening near you with ease.',
    },
    {
      icon: <Search />,
      title: 'Easy Booking',
      description: 'Book tickets instantly with our seamless platform.',
    },
    {
      icon: <Search />,
      title: 'Exclusive Offers',
      description: 'Get access to exclusive deals and discounts on events.',
    },
    {
      icon: <Search />,
      title: 'Personalized Recommendations',
      description: 'Receive event suggestions based on your interests.',
    },
  ];

  return (
    <div>
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
          <h1 className="text-5xl font-bold text-white mb-6">
            Your Next Great Event Awaits
          </h1>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About EventHub</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate about bringing people together through unforgettable events. 
            Our platform makes it easy to discover, book, and experience the best events in your area.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 text-orange-500 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
