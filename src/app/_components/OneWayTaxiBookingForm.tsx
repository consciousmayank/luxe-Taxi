"use client";

import { useState } from "react";
import { FaCar, FaCalendarAlt, FaMapMarkerAlt, FaUser, FaPhone, FaEnvelope } from "react-icons/fa";

interface OneWayTaxiBookingFormProps {
  fromCity: string;
  availableRoutes: {
    to: string;
    prices: {
      sedan: number;
      suv: number;
    };
  }[];
}

export default function OneWayTaxiBookingForm({ fromCity, availableRoutes }: OneWayTaxiBookingFormProps) {
  const [selectedRoute, setSelectedRoute] = useState(availableRoutes[0]);
  const [carType, setCarType] = useState<"sedan" | "suv">("sedan");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    const formData = {
      fromCity,
      toCity: selectedRoute.to,
      carType,
      price: carType === "sedan" ? selectedRoute.prices.sedan : selectedRoute.prices.suv,
      date,
      name,
      phone,
      email,
      pickupLocation,
    };
    
    console.log("Booking form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">From</label>
          <div className="mt-1 flex items-center">
            <FaMapMarkerAlt className="text-gray-400 mr-2" />
            <input
              type="text"
              value={fromCity}
              disabled
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">To</label>
          <div className="mt-1">
            <select
              value={selectedRoute.to}
              onChange={(e) => setSelectedRoute(availableRoutes.find(route => route.to === e.target.value) || availableRoutes[0])}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              {availableRoutes.map((route) => (
                <option key={route.to} value={route.to}>
                  {route.to}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Car Type</label>
          <div className="mt-1 flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="sedan"
                checked={carType === "sedan"}
                onChange={(e) => setCarType(e.target.value as "sedan")}
                className="form-radio text-blue-600"
              />
              <span className="ml-2">Sedan (₹{selectedRoute.prices.sedan})</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="suv"
                checked={carType === "suv"}
                onChange={(e) => setCarType(e.target.value as "suv")}
                className="form-radio text-blue-600"
              />
              <span className="ml-2">SUV (₹{selectedRoute.prices.suv})</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Date of Journey</label>
          <div className="mt-1 flex items-center">
            <FaCalendarAlt className="text-gray-400 mr-2" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Pickup Location</label>
          <div className="mt-1 flex items-center">
            <FaMapMarkerAlt className="text-gray-400 mr-2" />
            <input
              type="text"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              placeholder="Enter your pickup location"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <div className="mt-1 flex items-center">
            <FaUser className="text-gray-400 mr-2" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <div className="mt-1 flex items-center">
            <FaPhone className="text-gray-400 mr-2" />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <div className="mt-1 flex items-center">
            <FaEnvelope className="text-gray-400 mr-2" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Book Now
        </button>
      </div>
    </form>
  );
} 