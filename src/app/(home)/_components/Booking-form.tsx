'use client';

import { useState, FormEvent } from 'react';

interface FormData {
  name: string;
  mobile: string;
  email: string;
  bookingType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  mobile?: string;
  email?: string;
  bookingType?: string;
  message?: string;
}

const BookingForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    mobile: '',
    email: '',
    bookingType: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.mobile.match(/^\d{10}$/)) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.bookingType) {
      newErrors.bookingType = 'Please select a booking type';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Add your form submission logic here
    }
  };

  const handleMobileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData(prev => ({ ...prev, mobile: value }));
  };

  return (
    <div className="w-full mx-auto  h-full px-20 py-10">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col">
            <input
              type="text"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            />
            {errors.name && (
              <span className="text-red-500 text-sm mt-1">{errors.name}</span>
            )}
          </div>

          <div className="flex flex-col">
            <input
              type="tel"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Mobile"
              value={formData.mobile}
              onChange={handleMobileInput}
            />
            {errors.mobile && (
              <span className="text-red-500 text-sm mt-1">{errors.mobile}</span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col">
            <input
              type="email"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">{errors.email}</span>
            )}
          </div>

          <div className="flex flex-col">
            <select
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 transition-colors appearance-none bg-white bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e')] bg-no-repeat bg-[length:1em] bg-[95%_center]"
              value={formData.bookingType}
              onChange={(e) => setFormData(prev => ({ ...prev, bookingType: e.target.value }))}
            >
              <option value="">Booking For</option>
              <option value="local">Local Taxi</option>
              <option value="oneway">One Way Drop</option>
              <option value="tour">Tour Package</option>
              <option value="other">Other</option>
            </select>
            {errors.bookingType && (
              <span className="text-red-500 text-sm mt-1">{errors.bookingType}</span>
            )}
          </div>
        </div>

        <div className="mb-6">
          <div className="flex flex-col">
            <textarea
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 transition-colors min-h-[150px] resize-y"
              placeholder="Message"
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
            />
            {errors.message && (
              <span className="text-red-500 text-sm mt-1">{errors.message}</span>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookingForm;