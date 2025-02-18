import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, DollarSign, Users } from 'lucide-react';
import { Event } from '../types';

interface BookingModalProps {
  event: Event;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (quantity: number) => void;
}

export function BookingModal({ event, isOpen, onClose, onConfirm }: BookingModalProps) {
  const [quantity, setQuantity] = useState(1);
  const totalPrice = event.price * quantity;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full m-4">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Book Event</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
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
                <Users className="w-4 h-4 mr-2" />
                <span>{event.availableTickets} tickets available</span>
              </div>
            </div>
          </div>

          <div className="border-t border-b border-gray-200 py-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Tickets
            </label>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 rounded-md border border-gray-300 hover:bg-gray-50"
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className="text-lg font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(Math.min(event.availableTickets, quantity + 1))}
                className="p-2 rounded-md border border-gray-300 hover:bg-gray-50"
                disabled={quantity >= event.availableTickets}
              >
                +
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center text-lg">
              <span className="font-medium">Total Price:</span>
              <div className="flex items-center text-orange-500 font-bold">
                <DollarSign className="w-5 h-5" />
                {totalPrice}
              </div>
            </div>

            <button
              onClick={() => onConfirm(quantity)}
              className="w-full bg-orange-500 text-white py-3 px-4 rounded-md hover:bg-orange-600 transition-colors font-medium"
            >
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}