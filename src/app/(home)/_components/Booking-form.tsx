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
    <div className="m-8 lg:m-0">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* First row - Name and Mobile */}
        <div className='flex flex-row gap-4 w-full'>
        <div className="w-full">
            <input
              type="text"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            />
            {errors.name && (
              <span className="text-red-500 text-sm mt-1 block">{errors.name}</span>
            )}
          </div>

          <div className="w-full">
            <input
              type="tel"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Mobile"
              value={formData.mobile}
              onChange={handleMobileInput}
            />
            {errors.mobile && (
              <span className="text-red-500 text-sm mt-1 block">{errors.mobile}</span>
            )}
          </div>
        </div>

        {/* Second row - Email and Booking Type */}
        <div className="flex flex-row gap-4 w-full">
          <div className="w-full">
            <input
              type="email"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1 block">{errors.email}</span>
            )}
          </div>

          <div className="w-full">
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
              <span className="text-red-500 text-sm mt-1 block">{errors.bookingType}</span>
            )}
          </div>
        </div>

        {/* Message field */}
        <div className="w-full">
          <textarea
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 transition-colors min-h-[150px] resize-y"
            placeholder="Message"
            value={formData.message}
            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          />
          {errors.message && (
            <span className="text-red-500 text-sm mt-1 block">{errors.message}</span>
          )}
        </div>

        {/* Submit button */}
        <div className="w-full">
          <button
            type="submit"
            className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;