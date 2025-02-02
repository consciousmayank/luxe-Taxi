'use client'

import { useState } from 'react'
import { FaWhatsapp, FaPhone } from 'react-icons/fa'

interface BookingFormProps {
  service: string
}

export default function BookingForm({ service }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    pickupDate: '',
    pickupLocation: '',
    passengers: '',
    car: '',
    remarks: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Form validation
    if (!formData.name) {
      alert("Please enter Name")
      return
    }
    if (!formData.email) {
      alert("Please enter Email ID")
      return
    }
    if (!formData.mobile) {
      alert("Please enter Mobile No.")
      return
    }
    if (!formData.pickupDate) {
      alert("Please enter Date of Travel")
      return
    }
    if (!formData.passengers) {
      alert("Please enter the number of passengers")
      return
    }

    // Email validation
    const emailFilter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
    if (!emailFilter.test(formData.email)) {
      alert("Please enter a valid email address")
      return
    }

    // TODO: Implement form submission logic
    console.log('Form submitted:', { service, ...formData })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="reply-form">
      <h3 className="text-2xl font-semibold mb-6">Book Now</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input type="hidden" name="Tour" value={service} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>

          <div>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Mobile"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>

          <div>
            <input
              type="date"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleChange}
              placeholder="Pick-Up Date"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>

          <div>
            <input
              type="text"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleChange}
              placeholder="Pick-Up Location"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>

          <div>
            <input
              type="number"
              name="passengers"
              value={formData.passengers}
              onChange={handleChange}
              placeholder="No. of Passengers"
              min="1"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>

          <div className="md:col-span-2">
            <textarea
              name="remarks"
              value={formData.remarks}
              onChange={handleChange}
              placeholder="Additional Requirements or Remarks"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="bg-yellow-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-yellow-600 transition-colors"
          >
            Book Now
          </button>

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
    </div>
  )
}