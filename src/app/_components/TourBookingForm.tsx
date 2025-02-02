'use client';

import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

interface TourBookingFormProps {
  tourTitle: string;
  onSubmit: (data: FormData) => void;
}

interface FormData {
  fullName: string;
  email: string;
  mobile: string;
  travelDate: string;
  numberOfTravelers: string;
  specialRequirements: string;
}

export default function TourBookingForm({ tourTitle, onSubmit }: TourBookingFormProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    mobile: '',
    travelDate: '',
    numberOfTravelers: '',
    specialRequirements: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-6">Book {tourTitle}</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4">
          {/* Full Name */}
          <div>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>

          {/* Mobile */}
          <div>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Mobile Number"
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit phone number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>

          {/* Travel Date */}
          <div>
            <input
              type="date"
              name="travelDate"
              value={formData.travelDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>

          {/* Number of Travelers */}
          <div>
            <input
              type="number"
              name="numberOfTravelers"
              value={formData.numberOfTravelers}
              onChange={handleChange}
              placeholder="Number of Travelers"
              min="1"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>

          {/* Special Requirements */}
          <div>
            <textarea
              name="specialRequirements"
              value={formData.specialRequirements}
              onChange={handleChange}
              placeholder="Special Requirements or Remarks"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        {/* Submit Button and Contact Options */}
        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
          >
            Book Now
          </button>

          {/* Contact Options */}
          <div className="flex gap-4">
            <a
              href="https://wa.me/+919996179322"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-green-600 hover:text-green-700"
            >
              <FaWhatsapp className="text-xl" />
              <span className="hidden md:inline">WhatsApp</span>
            </a>
            {/* <a
              href="tel:+919996179322"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
            >
              <FaPhone className="text-xl" />
              <span className="hidden md:inline">Call Us</span>
            </a> */}
          </div>
        </div>
      </form>
    </div>
  )
}
