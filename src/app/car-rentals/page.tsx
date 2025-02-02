import { cars } from '@/data/cars'
import Image from 'next/image'
import Link from 'next/link'
import { FaRupeeSign, FaArrowRight } from 'react-icons/fa'

export const metadata = {
  title: 'Book Cab in Ludhiana, Taxi Hire in Ludhiana at Lowest Cost',
  description: 'We at Epic Journey Cabs offers Taxi Hire Service in Ludhiana, Our Fleets are Amaze, Etios, Swift Dzire, Innova Crysta, 12 or 17 Seater Tempo Traveller',
  keywords: 'Etios, Honda Amaze, Crysta, Fortuner, Tempo Traveller'
}

export default function CarRentalsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-black opacity-40 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Car Rentals</h1>
            <p className="text-lg md:text-xl opacity-90">
              Find the perfect vehicle for your journey at the most competitive rates
            </p>
          </div>
        </div>
      </div>

      {/* Car Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div 
              key={car.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={car.imagePath}
                  alt={car.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {car.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-blue-600">
                    <FaRupeeSign className="mr-1" />
                    <span className="font-semibold">{car.pricePerKm}</span>
                    <span className="text-sm text-gray-500 ml-1">per km</span>
                  </div>
                  <Link 
                    href={`/car-rentals/${car.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Book Now
                    <FaArrowRight className="ml-2" />
                  </Link>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded">
                    {car.capacity} Seater
                  </span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-sm rounded">
                    AC
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Car Rental Service?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Service</h3>
              <p className="text-gray-600">Available round the clock for your convenience</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Safe & Secure</h3>
              <p className="text-gray-600">Professional drivers and well-maintained vehicles</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Rates</h3>
              <p className="text-gray-600">Competitive pricing with no hidden charges</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
