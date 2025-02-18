import React, { useState } from 'react';
import { Calendar, MapPin, Clock, DollarSign } from 'lucide-react';
import { Event } from '../types';
import { BookingModal } from './BookingModal';

interface EventCardProps {
  event: Event;
  onBook: (eventId: string, quantity: number) => void;
}

export function EventCard({ event, onBook }: EventCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBooking = (quantity: number) => {
    onBook(event.id, quantity);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
          <div className="space-y-2 text-gray-600">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center">
              <DollarSign className="w-4 h-4 mr-2" />
              <span>${event.price}</span>
            </div>
          </div>
          <p className="mt-2 text-gray-600 line-clamp-2">{event.description}</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-4 w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors"
          >
            Book Now
          </button>
        </div>
      </div>

      <BookingModal
        event={event}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleBooking}
      />
    </>
  );
}