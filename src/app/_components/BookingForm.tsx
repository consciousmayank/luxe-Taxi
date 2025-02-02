'use client'

import { useState } from 'react'
import { FaWhatsapp, FaPhone } from 'react-icons/fa'
// import { cars, getCarDropdownOptions } from '@/data/cars'
import { cars } from '@/data/cars'

interface BookingFormProps {
  defaultCar?: string
}

export default function BookingForm({ defaultCar }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    pickupDate: '',
    pickupLocation: '',
    passengers: '',
    car: defaultCar || 'Swift/Etios (1+4 Seater)',
    remarks: ''
  })
  // const carOptions = getCarDropdownOptions()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    // You can add your form submission logic here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
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
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
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
            placeholder="Mobile"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            required
          />
        </div>

        {/* Pickup Date */}
        <div>
          <input
            type="date"
            name="pickupDate"
            value={formData.pickupDate}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            required
          />
        </div>

        {/* Pickup Location */}
        <div>
          <input
            type="text"
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleChange}
            placeholder="Pickup Location"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            required
          />
        </div>

        {/* Number of Passengers */}
        <div>
          <input
            type="number"
            name="passengers"
            value={formData.passengers}
            onChange={handleChange}
            placeholder="Number of Passengers"
            min="1"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            required
          />
        </div>

        {/* Car Selection */}
        <div className="md:col-span-2">
          <select
            name="car"
            value={formData.car}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            required
          >
            {cars.map((car) => (
              <option key={car.slug} value={car.title}>
                {car.title}
              </option>
            ))}
          </select>
        </div>

        {/* Remarks */}
        <div className="md:col-span-2">
          <textarea
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
            placeholder="Additional Requirements or Remarks"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          ></textarea>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-between items-center">
        <button
          type="submit"
          className="bg-yellow-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-yellow-600 transition-colors"
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
          <a
            href="tel:+919996179322"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
          >
            <FaPhone className="text-xl" />
            <span className="hidden md:inline">Call Us</span>
          </a>
        </div>
      </div>
    </form>
  )
} 