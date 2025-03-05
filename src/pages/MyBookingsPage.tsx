import { Calendar, MapPin, Clock, DollarSign, Download } from 'lucide-react';

const bookings = [
  {
    id: '1',
    event: {
      title: 'SL Tech Expo 2024',
      date: '2024-05-20',
      time: '10:00 AM',
      location: 'BMICH, Colombo',
    },
    quantity: 1,
    totalPrice: 2500,
    status: 'confirmed',
    bookingDate: '2024-04-10',
  },
  {
    id: '2',
    event: {
      title: 'Colombo Music Festival',
      date: '2024-06-15',
      time: '06:00 PM',
      location: 'Galle Face Green, Colombo',
    },
    quantity: 2,
    totalPrice: 7000,
    status: 'pending',
    bookingDate: '2024-05-05',
  },
  {
    id: '3',
    event: {
      title: 'Jaffna Food Carnival',
      date: '2024-07-10',
      time: '04:00 PM',
      location: 'Jaffna Municipal Grounds',
    },
    quantity: 3,
    totalPrice: 4500,
    status: 'confirmed',
    bookingDate: '2024-06-01',
  },
  {
    id: '4',
    event: {
      title: 'Sri Lanka Robotics Challenge',
      date: '2024-08-12',
      time: '09:00 AM',
      location: 'University of Moratuwa',
    },
    quantity: 1,
    totalPrice: 1500,
    status: 'confirmed',
    bookingDate: '2024-07-02',
  },
  {
    id: '5',
    event: {
      title: 'Galle Literary Festival',
      date: '2024-09-05',
      time: '02:00 PM',
      location: 'Galle Fort, Galle',
    },
    quantity: 2,
    totalPrice: 5000,
    status: 'pending',
    bookingDate: '2024-08-01',
  },
];

export function MyBookingsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Bookings</h1>
      <div className="space-y-6">
        {bookings.map((booking) => (
          <div key={booking.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold mb-2">{booking.event.title}</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{booking.event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{booking.event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{booking.event.location}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    booking.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {booking.status}
                </span>
                <p className="mt-2 text-gray-600">
                  {booking.quantity} {booking.quantity === 1 ? 'ticket' : 'tickets'}
                </p>
                <p className="font-semibold">LKR {booking.totalPrice}</p>
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-4">
              <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                <Download className="w-4 h-4" />
                Download Ticket
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}