import React from 'react';
import { Calendar, MapPin, Clock, DollarSign, Download } from 'lucide-react';

const bookings = [
  {
    id: '1',
    event: {
      title: 'Tech Conference 2024',
      date: '2024-04-15',
      time: '09:00 AM',
      location: 'San Francisco, CA',
    },
    quantity: 2,
    totalPrice: 598,
    status: 'confirmed',
    bookingDate: '2024-03-01',
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
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  {booking.status}
                </span>
                <p className="mt-2 text-gray-600">
                  {booking.quantity} {booking.quantity === 1 ? 'ticket' : 'tickets'}
                </p>
                <p className="font-semibold">${booking.totalPrice}</p>
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